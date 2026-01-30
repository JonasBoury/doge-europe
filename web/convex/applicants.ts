import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    coolestBuild: v.string(),
    socialProfile: v.optional(v.string()),
    websiteUrl: v.optional(v.string()),
    monthlyAiSpending: v.optional(v.string()),
    brokenGovThing: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.toLowerCase().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Invalid email address");
    }

    const existing = await ctx.db
      .query("applicants")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      throw new Error("You have already submitted an application");
    }

    await ctx.db.insert("applicants", {
      firstName: args.firstName.trim(),
      lastName: args.lastName.trim(),
      email,
      coolestBuild: args.coolestBuild.trim(),
      socialProfile: args.socialProfile?.trim() || undefined,
      websiteUrl: args.websiteUrl?.trim() || undefined,
      monthlyAiSpending: args.monthlyAiSpending?.trim() || undefined,
      brokenGovThing: args.brokenGovThing.trim(),
      createdAt: Date.now(),
    });

    return { success: true };
  },
});
