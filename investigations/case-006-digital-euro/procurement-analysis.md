# Procurement Analysis: Digital Euro Pilot

## The Same Playbook, Different Project

The ECB's procurement approach for the digital euro pilot reproduces the exact patterns documented in [Case 005: Belgian Procurement System](/investigations/case-005-belgian-procurement-system) — a system designed to minimize institutional risk rather than deliver the best technology. Despite the rhetoric about European innovation and sovereignty, the selection process structurally excludes the companies most likely to build great payment software.

---

## Barrier 1: The Licensing Gate

**Requirement:** Participants must hold a valid EU license under PSD2 (payment institution, e-money institution, or credit institution).

**Who this excludes:**
- Fintech startups still in the licensing process (which takes 6-18 months across EU member states)
- Technology companies that build payment infrastructure but don't hold payments licenses themselves
- Open-source payment projects and developer communities
- Any company that solves the technical problem but hasn't navigated the regulatory bureaucracy

**The irony:** The best mobile payment UX in Europe (Bancontact/Payconiq, Swish, iDEAL) was built by teams that started as technology companies, not licensed banks. By requiring a PSD2 license as an entry ticket to even *test* technology, the ECB ensures that only incumbents — the same institutions that have failed to build a competitive European payment solution for decades — get to shape the digital euro.

**Comparison:** This mirrors Belgian procurement's framework contract system, where only pre-approved vendors can bid. Different gate, same effect: a closed shop.

---

## Barrier 2: "Market Reach" as Selection Criterion

**Requirement:** Selection factors include "market reach" and "geographic coverage across ECB and participating NCBs."

**What this means in practice:**
- Large retail banks with millions of existing customers will be preferred
- Neo-banks with smaller but more digitally native user bases will rank lower
- Any company without an existing customer base in multiple eurozone countries is effectively excluded

**The problem:** Market reach measures incumbency, not capability. The companies with the largest market reach in European payments are precisely the ones that have failed to innovate against Visa, Mastercard, Apple Pay, and Google Pay. Selecting for reach selects for the status quo.

A 10-person fintech with a brilliant offline NFC payment implementation has zero chance against BNP Paribas, regardless of technical merit.

---

## Barrier 3: No Compensation, Maximum Commitment

**Requirement:** PSPs will receive no financial or non-financial remuneration for participating. They must:
- Develop digital euro front-end and back-end services (12+ months of engineering)
- Complete DASP onboarding and back-end certification
- Support 12 months of pilot execution
- Provide feedback and metrics throughout

**Who can afford this:**
- Large banks that can absorb the cost as a strategic investment
- Major payment processors with dedicated R&D budgets

**Who cannot:**
- Startups and scale-ups that need every engineering hour to count
- Smaller payment institutions operating on thin margins
- Any company that can't justify 2+ years of unpaid work on a project with uncertain outcomes

**The perverse incentive:** This requirement selects for companies that treat the pilot as a lobbying exercise (influence future rules) rather than a technology exercise (build the best product). Banks participate to protect deposit outflows. Innovative builders can't participate because they can't fund the work.

---

## Barrier 4: Must Cover All Use Cases

**Requirement:** "The current view is that the PSPs would need to cover for all the use cases" — P2P with alias, P2P offline, P2B point of sale, P2B e-commerce.

**What this means:** A company that has built the best offline NFC payment technology in Europe cannot participate unless it also offers alias-based transfers, point-of-sale, and e-commerce solutions. Conversely, a large bank that does all four poorly qualifies over a specialist that does one brilliantly.

**This is anti-modular thinking.** Modern software is built on specialization and composition. Forcing all-in-one participation ensures mediocre coverage of each use case rather than excellent coverage of any.

---

## Barrier 5: No Consortiums Allowed

**Requirement:** "PSPs must participate as individual companies, not consortiums (though they can work with technical service providers)."

**What this prevents:** Three specialized fintechs — one expert in offline payments, one in alias resolution, one in merchant integration — cannot band together to form a stronger pilot participant than any single large bank.

**What this enables:** A single large bank with middling capabilities across all areas qualifies, while three excellent specialists do not.

**The stated reasoning** is administrative simplicity. The actual effect is incumbent protection.

---

## Barrier 6: The "Controlled Environment" Paradox

The pilot will test with 5,000-10,000 Eurosystem staff and 15-25 merchants (ECB cafeterias, essentially). This is presented as prudent. But consider what it actually tests:

**What it tests:**
- Can well-educated, tech-literate central bank employees use a payment app?
- Can a coffee shop in Frankfurt process a digital payment?

