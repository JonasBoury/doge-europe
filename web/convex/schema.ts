import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  subscribers: defineTable({
    email: v.string(),
    source: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
  supporters: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
  applicants: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    coolestBuild: v.string(),
    socialProfile: v.optional(v.string()),
    websiteUrl: v.optional(v.string()),
    monthlyAiSpending: v.optional(v.string()),
    brokenGovThing: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
