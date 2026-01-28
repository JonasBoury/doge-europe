# Persona Project: Requirements Specification

## Document Purpose

This document reconstructs the project requirements, work packages, and functional scope of the Persona project based on publicly available sources. Note that the official requirements documentation has not been released; this is assembled from parliamentary answers, vendor communications, and technical documentation.

---

## 1. Project Objective

Replace the **30+ year-old legacy systems** used by AGODI (Agentschap voor Onderwijsdiensten) and AHOVOKS (Agentschap voor Hoger Onderwijs, Volwassenenonderwijs, Kwalificaties en Studietoelagen) to manage personnel data and payroll for Flemish education.

### Systems to be Replaced

| System | Function | Age |
|--------|----------|-----|
| **EPD** (Elektronisch Personeelsdossier) | Core personnel file management | 30+ years |
| **VSS** (Vernieuwd Salarissysteem) | Salary calculation engine | 30+ years |
| **Edison** | Data exchange between schools and AGODI | Legacy |

### Scale

- **~220,000** education personnel (teachers, staff)
- **~4,000** schools and education institutions
- Monthly payroll processing is mission-critical

---

## 2. Work Packages (Delen)

The project was structured into three work packages, awarded via mini-competition under the Flemish ICT framework contract (raamcontract 2022-2029).

### Deel 1: Change Management & Communication

| Attribute | Value |
|-----------|-------|
| **Vendor** | Cronos |
| **Scope** | Change management and communication support |
| **Deliverables** | Stakeholder communication, change readiness, training coordination |

### Deel 2: Business Process Reengineering (BPR)

| Attribute | Value |
|-----------|-------|
| **Vendor** | Cronos |
| **Scope** | Mapping and optimizing existing processes |
| **Deliverables** | Process documentation, optimization recommendations, functional requirements input |
| **Critical Note** | This was executed *in parallel* with Deel 3 development — a fundamental project management error |

### Deel 3: Technical Solution

| Attribute | Value |
|-----------|-------|
| **Vendor** | DXC-Cegeka (consortium) |
| **Subcontractors** | Atos, Proximus |
| **Scope** | Analysis, development, implementation |
| **Technical Approach** | Modular Java architecture with containerization |
| **Integrations Required** | Digitaal Vlaanderen building blocks, school software packages (Informat, Wisa, Broekx, etc.), KSZ/MAGDA (Social Security) |

---

## 3. Functional Scope: Edison Record Layouts (RLs)

The core functional requirement was migrating all Edison Record Layouts to the new Persona system. Edison uses structured "Record Layouts" (RLs) for different types of personnel data exchange.

### Complete RL Migration Scope

| RL | Name (Dutch) | Name (English) | Complexity | Migration Status |
|----|--------------|----------------|------------|------------------|
| **RL-1** | Opdrachten en opdrachtgebonden dienstonderbrekingen | Assignments and assignment-related service interruptions | **HIGH** | NOT MIGRATED |
| **RL-2** | Niet-opdrachtgebonden dienstonderbrekingen | Non-assignment service interruptions | **HIGH** | NOT MIGRATED |
| **RL-3** | Opmerking (bij RL-1 en RL-2) | Comments on RL-1/RL-2 | MEDIUM | NOT MIGRATED |
| **RL-4** | Beëindiging opdrachtenpakket | Assignment package termination | **HIGH** | NOT MIGRATED |
| **RL-5** | Woonplaats | Residence address | LOW | **MIGRATED** (Phase 1) |
| **RL-6** | Verblijfplaats | Place of stay | LOW | **MIGRATED** (Phase 1) |
| **RL-7** | Familiale toestand | Family status | LOW | **MIGRATED** (Phase 1) |
| ~~RL-8~~ | ~~Cumulatie~~ | ~~Cumulation~~ | N/A | Abolished 01-09-2009 |
| **RL-9** | Aanvraag immatriculatie | Registration request | LOW | **MIGRATED** (Phase 1) |
| **RL-10** | Plage-uren | Flexible hours | MEDIUM | **MIGRATED** (Phase 2) |
| **RL-11** | DIMONA-aangiften | Social security declarations | MEDIUM | **MIGRATED** (Phase 2) |
| **RL-12** | Opdrachten hogescholen | Higher education assignments | **HIGH** | NOT MIGRATED |
| **RL-13** | Premies | Bonuses/allowances | MEDIUM | **MIGRATED** (Phase 2) |
| **RL-14** | Rekeningnummer (IBAN-BIC) | Bank account number | LOW | **MIGRATED** (Phase 1) |

### Migration Summary

| Category | RLs | Status |
|----------|-----|--------|
| **Migrated (Phase 1 — April 2024)** | RL-5, RL-6, RL-7, RL-9, RL-14 | Personal data fields |
| **Migrated (Phase 2 — April 2025)** | RL-10, RL-11, RL-13 | Benefits and declarations |
| **NOT Migrated** | RL-1, RL-2, RL-3, RL-4, RL-12 | **Core assignment management** |

### Critical Observation

The unmigrated RLs (RL-1, RL-2, RL-3, RL-4, RL-12) represent the **core complexity** of Flemish education personnel management:

- **Assignment rules**: temporary vs. permanent, full-time vs. part-time, multiple simultaneous assignments
- **Service interruptions**: sick leave, parental leave, career breaks with complex interaction rules
- **TADD status**: rules for temporary staff with right to permanent appointment
- **Reaffectation**: complex rules for staff redeployment
- **Higher education specifics**: different rules for hogescholen

