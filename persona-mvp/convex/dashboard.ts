import { query } from "./_generated/server";

export const stats = query({
  args: {},
  handler: async (ctx) => {
    const personnel = await ctx.db.query("personnel").collect();
    const assignments = await ctx.db.query("assignments").collect();
    const interruptions = await ctx.db.query("serviceInterruptions").collect();
    const institutions = await ctx.db.query("institutions").collect();

    const activeAssignments = assignments.filter((a) => a.status === "active");

    return {
      totalPersonnel: personnel.length,
      totalInstitutions: institutions.length,
      activeAssignments: activeAssignments.length,
      activeInterruptions: interruptions.filter((i) => i.status === "active")
        .length,
      assignmentsByType: [
        {
          type: "VAST",
          count: activeAssignments.filter((a) => a.type === "VAST").length,
        },
        {
          type: "TIJDELIJK",
          count: activeAssignments.filter((a) => a.type === "TIJDELIJK").length,
        },
        {
          type: "TADD",
          count: activeAssignments.filter((a) => a.type === "TADD").length,
        },
      ],
    };
  },
});
