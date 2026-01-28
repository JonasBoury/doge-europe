# Research Notes: Persona-project Onderwijsadministratie

## Key Facts Established

| Fact | Value | Source |
|------|-------|--------|
| Project decision year | 2020 | VRT NWS, Vlaams Parlement |
| Development start | 2022 | Cegeka communications |
| Total budget spent | €16 million | VRT NWS, Moore audit |
| Additional budget requested | €10 million (denied) | VRT NWS |
| Functionality delivered | 8-10% | Moore audit |
| Project status | On hold (26/01/2026) | Minister Demir decision |
| Crisis managers appointed | 2 | Flemish government decision |
| Audit firm | Moore | VRT NWS |
| PM vendor | Cronos | Cegeka, Vlaams Parlement docs |
| Development vendor | DXC-Cegeka | Cegeka, Vlaams Parlement docs |
| Subcontractors | Atos, Proximus | Vlaams Parlement docs |
| Framework contract | ICT raamcontract 2022-2029 (~€1B) | Consultancy.nl, Computable.be |
| Legacy system age | 30+ years (built 1990s) | VRT NWS |
| Education staff affected | 170,000+ | AGODI data |
| Minister who initiated | Ben Weyts (N-VA, 2019-2024) | Multiple sources |
| Minister who halted | Zuhal Demir (N-VA, 2024-present) | Multiple sources |

## Working Hypotheses (Updated)

### 1. Governance Vacuum Hypothesis — STRONG EVIDENCE
The Moore audit explicitly found: no clearly defined objectives, poor project management, no oversight of external experts, no financial controls or reporting. This points to a **fundamental absence of project governance** from the start. A project without objectives cannot be managed or measured.

### 2. Vendor Fragmentation Hypothesis — MODERATE EVIDENCE
The project split across multiple vendors (Cronos for PM/governance, DXC-Cegeka for development, plus Atos and Proximus subcontracting) created a complex multi-party structure. Ironically, Cronos was responsible for "ICT Governance" — the exact area the audit found lacking. **Key question: Did Cronos deliver on its governance mandate?**

### 3. Information Concealment Hypothesis — STRONG EVIDENCE
AGODI's annual reports presented the project as "complex but manageable" without disclosing budget overruns or structural problems. This either represents:
- Deliberate concealment from parliament and the public
- Institutional inability to recognize and escalate problems
- OR both — a culture where bad news doesn't travel upward

Roosmarijn Beckers (VB) has explicitly raised this as a transparency failure.

### 4. Political Continuity Hypothesis — EMERGING
Both the initiating minister (Weyts) and the halting minister (Demir) are from N-VA. V-Nieuws framed this as "Demir stops IT project that derailed under N-VA itself." This raises questions about:
- Whether political loyalty delayed scrutiny
- Whether the new minister's audit was genuine accountability or political repositioning
- What Weyts knew and when

## Audit Findings Summary (Moore)

The Moore audit, commissioned by Minister Demir, found:

1. **No clearly defined project objectives** — The project lacked a clear definition of what success would look like
2. **Poor project management** — Basic PM disciplines were not followed
3. **No oversight of hired experts** — External consultants operated without adequate supervision or accountability
4. **No accurate financial planning** — Budget was not properly planned or tracked
5. **No financial control** — Spending was not monitored against deliverables
6. **No financial reporting** — No transparent reporting on financial status

**Result:** €16M spent, 8-10% delivered. Budget fully exhausted.

## Comparative Context

### Government IT Failure Pattern
According to Prof. Lieselot Danneels (cited in VRT analysis):
- **International benchmark:** Only 1 in 4 IT projects succeed
- **Government projects:** Only 1 in 5 succeed
- **Common failure factors:**
  - Technology changes faster than government procurement cycles
  - Long project timelines (2-3 years) lead to obsolescence
  - Slow procurement procedures
  - Multiple stakeholders with divergent needs
  - Insufficient staff training and contractor oversight

### Belgian/Flemish Comparison Cases
| Project | Budget | Spent | Result |
|---------|--------|-------|--------|
| **Persona (Education)** | €16M+ | €16M | 8-10% delivered, halted |
| **iPolice (Police)** | €299M contract | €75.8M | No tangible results, cancelled |
| **JustSign (Justice)** | €4M | €4M | Never implemented |

## Critical Analysis: Why the Persona Project Failed

### 1. The project was doomed from procurement design

The fundamental structural error was splitting the project across vendors with **conflicting incentives**:

- **Cronos** was paid for project management and governance
- **DXC-Cegeka** was paid for development
- **Atos and Proximus** were subcontracted underneath

Cronos had zero incentive to report that the project was failing — doing so would threaten their own contract. They were literally being paid to provide "ICT Governance," which is exactly what the Moore audit found was absent. This is not a coincidence. When the vendor responsible for oversight is also billing hours to the same project, you don't have oversight — you have a conflict of interest.

### 2. They built the easy parts first and called it progress

The migration order is revealing. They started with RL-5 through RL-9 and RL-14 — personal data fields like address, family status, and bank account numbers. These are essentially simple CRUD operations with straightforward validation.

The actual hard problem — RL-1, RL-2, RL-4, RL-12 (assignments, service interruptions, assignment terminations) — is where 30 years of accumulated regulatory complexity lives. Flemish education employment law has dozens of special statutes: temporary vs. permanent, full-time vs. part-time, multiple simultaneous assignments, TADDs, reaffectation rules, etc. The salary calculation engine (VSS) encodes these rules in legacy code that likely nobody fully understands anymore.

By delivering the trivial parts first, AGODI could report "progress" in annual reports while the core problem remained untouched. This is a classic pattern in failing IT projects — demonstrating velocity on easy work to conceal lack of progress on what actually matters.