The salary calculation engine (VSS) depends entirely on these RLs. Without migrating them, the project cannot deliver its core value proposition.

---

## 4. Technical Requirements

### Architecture

| Requirement | Specification |
|-------------|---------------|
| **Programming Language** | Java |
| **Architecture Style** | Modular (independent modules per functionality) |
| **Deployment** | Containerization (flexibility and scalability) |
| **API Strategy** | API-first (replacing file-based Edison exchanges) |
| **Feedback Model** | Real-time (replacing batch processing) |

### Integration Requirements

| System | Purpose |
|--------|---------|
| **KSZ/MAGDA** | Belgian Social Security Crossroads Bank — automatic retrieval of personal data (nationality, address) |
| **Digitaal Vlaanderen** | Flemish government digital building blocks |
| **School Software Packages** | Informat, Wisa, Broekx, and other administrative packages used by schools |
| **Authentieke Bronnen** | Authentic data sources to eliminate duplicate data entry |

### Key Functional Requirements

1. **Replace formulieren (forms) with meldingen (notifications)** — Schools should submit structured data, not paper/PDF forms
2. **Real-time feedback** — Immediate validation instead of batch error reports
3. **Automatic data retrieval** — Pull data from authentic sources (KSZ) instead of requiring schools to submit it
4. **Salary simulation tool** — Allow prospective teachers to estimate salary
5. **Reduce administrative burden** — Schools should spend less time on personnel administration

---

## 5. What Was Actually Delivered (8-10%)

### Phase 1: Personalia (2024)

| Deliverable | Description |
|-------------|-------------|
| **RL-5 Migration** | Residence address via Persona instead of Edison |
| **RL-6 Migration** | Place of stay via Persona |
| **RL-7 Migration** | Family status via Persona |
| **RL-9 Migration** | Registration/immatriculation requests |
| **RL-14 Migration** | Bank account (IBAN-BIC) changes |
| **KSZ/MAGDA Integration** | Automatic retrieval of personal data |
| **Real-time Feedback** | Immediate validation for personal data submissions |

### Phase 2: Benefits & Declarations (April 2025)

| Deliverable | Description |
|-------------|-------------|
| **RL-10 Migration** | Flexible hours (plage-uren) |
| **RL-11 Migration** | DIMONA social security declarations |
| **RL-13 Migration** | Bonuses and allowances (premies) |
| **API Implementation** | Modern APIs replacing legacy RL file exchanges |

### What Was NOT Delivered

| Component | Impact |
|-----------|--------|
| **RL-1/RL-2/RL-3/RL-4/RL-12** | Core assignment and service interruption management — the heart of personnel administration |
| **EPD Replacement** | Legacy electronic personnel file still in use |
| **VSS Replacement** | Legacy salary calculation engine still in use |
| **Full School Software Integration** | Only partial integration achieved |

---

## 6. Budget

| Item | Amount |
|------|--------|
| **Total Spent** | €16,000,000 |
| **Additional Requested** | €10,000,000 (denied) |
| **Functionality Delivered** | 8-10% |
| **Implied Total Cost (if completed)** | €160M - €200M (extrapolated) |

### Budget Breakdown (Unknown)

The exact allocation across work packages (Deel 1, 2, 3) and vendors (Cronos, DXC-Cegeka, Atos, Proximus) has not been disclosed. This is a critical open question for the investigation.

---

## 7. Timeline

| Date | Event |
|------|-------|
| **2020** | Flemish government decides to develop Persona (Minister Ben Weyts) |
| **2021** | Requirements gathering and procurement preparation |
| **2022** | Vendor selection via mini-competition; development begins |
| **2023** | Development continues; no public alarm raised |
| **2024** | Phase 1 delivered (Personalia — personal data fields) |
| **April 2025** | Phase 2 delivered (Benefits & declarations) |
| **Late 2025** | Budget exhaustion; €10M additional requested |
| **Late 2025** | Minister Demir commissions Moore audit |
| **January 2026** | Moore audit reveals failures; project halted |

---

## 8. Sources

1. [Vlaams Parlement — Schriftelijke vraag Werbrouck (April 2025)](https://docs.vlaamsparlement.be/files/pfile?id=2173153)
2. [AGODI — Digitaliseert en automatiseert](https://onderwijs.vlaanderen.be/nl/over-onderwijs-en-vorming/agodi-agentschap-voor-onderwijsdiensten/organisatie-en-werking-agodi/organisatieverandering-agodi/agodi-digitaliseert-en-automatiseert)
3. [AgODi — Elektronisch communiceren (RL overview)](https://slideplayer.nl/slide/2181603/)
4. [Cegeka — Project Persona](https://www.cegeka.com/nl-be/jobs/flanders-digital-persona)
5. [VRT NWS — Project halted (26/01/2026)](https://www.vrt.be/vrtnws/nl/2026/01/26/minister-demir-zet-it-project-on-hold-dat-al-miljoenen-kostte-2/)
6. [Broekx handleiding — Persona updates](https://docs.broekx.be/books/personeel-9Ih/page/wat-is-er-nieuw)
7. [AGODI Edison downloads](https://www.onderwijs.vlaanderen.be/nl/voor-schoolsofwareleveranciers/edison-en-discimus-voor-schoolsoftwareleveranciers/downloads/download-personeel)
