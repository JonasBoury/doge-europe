import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listByPersonnel = query({
  args: { personnelId: v.id("personnel") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("serviceInterruptions")
      .withIndex("by_personnel", (q) => q.eq("personnelId", args.personnelId))
      .collect();
  },
});

export const create = mutation({
  args: {
    personnelId: v.id("personnel"),
    assignmentId: v.optional(v.id("assignments")),
    type: v.union(
      v.literal("ziekteverlof"),
      v.literal("bevallingsverlof"),
      v.literal("ouderschapsverlof"),
      v.literal("loopbaanonderbreking"),
      v.literal("politiek_verlof"),
      v.literal("tbs_persoonlijke_redenen"),
      v.literal("other")
    ),
    interruptionCode: v.string(),
    description: v.optional(v.string()),
    volumePercentage: v.number(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // If linked to assignment, validate volume
    if (args.assignmentId) {
      const assignment = await ctx.db.get(args.assignmentId);
      if (!assignment) throw new Error("Opdracht niet gevonden");

      const existingInterruptions = await ctx.db
        .query("serviceInterruptions")
        .withIndex("by_assignment", (q) =>
          q.eq("assignmentId", args.assignmentId!)
        )
        .collect();

      const activeTotal = existingInterruptions
        .filter((i) => i.status === "active")
        .reduce((sum, i) => sum + i.volumePercentage, 0);

      if (activeTotal + args.volumePercentage > assignment.volumePercentage) {
        throw new Error(
          `Totale onderbreking (${activeTotal + args.volumePercentage}%) overschrijdt opdrachtvolume (${assignment.volumePercentage}%).`
        );
      }
    }

    const now = Date.now();
    const id = await ctx.db.insert("serviceInterruptions", {
      ...args,
      status: "active",
      createdAt: now,
      updatedAt: now,
    });

    await ctx.db.insert("auditLog", {
      entityType: "serviceInterruptions",
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
    id: v.id("serviceInterruptions"),
    endDate: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "ended",
      endDate: args.endDate,
      updatedAt: Date.now(),
    });

    await ctx.db.insert("auditLog", {
      entityType: "serviceInterruptions",
      entityId: args.id,
      action: "update",
      changes: JSON.stringify({ status: "ended", endDate: args.endDate }),
      performedBy: "system",
      performedAt: Date.now(),
    });
  },
});
