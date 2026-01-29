import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  institutions: defineTable({
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
    active: v.boolean(),
  })
    .index("by_instellingsnummer", ["instellingsnummer"])
    .index("by_municipality", ["municipality"])
    .index("by_type", ["type"]),

  personnel: defineTable({
    stamboeknummer: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    dateOfBirth: v.string(),
    gender: v.union(v.literal("M"), v.literal("V"), v.literal("X")),
    email: v.optional(v.string()),
    startDateEducation: v.string(),
    totalSeniorityDays: v.number(),
    active: v.boolean(),
  })
    .index("by_stamboeknummer", ["stamboeknummer"])
    .index("by_name", ["lastName", "firstName"]),

  assignments: defineTable({
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
    status: v.union(
      v.literal("active"),
      v.literal("ended"),
      v.literal("pending"),
      v.literal("cancelled")
    ),
    baremaCode: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_personnel", ["personnelId"])
    .index("by_institution", ["institutionId"])
    .index("by_status", ["status"]),

  serviceInterruptions: defineTable({
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
    status: v.union(
      v.literal("active"),
      v.literal("ended"),
      v.literal("pending"),
      v.literal("rejected")
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_personnel", ["personnelId"])
    .index("by_assignment", ["assignmentId"])
    .index("by_status", ["status"]),

  salaryScales: defineTable({
    baremaCode: v.string(),
    description: v.string(),
    seniorityYears: v.number(),
    annualGross: v.number(),
    monthlyGross: v.number(),
    effectiveDate: v.string(),
  })
    .index("by_barema", ["baremaCode"])
    .index("by_barema_seniority", ["baremaCode", "seniorityYears"]),

  auditLog: defineTable({
    entityType: v.string(),
    entityId: v.string(),
    action: v.union(
      v.literal("create"),
      v.literal("update"),
      v.literal("delete")
    ),
    changes: v.string(),
    performedBy: v.string(),
    performedAt: v.number(),
  })
    .index("by_entity", ["entityType", "entityId"])
    .index("by_time", ["performedAt"]),
});
