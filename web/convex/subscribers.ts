import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: {
    email: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = args.email.toLowerCase().trim();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Invalid email address");
    }

    // Check for duplicate
    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      // Silently succeed — don't reveal if email exists
      return { success: true };
    }

    await ctx.db.insert("subscribers", {
      email,
      source: args.source ?? "website",
      createdAt: Date.now(),
    });

    return { success: true };
  },
});
