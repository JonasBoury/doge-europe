/**
 * Business rules for Flemish education personnel management.
 * Pure functions — no database dependency. Reusable on client and server.
 */

export interface AssignmentData {
  _id?: string;
  personnelId: string;
  institutionId: string;
  type: "VAST" | "TIJDELIJK" | "TADD";
  ambtcode: string;
  volumePercentage: number;
  startDate: string;
  endDate?: string;
  status: "active" | "ended" | "pending" | "cancelled";
}

export interface InterruptionData {
  _id?: string;
  personnelId: string;
  assignmentId?: string;
  volumePercentage: number;
  startDate: string;
  endDate?: string;
  status: "active" | "ended" | "pending" | "rejected";
}

/**
 * Rule: Total active assignment volume for a person cannot exceed 100%.
 */
export function validateTotalVolume(
  existingAssignments: AssignmentData[],
  newVolume: number,
  excludeId?: string
): { valid: boolean; totalVolume: number; message?: string } {
  const activeTotal = existingAssignments
    .filter((a) => a.status === "active" && a._id !== excludeId)
    .reduce((sum, a) => sum + a.volumePercentage, 0);

  const totalVolume = activeTotal + newVolume;

  if (totalVolume > 100) {
    return {
      valid: false,
      totalVolume,
      message: `Totaal volume zou ${totalVolume}% zijn (max 100%). Huidig actief volume: ${activeTotal}%.`,
    };
  }

  return { valid: true, totalVolume };
}

/**
 * Rule: TADD requires at least 290 days of seniority, of which 200 worked.
 * Simplified: we check total seniority days >= 290.
 */
export function validateTADDEligibility(totalSeniorityDays: number): {
  eligible: boolean;
  daysNeeded: number;
  message?: string;
} {
  const REQUIRED_DAYS = 290;

  if (totalSeniorityDays >= REQUIRED_DAYS) {
    return { eligible: true, daysNeeded: 0 };
  }

  return {
    eligible: false,
    daysNeeded: REQUIRED_DAYS - totalSeniorityDays,
    message: `TADD vereist minstens ${REQUIRED_DAYS} dagen anciënniteit. Huidig: ${totalSeniorityDays} dagen (nog ${REQUIRED_DAYS - totalSeniorityDays} nodig).`,
  };
}

/**
 * Rule: No overlapping assignments for the same function at the same institution.
 */
export function validateAssignmentDateOverlap(
  existing: AssignmentData[],
  newStart: string,
  newEnd: string | undefined,
  ambtcode: string,
  institutionId: string,
  excludeId?: string
): { valid: boolean; conflicting?: AssignmentData; message?: string } {
  const start = new Date(newStart);
  const end = newEnd ? new Date(newEnd) : null;

  for (const a of existing) {
    if (a._id === excludeId) continue;
    if (a.status !== "active") continue;
    if (a.ambtcode !== ambtcode || a.institutionId !== institutionId) continue;

    const aStart = new Date(a.startDate);
    const aEnd = a.endDate ? new Date(a.endDate) : null;

    const overlaps =
      (end === null || aStart <= end) && (aEnd === null || start <= aEnd);

    if (overlaps) {
      return {
        valid: false,
        conflicting: a,
        message: `Overlappende opdracht gevonden voor ${ambtcode} bij dezelfde instelling (${a.startDate} - ${a.endDate || "lopend"}).`,
      };
    }
  }

  return { valid: true };
}

/**
 * Calculate effective volume after subtracting active interruptions.
 */
export function calculateEffectiveVolume(
  assignmentVolume: number,
  interruptions: InterruptionData[]
): number {
  const activeInterruptionVolume = interruptions
    .filter((i) => i.status === "active")
    .reduce((sum, i) => sum + i.volumePercentage, 0);

  return Math.max(0, assignmentVolume - activeInterruptionVolume);
}

/**
 * Validate that a service interruption doesn't reduce effective volume below 0.
 */
export function validateInterruptionVolume(
  assignmentVolume: number,
  existingInterruptions: InterruptionData[],
  newInterruptionVolume: number,
  excludeId?: string
): { valid: boolean; effectiveVolume: number; message?: string } {
  const currentInterruptionTotal = existingInterruptions
    .filter((i) => i.status === "active" && i._id !== excludeId)
    .reduce((sum, i) => sum + i.volumePercentage, 0);

  const totalInterruption = currentInterruptionTotal + newInterruptionVolume;
  const effectiveVolume = assignmentVolume - totalInterruption;

  if (totalInterruption > assignmentVolume) {
    return {
      valid: false,
      effectiveVolume,
      message: `Totale onderbreking (${totalInterruption}%) overschrijdt het opdrachtvolume (${assignmentVolume}%).`,
    };
  }

  return { valid: true, effectiveVolume };
}
