import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listByPersonnel = query({
  args: { personnelId: v.id("personnel") },
  handler: async (ctx, args) => {
    const assignments = await ctx.db
      .query("assignments")
      .withIndex("by_personnel", (q) => q.eq("personnelId", args.personnelId))
      .collect();

    return await Promise.all(
      assignments.map(async (a) => {
        const institution = await ctx.db.get(a.institutionId);
        return { ...a, institutionName: institution?.name ?? "Onbekend" };
      })
    );
  },
});

export const listByInstitution = query({
  args: { institutionId: v.id("institutions") },
  handler: async (ctx, args) => {
    const assignments = await ctx.db
      .query("assignments")
      .withIndex("by_institution", (q) =>
        q.eq("institutionId", args.institutionId)
      )
      .collect();

    return await Promise.all(
      assignments.map(async (a) => {
        const person = await ctx.db.get(a.personnelId);
        return {
          ...a,
          personnelName: person
            ? `${person.firstName} ${person.lastName}`
            : "Onbekend",
        };
      })
    );
  },
});

export const get = query({
  args: { id: v.id("assignments") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    personnelId: v.id("personnel"),
    institutionId: v.id("institutions"),
    type: v.union(
      v.literal("VAST"),
      v.literal("TIJDELIJK"),
      v.literal("TADD")
    ),
    ambtcode: v.string(),
    ambtDescription: v.string(),
    volumePercentage: v.number(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    baremaCode: v.string(),
  },
  handler: async (ctx, args) => {
    // Validate: check total volume
    const existing = await ctx.db
      .query("assignments")
      .withIndex("by_personnel", (q) => q.eq("personnelId", args.personnelId))
      .collect();

    const activeTotal = existing
      .filter((a) => a.status === "active")
      .reduce((sum, a) => sum + a.volumePercentage, 0);

    if (activeTotal + args.volumePercentage > 100) {
      throw new Error(
        `Totaal volume zou ${activeTotal + args.volumePercentage}% zijn (max 100%). Huidig actief: ${activeTotal}%.`
      );
    }

    // Validate: TADD eligibility
    if (args.type === "TADD") {
      const person = await ctx.db.get(args.personnelId);
      if (person && person.totalSeniorityDays < 290) {
        throw new Error(
          `TADD vereist minstens 290 dagen anciënniteit. Huidig: ${person.totalSeniorityDays} dagen.`
        );
      }
    }

    // Validate: no date overlap for same function at same institution
    const overlapping = existing.filter((a) => {
      if (a.status !== "active") return false;
      if (a.ambtcode !== args.ambtcode) return false;
      if (a.institutionId !== args.institutionId) return false;

      const aStart = new Date(a.startDate);
      const aEnd = a.endDate ? new Date(a.endDate) : null;
      const newStart = new Date(args.startDate);
      const newEnd = args.endDate ? new Date(args.endDate) : null;

      return (
        (newEnd === null || aStart <= newEnd) &&
        (aEnd === null || newStart <= aEnd)
      );
    });

    if (overlapping.length > 0) {
      throw new Error(
        `Overlappende opdracht voor ${args.ambtcode} bij dezelfde instelling.`
      );
    }

    const now = Date.now();
    const id = await ctx.db.insert("assignments", {
      ...args,
      status: "active",
      createdAt: now,
      updatedAt: now,
    });

    await ctx.db.insert("auditLog", {
      entityType: "assignments",
      entityId: id,
      action: "create",
      changes: JSON.stringify(args),
      performedBy: "system",
      performedAt: now,
    });

    return id;
  },
});

export const end = mutation({
  args: {
    id: v.id("assignments"),
    endDate: v.string(),
  },
  handler: async (ctx, args) => {
    const assignment = await ctx.db.get(args.id);
    if (!assignment) throw new Error("Opdracht niet gevonden");

    await ctx.db.patch(args.id, {
      status: "ended",
      endDate: args.endDate,
      updatedAt: Date.now(),
    });

    await ctx.db.insert("auditLog", {
      entityType: "assignments",
      entityId: args.id,
      action: "update",
      changes: JSON.stringify({ status: "ended", endDate: args.endDate }),
      performedBy: "system",
      performedAt: Date.now(),
    });
  },
});