**What it doesn't test:**
- Can a 75-year-old pensioner in rural Portugal use it?
- Does it work in areas with poor connectivity?
- How does it perform under real-world merchant volume?
- Do actual consumers *want* this?

**The controlled environment ensures the pilot succeeds.** You cannot fail a test where the users are your own employees, the merchants are your own cafeterias, and the volume is trivial. This is not validation — it's a demonstration.

---

## Barrier 7: Technology Lock-In Before the Pilot Even Starts

From the workshop Q&A, when asked if a technology provider not selected by the ECB could still demonstrate their solution during the pilot:

> **"No, this will not be possible. So what we will test is the setup that we are preparing within the EUROSystem."**

The technology stack was locked in October 2025 when the ECB selected its five component providers (€237M in framework contracts). The pilot doesn't test whether the ECB made the right technology choices — it only tests whether the chosen technology works at trivial scale with friendly users.

An "innovation track" is mentioned as a future possibility, but it's explicitly separate from the pilot and has no defined timeline, scope, or commitment.

---

## The Pattern: Who Actually Gets Selected

Based on the selection criteria, the pilot participants will predictably be:

| Type | Examples | Why They Qualify |
|------|----------|-----------------|
| Large retail banks | BNP Paribas, Deutsche Bank, ING, Intesa | Market reach, geographic coverage, PSD2 license |
| Pan-European payment schemes | EPI (mentioned by name in Q&A) | Political alignment, existing wallet infrastructure |
| Large payment processors | Worldline, Nexi | Existing merchant networks, all use cases |

**Who will not be selected:**

| Type | Examples | Why They're Excluded |
|------|----------|---------------------|
| Innovative fintechs | Any startup with <100K users | No "market reach" |
| Specialist builders | Best-in-class offline payment tech | Can't cover all use cases |
| Open-source projects | Any community-driven effort | No PSD2 license, no commercial entity |
| Small PSPs | Regional payment institutions | Can't absorb unpaid 2-year commitment |

---

## Comparison with Case 005: Belgian Procurement

| Pattern | Belgian IT Procurement | Digital Euro Pilot |
|---------|----------------------|-------------------|
| Pre-qualification gate | Framework contract membership | PSD2 license + market reach |
| Incumbent advantage | Same 4-6 vendors win every contract | Large banks + large PSPs only |
| Innovation exclusion | Startups can't meet requirements | Specialists can't cover all use cases |
| No pay for participation | N/A | PSPs receive zero compensation |
| Process over outcomes | Procedural compliance prioritized | "Controlled environment" ensures success |
| Technology lock-in | Vendor lock-in after award | Technology stack locked before pilot |
| Accountability gap | Vendors fail without consequences | Pilot can't fail by design |
| Scale of waste | €95.8M+ in documented failures | €7-8B+ total projected cost |

---

## What a Real Pilot Would Look Like

If the ECB genuinely wanted to test whether the digital euro works and find the best technology:

1. **Open the technology layer.** Let any company build on the DASP API, not just pre-selected PSPs. Publish the SDK openly. Judge on working software, not corporate credentials.

2. **Test with real users.** 5,000 central bank staff is not a pilot — it's a demo. Test with 50,000 actual citizens across income levels, ages, and geographies.

3. **Allow specialization.** Let a company participate with just offline payments or just alias resolution. Compose the best components rather than demanding mediocre all-in-one coverage.

4. **Pay participants or don't require multi-year commitment.** Asking startups to donate 2+ years of engineering for free is not "market engagement" — it's a filter for deep pockets.

5. **Test the hard questions.** Does anyone actually want this? Can it compete with Apple Pay? Does offline NFC work reliably at scale? These questions cannot be answered in a controlled environment with friendly users.

6. **Allow alternative technology stacks.** If the pilot only tests the ECB's pre-selected vendors, it validates a procurement decision, not a technology decision.

---

## Conclusion

The digital euro pilot procurement follows the classic European institutional pattern: optimize for process compliance and risk minimization, not for outcomes. The requirements — licensing, market reach, all-use-case coverage, no compensation, no consortiums — form a filter that selects for exactly the companies least likely to build innovative payment technology.

The result will be predictable: a handful of large banks and payment processors will participate, the pilot will "succeed" because it's designed to succeed, and the ECB will point to this as validation. The actual question — whether the digital euro offers anything that existing payment systems don't — will remain unanswered.

This is not a technology pilot. It's a procurement exercise dressed as innovation.
