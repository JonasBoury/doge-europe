import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    search: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const all = await ctx.db.query("personnel").collect();

    if (args.search) {
      const term = args.search.toLowerCase();
      return all.filter(
        (p) =>
          p.firstName.toLowerCase().includes(term) ||
          p.lastName.toLowerCase().includes(term) ||
          p.stamboeknummer.includes(term)
      );
    }

    return all;
  },
});

export const get = query({
  args: { id: v.id("personnel") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getWithDetails = query({
  args: { id: v.id("personnel") },
  handler: async (ctx, args) => {
    const person = await ctx.db.get(args.id);
    if (!person) return null;

    const assignments = await ctx.db
      .query("assignments")
      .withIndex("by_personnel", (q) => q.eq("personnelId", args.id))
      .collect();

    const interruptions = await ctx.db
      .query("serviceInterruptions")
      .withIndex("by_personnel", (q) => q.eq("personnelId", args.id))
      .collect();

    // Resolve institution names for assignments
    const assignmentsWithInstitutions = await Promise.all(
      assignments.map(async (a) => {
        const institution = await ctx.db.get(a.institutionId);
        return { ...a, institutionName: institution?.name ?? "Onbekend" };
      })
    );

    return {
      ...person,
      assignments: assignmentsWithInstitutions,
      interruptions,
    };
  },
});

export const create = mutation({
  args: {
    stamboeknummer: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    dateOfBirth: v.string(),
    gender: v.union(v.literal("M"), v.literal("V"), v.literal("X")),
    email: v.optional(v.string()),
    startDateEducation: v.string(),
    totalSeniorityDays: v.number(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("personnel", {
      ...args,
      active: true,
    });

    await ctx.db.insert("auditLog", {
      entityType: "personnel",
      entityId: id,
      action: "create",
      changes: JSON.stringify(args),
      performedBy: "system",
      performedAt: Date.now(),
    });

    return id;
  },
});

export const update = mutation({
  args: {
    id: v.id("personnel"),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    email: v.optional(v.string()),
    totalSeniorityDays: v.optional(v.number()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Personeelslid niet gevonden");

    await ctx.db.patch(id, updates);

    await ctx.db.insert("auditLog", {
      entityType: "personnel",
      entityId: id,
      action: "update",
      changes: JSON.stringify(updates),
      performedBy: "system",
      performedAt: Date.now(),
    });
  },
});
