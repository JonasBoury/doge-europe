/**
 * Salary calculation logic for Flemish education personnel.
 * Based on published barema's from data-onderwijs.vlaanderen.be
 *
 * Simplified model — real calculation involves more deduction categories,
 * but this demonstrates the core logic.
 */

export interface SalaryScale {
  baremaCode: string;
  description: string;
  seniorityYears: number;
  annualGross: number;
  monthlyGross: number;
}

export interface SalaryEstimate {
  baremaCode: string;
  seniorityYears: number;
  monthlyGross: number;
  socialSecurity: number; // RSZ werknemersbijdrage
  taxableIncome: number;
  incomeTax: number;
  monthlyNet: number;
  annualGross: number;
  annualNet: number;
}

/**
 * Belgian social security contribution rate for employees (RSZ/ONSS).
 * Education personnel: 13.07% of gross salary.
 */
const RSZ_RATE = 0.1307;

/**
 * Simplified Belgian progressive income tax brackets (2025).
 * Applied to taxable income (gross - RSZ).
 * Real calculation involves more factors (family situation, deductions, etc.)
 */
const TAX_BRACKETS = [
  { from: 0, to: 15820, rate: 0.25 },
  { from: 15820, to: 27920, rate: 0.4 },
  { from: 27920, to: 48320, rate: 0.45 },
  { from: 48320, to: Infinity, rate: 0.5 },
];

/**
 * Calculate progressive income tax on annual taxable income.
 */
function calculateProgressiveTax(annualTaxable: number): number {
  let tax = 0;
  let remaining = annualTaxable;

  for (const bracket of TAX_BRACKETS) {
    const bracketWidth = bracket.to - bracket.from;
    const taxableInBracket = Math.min(remaining, bracketWidth);

    if (taxableInBracket <= 0) break;

    tax += taxableInBracket * bracket.rate;
    remaining -= taxableInBracket;
  }

  // Basic tax-free sum (belastingvrije som) — simplified
  const taxFreeSum = 10570;
  const taxReduction = taxFreeSum * 0.25;

  return Math.max(0, tax - taxReduction);
}

/**
 * Estimate net salary from gross monthly salary.
 */
export function estimateNetFromGross(monthlyGross: number): SalaryEstimate {
  // RSZ contribution
  const socialSecurity = Math.round(monthlyGross * RSZ_RATE * 100) / 100;

  // Monthly taxable income
  const monthlyTaxable = monthlyGross - socialSecurity;

  // Annual taxable for progressive tax calculation
  const annualTaxable = monthlyTaxable * 12;
  const annualTax = calculateProgressiveTax(annualTaxable);
  const monthlyTax = Math.round((annualTax / 12) * 100) / 100;

  const monthlyNet = Math.round((monthlyTaxable - monthlyTax) * 100) / 100;

  return {
    baremaCode: "",
    seniorityYears: 0,
    monthlyGross,
    socialSecurity,
    taxableIncome: monthlyTaxable,
    incomeTax: monthlyTax,
    monthlyNet,
    annualGross: monthlyGross * 12,
    annualNet: monthlyNet * 12,
  };
}

/**
 * Look up salary scale for a given barema code and seniority.
 * Returns the matching scale or null.
 */
export function lookupBarema(
  scales: SalaryScale[],
  baremaCode: string,
  seniorityYears: number
): SalaryScale | null {
  // Find exact match or closest lower seniority
  const matching = scales
    .filter(
      (s) => s.baremaCode === baremaCode && s.seniorityYears <= seniorityYears
    )
    .sort((a, b) => b.seniorityYears - a.seniorityYears);

  return matching[0] || null;
}

/**
 * Full salary simulation: barema lookup + net calculation.
 */
export function simulateSalary(
  scales: SalaryScale[],
  baremaCode: string,
  seniorityYears: number,
  volumePercentage: number = 100
): SalaryEstimate | null {
  const scale = lookupBarema(scales, baremaCode, seniorityYears);
  if (!scale) return null;

  // Adjust for volume (part-time)
  const adjustedMonthlyGross =
    Math.round(scale.monthlyGross * (volumePercentage / 100) * 100) / 100;

  const estimate = estimateNetFromGross(adjustedMonthlyGross);
  estimate.baremaCode = baremaCode;
  estimate.seniorityYears = seniorityYears;

  return estimate;
}
