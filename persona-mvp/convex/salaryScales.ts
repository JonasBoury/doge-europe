import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("salaryScales").collect();
  },
});

export const listBaremaCodes = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("salaryScales").collect();
    const seen = new Map<string, string>();
    for (const s of all) {
      if (!seen.has(s.baremaCode)) {
        seen.set(s.baremaCode, s.description);
      }
    }
    return Array.from(seen.entries()).map(([code, description]) => ({
      code,
      description,
    }));
  },
});

export const getByBaremaAndSeniority = query({
  args: {
    baremaCode: v.string(),
    seniorityYears: v.number(),
  },
  handler: async (ctx, args) => {
    const scales = await ctx.db
      .query("salaryScales")
      .withIndex("by_barema", (q) => q.eq("baremaCode", args.baremaCode))
      .collect();

    // Find the scale with the highest seniority that's <= the requested years
    const matching = scales
      .filter((s) => s.seniorityYears <= args.seniorityYears)
      .sort((a, b) => b.seniorityYears - a.seniorityYears);

    return matching[0] || null;
  },
});
