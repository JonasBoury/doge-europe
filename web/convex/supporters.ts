import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const support = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = args.email.toLowerCase().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Invalid email address");
    }

    const existing = await ctx.db
      .query("supporters")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      return { success: true };
    }

    await ctx.db.insert("supporters", {
      email,
      name: args.name?.trim() || undefined,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

export const getCount = query({
  args: {},
  handler: async (ctx) => {
    const supporters = await ctx.db.query("supporters").collect();
    return supporters.length;
  },
});