### 3. "Many unknowns at the start" is an admission of no requirements analysis

The parliamentary answer acknowledged they "didn't account for integration and migration costs." This is extraordinary. Migration from a 30-year-old system is not an edge case — it's the entire point of the project. Not budgeting for it means either:

- No serious requirements analysis was done before procurement
- Or the budget was deliberately understated to get political approval

Given that the Moore audit also found "no clearly defined objectives," the first explanation seems more likely. They started building before they understood what they were building. Deel 2 (Cronos — BPR/process analysis) was supposed to map the existing processes, but this was happening *in parallel* with Deel 3 (DXC-Cegeka — development). You can't redesign processes and build the system simultaneously unless you're comfortable throwing away code.

### 4. The framework contract structure removes competitive pressure

The €1 billion ICT framework contract (2022-2029) pre-selects Cronos, DXC, Cegeka, Atos, and Proximus as preferred suppliers. The "mini-competition" within this framework is not a real market competition — it's a closed bidding process among a cartel of pre-approved vendors who all know each other and regularly subcontract to each other.

This means:
- No real price competition
- No accountability for non-delivery (the same vendors will win the next mini-competition)
- Vendor switching costs are artificially high

### 5. AGODI had no internal capacity to be an intelligent client

The parliamentary answer states AGODI "relied on external expertise to eventually be able to carry this project internally." This is circular: they outsourced governance to learn how to govern. An organization that cannot define its own requirements, cannot evaluate vendor performance, and cannot track its own budget is not a project owner — it's a funding source.

The fact that AGODI's annual reports described the project as "complex but manageable" while €16M was being burned with 8-10% delivery suggests either:
- AGODI leadership genuinely didn't know (incompetence)
- AGODI leadership knew and didn't report it (concealment)

Neither is acceptable for an agency managing payroll for 220,000 people.

### 6. No political ownership

Ben Weyts (2019-2024) initiated the project but apparently never demanded concrete delivery milestones or independent audits. Zuhal Demir only ordered the Moore audit after taking over the portfolio — likely because she inherited a €10M budget request she couldn't justify. The audit wasn't proactive governance; it was a new minister looking for cover before approving more spending.

The fact that both ministers are N-VA makes the political dynamics worse — there was no opposition minister scrutinizing a predecessor's project. Internal party loyalty likely delayed the moment of truth.

### Conclusion

This wasn't a technology failure. Java, APIs, containerization — the technical stack was fine. This was a **governance vacuum** in which vendors billed hours without oversight, an agency reported fiction to parliament, and ministers didn't ask hard questions. €16 million didn't disappear — it was converted into consultant hours that produced 8-10% of a system nobody had properly specified in the first place.

The pattern — identical to iPolice (€75.8M burned) and JustSign (€4M burned) — suggests this is not an isolated incident but a **systemic failure in how Belgian governments procure and manage IT projects**.

---

## Open Questions — Priority Research

### Financial Forensics
- [ ] Where exactly did the €16M go? Breakdown by vendor, by year, by activity
- [ ] What were the contract values for Cronos and DXC-Cegeka separately?
- [ ] Were there contract amendments or change orders? How many and for what?
- [ ] What daily/hourly rates were paid for external consultants?

### Governance Accountability
- [ ] Who was the project steering committee? Who chaired it?
- [ ] What was AGODI's internal project team composition?
- [ ] Were there regular steering committee meetings? What did minutes say?
- [ ] When did AGODI leadership first know the project was in trouble?
- [ ] What did the AGODI administrator-general know and report?

### Political Accountability
- [ ] What did Ben Weyts report to parliament about Persona during 2020-2024?
- [ ] Were there any early warning signs in parliamentary questions? (De Loor 2023, Warnez 2021)
- [ ] Did the Flemish government (Ministerraad) approve budget increases?
- [ ] When did Zuhal Demir first learn of problems after taking office?

### Vendor Accountability
- [ ] What specific deliverables did Cronos produce for project management/governance?
- [ ] What specific deliverables did DXC-Cegeka produce for system development?
- [ ] Were vendor performance reviews conducted?
- [ ] Are there penalty clauses in the contracts for non-delivery?
- [ ] Can the Flemish government recover any funds from vendors?

### Information Flow
- [ ] Obtain and analyze AGODI Jaarverslag 2023 — what exactly did it say about Persona?
- [ ] Compare annual report claims with Moore audit findings
- [ ] Were there internal warning reports that were not escalated?

## Connections to Other Investigations

### Case-002: Belgian Justice Digitalization
Similar pattern of failed government IT modernization at federal level. Different jurisdiction (federal vs. Flemish) but same structural issues: legacy systems, vendor dependency, governance failures.

### Case-003: iPolice
Directly referenced in VRT analysis as a parallel failure. iPolice was even larger (€299M contract) with similar outcome (no tangible results). Both projects halted in same period (late 2025/early 2026). Pattern of systemic government IT failure in Belgium.

## Research Progress

- [x] Initial news coverage review (VRT, V-Nieuws, VB, ITdaily, Schoolit)
- [x] Key facts and figures established
- [x] Vendor structure identified
- [x] Political timeline mapped
- [x] Comparative context gathered
- [x] Source database built with 24 sources
- [ ] Moore audit report — PRIORITY: must obtain full text
- [ ] Parliamentary questions review (De Loor 2023, Warnez 2021)
- [ ] AGODI Jaarverslag 2023 analysis
- [ ] 2022 Persona infosessie presentation review
- [ ] Vendor contract analysis
- [ ] Financial breakdown by vendor/year
- [ ] Steering committee documentation
- [ ] Crisis manager identity and mandate
- [ ] Rekenhof involvement status
- [ ] Draft findings report
