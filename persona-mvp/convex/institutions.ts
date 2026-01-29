import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    type: v.optional(
      v.union(
        v.literal("basisonderwijs"),
        v.literal("secundair"),
        v.literal("hoger"),
        v.literal("volwassenenonderwijs"),
        v.literal("clb")
      )
    ),
  },
  handler: async (ctx, args) => {
    if (args.type) {
      return await ctx.db
        .query("institutions")
        .withIndex("by_type", (q) => q.eq("type", args.type!))
        .collect();
    }
    return await ctx.db.query("institutions").collect();
  },
});

export const get = query({
  args: { id: v.id("institutions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    instellingsnummer: v.string(),
    name: v.string(),
    type: v.union(
      v.literal("basisonderwijs"),
      v.literal("secundair"),
      v.literal("hoger"),
      v.literal("volwassenenonderwijs"),
      v.literal("clb")
    ),
    address: v.string(),
    municipality: v.string(),
    postalCode: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("institutions", {
      ...args,
      active: true,
    });
  },
});
