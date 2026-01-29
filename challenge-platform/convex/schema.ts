import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  agencies: defineTable({
    name: v.string(),
    slug: v.string(),
    countryCode: v.string(),
    verified: v.boolean(),
    logoUrl: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  users: defineTable({
    email: v.string(),
    name: v.string(),
    role: v.union(v.literal("agency"), v.literal("team"), v.literal("admin")),
    agencyId: v.optional(v.id("agencies")),
    teamId: v.optional(v.id("teams")),
    verified: v.boolean(),
  }).index("by_email", ["email"]),

  teams: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    verified: v.boolean(),
    skills: v.array(v.string()),
    portfolioUrls: v.array(v.string()),
  }).index("by_slug", ["slug"]),

  teamMembers: defineTable({
    teamId: v.id("teams"),
    userId: v.id("users"),
    role: v.union(v.literal("lead"), v.literal("member")),
  })
    .index("by_team", ["teamId"])
    .index("by_user", ["userId"]),

  challenges: defineTable({
    agencyId: v.id("agencies"),
    status: v.union(
      v.literal("draft"),
      v.literal("published"),
      v.literal("building"),
      v.literal("evaluating"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    title: v.string(),
    problemStatement: v.string(),
    successMetrics: v.array(
      v.object({
        name: v.string(),
        description: v.string(),
        target: v.string(),
        weight: v.number(),
      })
    ),
    evaluationCriteria: v.array(
      v.object({
        name: v.string(),
        description: v.string(),
        weight: v.number(),
      })
    ),
    budgetMin: v.number(),
    budgetMax: v.number(),
    currency: v.string(),
    buildDurationWeeks: v.number(),
    publishedAt: v.optional(v.number()),
    applicationsCloseAt: v.optional(v.number()),
    buildStartsAt: v.optional(v.number()),
    buildEndsAt: v.optional(v.number()),
    evaluationEndsAt: v.optional(v.number()),
    userAccessDescription: v.string(),
    dataAccessDescription: v.optional(v.string()),
    legalRequirements: v.array(v.string()),
    openSourceLicense: v.string(),
    tags: v.array(v.string()),
  })
    .index("by_agency", ["agencyId"])
    .index("by_status", ["status"]),

  applications: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    status: v.union(
      v.literal("pending"),
      v.literal("accepted"),
      v.literal("rejected"),
      v.literal("withdrawn")
    ),
    approachDescription: v.string(),
    appliedAt: v.number(),
    reviewedAt: v.optional(v.number()),
    reviewedBy: v.optional(v.id("users")),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_team", ["teamId"]),

  checkins: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    weekNumber: v.number(),
    progressSummary: v.string(),
    demoUrl: v.optional(v.string()),
    blockers: v.array(v.string()),
    questions: v.array(v.string()),
    nextWeekGoals: v.array(v.string()),
    submittedAt: v.number(),
  })
    .index("by_challenge_team", ["challengeId", "teamId"])
    .index("by_challenge_week", ["challengeId", "weekNumber"]),

  submissions: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    prototypeUrl: v.string(),
    repositoryUrl: v.string(),
    documentationUrl: v.optional(v.string()),
    demoVideoId: v.optional(v.id("_storage")),
    submittedAt: v.number(),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_team", ["teamId"]),

  evaluations: defineTable({
    submissionId: v.id("submissions"),
    automatedChecks: v.object({
      accessibility: v.boolean(),
      security: v.boolean(),
      performance: v.boolean(),
      codeQuality: v.boolean(),
      details: v.optional(v.string()),
    }),
    userTestingScore: v.optional(
      v.object({
        taskCompletion: v.number(),
        timeToComplete: v.number(),
        satisfaction: v.number(),
        feedback: v.array(v.string()),
      })
    ),
    technicalScore: v.optional(
      v.object({
        codeQuality: v.number(),
        architecture: v.number(),
        maintainability: v.number(),
        security: v.number(),
        reviewerNotes: v.string(),
      })
    ),
    agencyScore: v.optional(
      v.object({
        problemAlignment: v.number(),
        metricAchievement: v.number(),
        integrationFeasibility: v.number(),
        teamResponsiveness: v.number(),
        notes: v.string(),
      })
    ),
    totalScore: v.optional(v.number()),
    rank: v.optional(v.number()),
    completedAt: v.optional(v.number()),
  }).index("by_submission", ["submissionId"]),

  payments: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    milestone: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("paid"),
      v.literal("rejected")
    ),
    approvedAt: v.optional(v.number()),
    approvedBy: v.optional(v.id("users")),
    paidAt: v.optional(v.number()),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_team", ["teamId"]),

  questions: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    question: v.string(),
    answer: v.optional(v.string()),
    answeredAt: v.optional(v.number()),
    answeredBy: v.optional(v.id("users")),
    askedAt: v.number(),
  }).index("by_challenge", ["challengeId"]),
});
