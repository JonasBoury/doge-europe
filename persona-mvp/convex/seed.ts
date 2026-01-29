import { mutation } from "./_generated/server";

export const seedAll = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if already seeded
    const existing = await ctx.db.query("institutions").collect();
    if (existing.length > 0) {
      throw new Error("Database is al gevuld. Verwijder eerst de bestaande data.");
    }

    // === INSTITUTIONS ===
    const schools = [
      {
        instellingsnummer: "025312",
        name: "GO! Basisschool De Zonnestraal",
        type: "basisonderwijs" as const,
        address: "Naamsestraat 45",
        municipality: "Leuven",
        postalCode: "3000",
        active: true,
      },
      {
        instellingsnummer: "031245",
        name: "Vrije Basisschool Sint-Pieter",
        type: "basisonderwijs" as const,
        address: "Kortrijksesteenweg 12",
        municipality: "Gent",
        postalCode: "9000",
        active: true,
      },
      {
        instellingsnummer: "018756",
        name: "Gemeentelijke Basisschool Berkenbos",
        type: "basisonderwijs" as const,
        address: "Turnhoutsebaan 88",
        municipality: "Antwerpen",
        postalCode: "2100",
        active: true,
      },
      {
        instellingsnummer: "042189",
        name: "GO! Basisschool Het Kompas",
        type: "basisonderwijs" as const,
        address: "Bruggestraat 23",
        municipality: "Brugge",
        postalCode: "8000",
        active: true,
      },
      {
        instellingsnummer: "053421",
        name: "Vrije Basisschool De Regenboog",
        type: "basisonderwijs" as const,
        address: "Hasseltsestraat 67",
        municipality: "Hasselt",
        postalCode: "3500",
        active: true,
      },
    ];

    const schoolIds = [];
    for (const school of schools) {
      schoolIds.push(await ctx.db.insert("institutions", school));
    }

    // === PERSONNEL ===
    const personnelData = [
      { stamboeknummer: "P2020-001", firstName: "Jan", lastName: "Peeters", dateOfBirth: "1985-03-15", gender: "M" as const, startDateEducation: "2010-09-01", totalSeniorityDays: 5400, email: "jan.peeters@onderwijs.be" },
      { stamboeknummer: "P2020-002", firstName: "Lies", lastName: "Janssens", dateOfBirth: "1990-07-22", gender: "V" as const, startDateEducation: "2014-09-01", totalSeniorityDays: 3960, email: "lies.janssens@onderwijs.be" },
      { stamboeknummer: "P2020-003", firstName: "Pieter", lastName: "De Smedt", dateOfBirth: "1978-11-08", gender: "M" as const, startDateEducation: "2002-09-01", totalSeniorityDays: 8280, email: "pieter.desmedt@onderwijs.be" },
      { stamboeknummer: "P2020-004", firstName: "Sarah", lastName: "Vermeersch", dateOfBirth: "1992-01-30", gender: "V" as const, startDateEducation: "2016-09-01", totalSeniorityDays: 3240, email: "sarah.vermeersch@onderwijs.be" },
      { stamboeknummer: "P2020-005", firstName: "Thomas", lastName: "Claeys", dateOfBirth: "1988-05-12", gender: "M" as const, startDateEducation: "2012-09-01", totalSeniorityDays: 4680, email: "thomas.claeys@onderwijs.be" },
      { stamboeknummer: "P2020-006", firstName: "An", lastName: "Wouters", dateOfBirth: "1983-09-18", gender: "V" as const, startDateEducation: "2006-09-01", totalSeniorityDays: 7200, email: "an.wouters@onderwijs.be" },
      { stamboeknummer: "P2020-007", firstName: "Bart", lastName: "Martens", dateOfBirth: "1975-12-03", gender: "M" as const, startDateEducation: "2000-09-01", totalSeniorityDays: 9000, email: "bart.martens@onderwijs.be" },
      { stamboeknummer: "P2020-008", firstName: "Katrien", lastName: "Van Damme", dateOfBirth: "1995-04-25", gender: "V" as const, startDateEducation: "2019-09-01", totalSeniorityDays: 2160, email: "katrien.vandamme@onderwijs.be" },
      { stamboeknummer: "P2020-009", firstName: "Wim", lastName: "Hermans", dateOfBirth: "1980-08-14", gender: "M" as const, startDateEducation: "2004-09-01", totalSeniorityDays: 7920, email: "wim.hermans@onderwijs.be" },
      { stamboeknummer: "P2020-010", firstName: "Charlotte", lastName: "Willems", dateOfBirth: "1993-02-07", gender: "V" as const, startDateEducation: "2017-09-01", totalSeniorityDays: 2880, email: "charlotte.willems@onderwijs.be" },
      { stamboeknummer: "P2020-011", firstName: "Koen", lastName: "Maes", dateOfBirth: "1987-06-20", gender: "M" as const, startDateEducation: "2011-09-01", totalSeniorityDays: 5040, email: "koen.maes@onderwijs.be" },
      { stamboeknummer: "P2020-012", firstName: "Elke", lastName: "Jacobs", dateOfBirth: "1991-10-11", gender: "V" as const, startDateEducation: "2015-09-01", totalSeniorityDays: 3600, email: "elke.jacobs@onderwijs.be" },
      { stamboeknummer: "P2020-013", firstName: "Dirk", lastName: "Mertens", dateOfBirth: "1976-03-28", gender: "M" as const, startDateEducation: "2001-09-01", totalSeniorityDays: 8640, email: "dirk.mertens@onderwijs.be" },
      { stamboeknummer: "P2020-014", firstName: "Nathalie", lastName: "Goossens", dateOfBirth: "1989-12-16", gender: "V" as const, startDateEducation: "2013-09-01", totalSeniorityDays: 4320, email: "nathalie.goossens@onderwijs.be" },
      { stamboeknummer: "P2020-015", firstName: "Stef", lastName: "Leclercq", dateOfBirth: "1994-07-04", gender: "M" as const, startDateEducation: "2018-09-01", totalSeniorityDays: 2520, email: "stef.leclercq@onderwijs.be" },
      { stamboeknummer: "P2020-016", firstName: "Hilde", lastName: "Vandenberghe", dateOfBirth: "1982-11-23", gender: "V" as const, startDateEducation: "2005-09-01", totalSeniorityDays: 7560, email: "hilde.vandenberghe@onderwijs.be" },
      { stamboeknummer: "P2020-017", firstName: "Filip", lastName: "Coppens", dateOfBirth: "1986-01-09", gender: "M" as const, startDateEducation: "2010-09-01", totalSeniorityDays: 5400, email: "filip.coppens@onderwijs.be" },
      { stamboeknummer: "P2020-018", firstName: "Griet", lastName: "De Backer", dateOfBirth: "1997-08-31", gender: "V" as const, startDateEducation: "2021-09-01", totalSeniorityDays: 1440, email: "griet.debacker@onderwijs.be" },
      { stamboeknummer: "P2020-019", firstName: "Marc", lastName: "Stevens", dateOfBirth: "1974-05-17", gender: "M" as const, startDateEducation: "1998-09-01", totalSeniorityDays: 9720, email: "marc.stevens@onderwijs.be" },
      { stamboeknummer: "P2020-020", firstName: "Julie", lastName: "Hendrickx", dateOfBirth: "1996-09-02", gender: "V" as const, startDateEducation: "2020-09-01", totalSeniorityDays: 1800, email: "julie.hendrickx@onderwijs.be" },
      { stamboeknummer: "P2020-021", firstName: "Geert", lastName: "Van den Broeck", dateOfBirth: "1979-02-14", gender: "M" as const, startDateEducation: "2003-09-01", totalSeniorityDays: 8100, email: "geert.vandenbroeck@onderwijs.be" },
      { stamboeknummer: "P2020-022", firstName: "Sofie", lastName: "Pauwels", dateOfBirth: "1991-06-30", gender: "V" as const, startDateEducation: "2015-09-01", totalSeniorityDays: 3600, email: "sofie.pauwels@onderwijs.be" },
      { stamboeknummer: "P2020-023", firstName: "Yves", lastName: "Lambert", dateOfBirth: "1984-04-19", gender: "M" as const, startDateEducation: "2008-09-01", totalSeniorityDays: 6120, email: "yves.lambert@onderwijs.be" },
      { stamboeknummer: "P2020-024", firstName: "Ines", lastName: "Claessens", dateOfBirth: "1998-12-25", gender: "V" as const, startDateEducation: "2022-09-01", totalSeniorityDays: 1080, email: "ines.claessens@onderwijs.be" },
      { stamboeknummer: "P2020-025", firstName: "Raf", lastName: "Michiels", dateOfBirth: "1981-07-08", gender: "M" as const, startDateEducation: "2005-09-01", totalSeniorityDays: 7560, email: "raf.michiels@onderwijs.be" },
    ];

    const personnelIds = [];
    for (const p of personnelData) {
      personnelIds.push(await ctx.db.insert("personnel", { ...p, active: true }));
    }

    // === ASSIGNMENTS ===
    const now = Date.now();
    const assignmentData = [
      // School 0: Leuven - 6 staff
      { personnelIdx: 0, schoolIdx: 0, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2010-09-01" },
      { personnelIdx: 1, schoolIdx: 0, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2014-09-01" },
      { personnelIdx: 2, schoolIdx: 0, type: "VAST" as const, ambtcode: "DIR-BA", ambtDescription: "Directeur basisonderwijs", volume: 100, barema: "301", start: "2015-09-01" },
      { personnelIdx: 7, schoolIdx: 0, type: "TIJDELIJK" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 50, barema: "141", start: "2024-09-01", end: "2025-06-30" },
      { personnelIdx: 17, schoolIdx: 0, type: "TIJDELIJK" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 80, barema: "141", start: "2024-09-01", end: "2025-06-30" },
      { personnelIdx: 19, schoolIdx: 0, type: "TIJDELIJK" as const, ambtcode: "ADMIN", ambtDescription: "Administratief medewerker", volume: 50, barema: "143", start: "2024-09-01", end: "2025-06-30" },

      // School 1: Gent - 5 staff
      { personnelIdx: 3, schoolIdx: 1, type: "TADD" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2020-09-01" },
      { personnelIdx: 4, schoolIdx: 1, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2012-09-01" },
      { personnelIdx: 5, schoolIdx: 1, type: "VAST" as const, ambtcode: "DIR-BA", ambtDescription: "Directeur basisonderwijs", volume: 100, barema: "301", start: "2010-09-01" },
      { personnelIdx: 11, schoolIdx: 1, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2015-09-01" },
      { personnelIdx: 23, schoolIdx: 1, type: "TIJDELIJK" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 60, barema: "141", start: "2024-09-01", end: "2025-06-30" },

      // School 2: Antwerpen - 5 staff
      { personnelIdx: 6, schoolIdx: 2, type: "VAST" as const, ambtcode: "DIR-BA", ambtDescription: "Directeur basisonderwijs", volume: 100, barema: "501", start: "2008-09-01" },
      { personnelIdx: 8, schoolIdx: 2, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2004-09-01" },
      { personnelIdx: 9, schoolIdx: 2, type: "TADD" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2021-09-01" },
      { personnelIdx: 13, schoolIdx: 2, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 50, barema: "141", start: "2013-09-01" },
      { personnelIdx: 14, schoolIdx: 2, type: "TIJDELIJK" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 50, barema: "141", start: "2024-09-01", end: "2025-06-30" },

      // Additional assignment for person 13 (part-time at two schools)
      { personnelIdx: 13, schoolIdx: 1, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 50, barema: "141", start: "2013-09-01" },

      // School 3: Brugge - 5 staff
      { personnelIdx: 10, schoolIdx: 3, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2011-09-01" },
      { personnelIdx: 12, schoolIdx: 3, type: "VAST" as const, ambtcode: "DIR-BA", ambtDescription: "Directeur basisonderwijs", volume: 100, barema: "501", start: "2010-09-01" },
      { personnelIdx: 15, schoolIdx: 3, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2005-09-01" },
      { personnelIdx: 20, schoolIdx: 3, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2003-09-01" },
      { personnelIdx: 24, schoolIdx: 3, type: "VAST" as const, ambtcode: "ADMIN", ambtDescription: "Administratief medewerker", volume: 80, barema: "143", start: "2010-09-01" },

      // School 4: Hasselt - 5 staff
      { personnelIdx: 16, schoolIdx: 4, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2010-09-01" },
      { personnelIdx: 18, schoolIdx: 4, type: "VAST" as const, ambtcode: "DIR-BA", ambtDescription: "Directeur basisonderwijs", volume: 100, barema: "501", start: "2005-09-01" },
      { personnelIdx: 21, schoolIdx: 4, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2015-09-01" },
      { personnelIdx: 22, schoolIdx: 4, type: "VAST" as const, ambtcode: "LO-BA", ambtDescription: "Leraar basisonderwijs", volume: 100, barema: "141", start: "2008-09-01" },
      { personnelIdx: 19, schoolIdx: 4, type: "TIJDELIJK" as const, ambtcode: "ADMIN", ambtDescription: "Administratief medewerker", volume: 50, barema: "143", start: "2024-09-01", end: "2025-06-30" },
    ];

    for (const a of assignmentData) {
      await ctx.db.insert("assignments", {
        personnelId: personnelIds[a.personnelIdx],
        institutionId: schoolIds[a.schoolIdx],
        type: a.type,
        ambtcode: a.ambtcode,
        ambtDescription: a.ambtDescription,
        volumePercentage: a.volume,
        startDate: a.start,
        endDate: a.end,
        status: "active",
        baremaCode: a.barema,
        createdAt: now,
        updatedAt: now,
      });
    }

    // === SERVICE INTERRUPTIONS ===
    const interruptionData = [
      { personnelIdx: 0, type: "ziekteverlof" as const, code: "ZV-01", volume: 100, start: "2025-01-06", end: "2025-01-17", desc: "Griep" },
      { personnelIdx: 1, type: "ouderschapsverlof" as const, code: "OV-01", volume: 50, start: "2024-09-01", end: "2025-02-28", desc: "Ouderschapsverlof 1/5" },
      { personnelIdx: 5, type: "loopbaanonderbreking" as const, code: "LO-01", volume: 20, start: "2024-09-01", end: "2025-08-31", desc: "Loopbaanonderbreking 1/5" },
      { personnelIdx: 8, type: "ziekteverlof" as const, code: "ZV-02", volume: 100, start: "2024-12-16", end: "2025-03-15", desc: "Langdurig ziekteverlof" },
      { personnelIdx: 15, type: "bevallingsverlof" as const, code: "BV-01", volume: 100, start: "2025-01-13", end: "2025-04-06", desc: "Bevallingsverlof" },
      { personnelIdx: 20, type: "politiek_verlof" as const, code: "PV-01", volume: 20, start: "2024-12-01", desc: "Gemeenteraadslid" },
    ];

    for (const i of interruptionData) {
      await ctx.db.insert("serviceInterruptions", {
        personnelId: personnelIds[i.personnelIdx],
        type: i.type,
        interruptionCode: i.code,
        description: i.desc,
        volumePercentage: i.volume,
        startDate: i.start,
        endDate: i.end,
        status: "active",
        createdAt: now,
        updatedAt: now,
      });
    }

    // === SALARY SCALES ===
    // Based on published Flemish barema's (simplified subset)
    // Barema 141: Onderwijzer/Leraar basisonderwijs (bachelor)
    // Barema 143: Administratief medewerker
    // Barema 301: Directeur basisonderwijs (master)
    // Barema 501: Directeur grote school

    const baremaData = [
      // 141 - Leraar basisonderwijs
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 0, annual: 29542, monthly: 2462 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 3, annual: 32156, monthly: 2680 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 5, annual: 33890, monthly: 2824 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 9, annual: 37252, monthly: 3104 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 11, annual: 38836, monthly: 3236 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 15, annual: 42095, monthly: 3508 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 21, annual: 47074, monthly: 3923 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 25, annual: 50422, monthly: 4202 },
      { code: "141", desc: "Leraar basisonderwijs (bachelor)", seniority: 27, annual: 51874, monthly: 4323 },

      // 143 - Administratief medewerker
      { code: "143", desc: "Administratief medewerker", seniority: 0, annual: 23456, monthly: 1955 },
      { code: "143", desc: "Administratief medewerker", seniority: 3, annual: 25123, monthly: 2094 },
      { code: "143", desc: "Administratief medewerker", seniority: 9, annual: 29567, monthly: 2464 },
      { code: "143", desc: "Administratief medewerker", seniority: 15, annual: 33890, monthly: 2824 },
      { code: "143", desc: "Administratief medewerker", seniority: 25, annual: 40234, monthly: 3353 },

      // 301 - Directeur basisonderwijs (master)
      { code: "301", desc: "Directeur basisonderwijs (master)", seniority: 0, annual: 37890, monthly: 3158 },
      { code: "301", desc: "Directeur basisonderwijs (master)", seniority: 5, annual: 42567, monthly: 3547 },
      { code: "301", desc: "Directeur basisonderwijs (master)", seniority: 11, annual: 48234, monthly: 4020 },
      { code: "301", desc: "Directeur basisonderwijs (master)", seniority: 15, annual: 52345, monthly: 4362 },
      { code: "301", desc: "Directeur basisonderwijs (master)", seniority: 21, annual: 57890, monthly: 4824 },
      { code: "301", desc: "Directeur basisonderwijs (master)", seniority: 25, annual: 61234, monthly: 5103 },

      // 501 - Directeur grote school
      { code: "501", desc: "Directeur grote school", seniority: 0, annual: 42567, monthly: 3547 },
      { code: "501", desc: "Directeur grote school", seniority: 5, annual: 47890, monthly: 3991 },
      { code: "501", desc: "Directeur grote school", seniority: 11, annual: 54234, monthly: 4520 },
      { code: "501", desc: "Directeur grote school", seniority: 15, annual: 58967, monthly: 4914 },
      { code: "501", desc: "Directeur grote school", seniority: 21, annual: 64890, monthly: 5408 },
      { code: "501", desc: "Directeur grote school", seniority: 25, annual: 68234, monthly: 5686 },
    ];

    for (const b of baremaData) {
      await ctx.db.insert("salaryScales", {
        baremaCode: b.code,
        description: b.desc,
        seniorityYears: b.seniority,
        annualGross: b.annual,
        monthlyGross: b.monthly,
        effectiveDate: "2025-09-01",
      });
    }

    return {
      institutions: schoolIds.length,
      personnel: personnelIds.length,
      assignments: assignmentData.length,
      interruptions: interruptionData.length,
      salaryScales: baremaData.length,
    };
  },
});
