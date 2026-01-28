# Investigation Notes: Belgian Government Procurement System

## Research Notes

This document contains working notes, hypotheses, and observations from the ongoing investigation.

---

## Initial Observations

### The "Big 5" Problem

The same vendors appear across virtually every major government IT failure:
- **Cronos** - Present in Persona, federal projects
- **Cegeka** - Present in Persona, iPolice, Justice
- **DXC** - Present in Persona, federal projects
- **Atos** - Present across federal and regional
- **Proximus** - Telecommunications + IT services

**Question:** Is this vendor concentration the cause or symptom of procurement problems?

**Hypothesis:** Framework contracts create a protected market. Once on the framework, vendors have guaranteed access to billions in contracts regardless of past performance.

### The Time Trap

Rough timeline for a major government IT project:

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Problem identification | 6-12 months | 6-12 months |
| Budget approval | 6-12 months | 12-24 months |
| Tender preparation | 6-12 months | 18-36 months |
| Bidding + evaluation | 6-12 months | 24-48 months |
| Contract negotiation | 3-6 months | 27-54 months |
| Mobilization | 3-6 months | 30-60 months |
| **Development starts** | - | **2.5-5 years** |

By the time development begins:
- Original stakeholders may have left
- Political priorities may have shifted
- Technology has advanced
- Requirements are outdated

**Implication:** Agile development is structurally impossible within current procurement framework.

---

## Patterns Across Cases

### Pattern 1: Requirements Vacuum

Across Persona, iPolice, and Justice projects:
- No clearly defined objectives at project start
- Requirements specified by consultants, not end users
- Scope changes throughout development
- No mechanism to freeze requirements

**Root cause hypothesis:** Government lacks internal capacity to define requirements. Consultants have incentive to keep requirements vague (more billable work).

### Pattern 2: Governance Theater

All failed projects had:
- Steering committees
- Project boards
- Status reports
- Milestone reviews

Yet none caught the problems early.

**Hypothesis:** Governance structures exist for compliance, not control. Boards review paperwork, not working software.

### Pattern 3: The Accountability Gap

When projects fail:
- Ministers blame predecessors
- Agencies blame vendors
- Vendors blame requirements changes
- No one is held accountable
- Same vendors win next contract

**Question:** What would actual accountability look like? Vendor blacklists? Personal liability for officials?

### Pattern 4: The Expertise Exodus

Government IT salaries: €40-60K
Private sector IT salaries: €60-100K+

Result:
- Best talent leaves for private sector
- Government depends on consultants
- Consultants from same firms that are vendors
- Conflict of interest is structural

---

## Potential Reform Ideas

### Short-term (Within Current Law)

1. **Mandatory pilot projects** - Require working prototype before full contract award
2. **Performance bonds** - Vendors guarantee delivery with financial penalties
3. **Vendor scorecards** - Track and publish vendor performance across projects
4. **Outcome-based contracts** - Pay for delivered functionality, not effort

### Medium-term (Regulatory Change)

5. **Vendor rotation requirements** - Limit consecutive contract awards to same vendor
6. **In-house development capacity** - Build government IT teams like UK GDS
7. **Open source first** - Default to open source unless justified otherwise
8. **Simplified procurement** - Higher thresholds for IT services

### Long-term (Cultural Change)

9. **Training programs** - Upskill civil servants in IT project management
10. **Career paths** - Create attractive government IT careers
11. **Failure learning** - Institutionalize post-mortems and learning
12. **Transparency** - Real-time project dashboards for major IT investments

---

## International Comparisons to Research

### UK Government Digital Service (GDS)
- In-house digital teams
- "Digital by default" policy
- Agile delivery
- Open source preference
- **Question:** What's the UK failure rate compared to Belgium?

### Estonia (e-Estonia)
- Small, agile government
- Open source X-Road platform
- Digital-first culture
- **Question:** Scalable to larger countries?

### Netherlands (DICTU)
- Government IT shared services
- Outcome-based procurement experiments
- **Question:** Success rate vs. Belgium?

### Denmark
- Mandatory open standards
- Strong in-house capacity
- **Question:** Procurement law differences?

---

## Questions for Expert Interviews

### For Former Government Officials

1. What's the real decision-making process for major IT projects?
2. How much influence do vendors have on requirements?
3. Why don't steering committees catch problems early?
4. What reforms would you propose?

### For Vendors (Off the Record)

1. What are the real problems with government IT projects?
2. How do mini-competitions actually work?
3. What would make you deliver better?
4. Are there projects that work? What's different?

### For Academics

1. What does the research say about procurement reform?
2. Are there natural experiments to study?
3. What data exists on government IT outcomes?
4. Who else should we talk to?

---

## Data to Collect

### Quantitative

- [ ] Total government IT spending by year (federal + regional)
- [ ] Number of IT projects by size category
- [ ] Success/failure rates (if any data exists)
- [ ] Average time from tender to delivery
- [ ] Vendor market share by contract value
- [ ] Framework contract award distribution

### Qualitative

- [ ] Case studies of successful projects (if any)
- [ ] Post-mortem reports (if any exist)
- [ ] Expert opinions on root causes
- [ ] International comparison case studies

---

## Risk Register

### Investigation Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| FOI requests denied | High | Medium | Appeal, parliamentary questions |
| Vendors refuse comment | High | Low | Use public sources |
| Legal threats | Low | High | Strong sourcing, legal review |
| Complexity overwhelms | Medium | High | Focus on specific patterns |
| Political interference | Low | Medium | Document everything |

---

## Next Steps

1. [ ] Submit FOI requests for framework contract documentation
2. [ ] Compile vendor performance data from public sources
3. [ ] Request Moore audit report through parliament
4. [ ] Identify academic experts for interviews
5. [ ] Map procurement timeline for 3-5 major projects
6. [ ] Research international comparison cases
7. [ ] Draft initial findings report

---

## Random Thoughts / Parking Lot

- Could blockchain/smart contracts enforce procurement compliance while enabling agility?
- What's the role of EU state aid rules in limiting in-house development?
- Why hasn't any political party made procurement reform a priority?
- Is the real problem political (no incentive to fix) rather than technical?
- What would happen if we just built the tools ourselves and gave them to government?
- How do successful startups in Belgium hire talent that government can't?

---

## Meta Notes

**Last updated:** 2026-01-28
**Status:** Early research phase
**Priority tasks:** FOI requests, timeline compilation, expert identification
