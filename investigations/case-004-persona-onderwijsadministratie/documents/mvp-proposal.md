# Persona Project: Modern MVP Proposal

## Executive Summary

This document proposes a redesigned, privacy-first architecture for the Persona system using modern web technologies. The proposal addresses the fundamental failures of the original project by:

1. **Starting with the hard problems first** — RL-1/RL-2 (assignments and service interruptions)
2. **Building internal capability** — Open source stack, no vendor lock-in
3. **Privacy by design** — GDPR-compliant architecture from day one
4. **Incremental delivery** — Working software every 2 weeks, not every 2 years

---

## Part 1: Technology Stack

### Frontend

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | React 18+ with Next.js 14+ | Server components, streaming, excellent DX |
| **UI Library** | Radix UI + Tailwind CSS | Accessible primitives, no design lock-in |
| **State Management** | TanStack Query + Zustand | Server state vs. client state separation |
| **Forms** | React Hook Form + Zod | Type-safe validation, excellent performance |
| **Tables** | TanStack Table | Complex data grids with virtualization |
| **Auth UI** | Custom + next-auth | Belgian eID/itsme integration ready |

**Why not Base UI?** Base UI (MUI) is solid but brings significant bundle size and has opinionated styling. Radix UI provides unstyled, accessible primitives that work better with Tailwind and allow full design control.

### Backend

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Runtime** | Node.js 20+ / Bun | Fast, TypeScript-native |
| **API Framework** | tRPC or Hono | End-to-end type safety, minimal boilerplate |
| **Validation** | Zod | Shared schemas frontend/backend |
| **ORM** | Drizzle ORM | Type-safe, SQL-first, excellent migrations |
| **Queue** | BullMQ + Redis | Async job processing (salary calculations, DIMONA) |
| **Search** | Meilisearch or Typesense | Fast, privacy-friendly (self-hosted) |

### Infrastructure

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Database** | PostgreSQL 16+ | Proven, JSONB for flexibility, row-level security |
| **Cache** | Redis / Valkey | Session management, job queues, caching |
| **File Storage** | MinIO (S3-compatible) | Self-hosted, GDPR-compliant document storage |
| **Container Orchestration** | Kubernetes (OpenShift) | Flemish government standard |
| **CI/CD** | GitLab CI or GitHub Actions | Automated testing, deployment |
| **Monitoring** | Grafana + Prometheus + Loki | Full observability stack |

### Alternative: Full TypeScript Stack

For maximum developer velocity and type safety:

```
Frontend:  Next.js 14 + React 18 + Radix UI + Tailwind
Backend:   Next.js API Routes + tRPC + Drizzle ORM
Database:  PostgreSQL + Redis
Auth:      NextAuth.js with Belgian eID provider
Deploy:    Docker + Kubernetes
```

This "T3 Stack" approach means one language (TypeScript) across the entire codebase, shared types, and dramatically reduced integration bugs.

---

## Part 2: Database Architecture (Privacy-First)

### Core Principles

1. **Data Minimization** — Only store what's legally required
2. **Purpose Limitation** — Each data field has documented legal basis
3. **Storage Limitation** — Automatic retention policies and deletion
4. **Pseudonymization** — Separate identity from operational data
5. **Encryption at Rest** — All PII encrypted with key rotation
6. **Audit Logging** — Immutable log of all data access

### Schema Design

#### Identity Layer (Pseudonymized)

```sql
-- Pseudonymized identity store
-- Links to KSZ/Rijksregister via external lookup only
CREATE TABLE person_identity (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Pseudonymized identifier (NOT the rijksregisternummer)
    pseudo_id TEXT UNIQUE NOT NULL,

    -- Encrypted PII (AES-256-GCM)
    encrypted_data BYTEA NOT NULL,
    encryption_key_id UUID NOT NULL,

    -- Data lineage
    source_system TEXT NOT NULL, -- 'KSZ', 'MAGDA', 'MANUAL'
    last_verified_at TIMESTAMPTZ,

    -- GDPR metadata
    legal_basis TEXT NOT NULL, -- 'CONTRACT', 'LEGAL_OBLIGATION', 'CONSENT'
    retention_until DATE NOT NULL,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Encrypted data structure (decrypted in application layer):
-- {
--   "rijksregisternummer": "...",
--   "naam": "...",
--   "voornaam": "...",
--   "geboortedatum": "...",
--   "nationaliteit": "...",
--   "adres": { ... }
-- }
```

#### Assignment Layer (Core Business Logic)

```sql
-- Opdrachten (RL-1 equivalent)
CREATE TABLE assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    person_pseudo_id TEXT NOT NULL REFERENCES person_identity(pseudo_id),

    -- School/institution reference
    institution_id UUID NOT NULL,

    -- Assignment details
    assignment_type TEXT NOT NULL, -- 'VAST', 'TIJDELIJK', 'TADD', etc.
    function_code TEXT NOT NULL,   -- Ambtcode
    volume_percentage DECIMAL(5,2) NOT NULL,

    -- Validity period
    start_date DATE NOT NULL,
    end_date DATE, -- NULL = ongoing

    -- Status tracking
    status TEXT NOT NULL DEFAULT 'ACTIVE',

    -- Versioning for audit trail
    version INT NOT NULL DEFAULT 1,
    valid_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    valid_to TIMESTAMPTZ, -- NULL = current version

    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID NOT NULL
);

-- Temporal query index
CREATE INDEX idx_assignments_temporal
ON assignments (person_pseudo_id, valid_from, valid_to)
WHERE valid_to IS NULL;
```

#### Service Interruptions Layer

```sql
-- Dienstonderbrekingen (RL-2 equivalent)
CREATE TABLE service_interruptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Can be linked to specific assignment or person-wide
    assignment_id UUID REFERENCES assignments(id),
    person_pseudo_id TEXT NOT NULL,

    -- Interruption details
    interruption_type TEXT NOT NULL, -- 'ZIEKTE', 'OUDERSCHAPSVERLOF', etc.
    interruption_code TEXT NOT NULL,

    -- Period
    start_date DATE NOT NULL,
    end_date DATE,

    -- Volume (for partial interruptions)
    volume_percentage DECIMAL(5,2),

    -- Documentation (encrypted reference)
    document_reference UUID,

    -- Versioning
    version INT NOT NULL DEFAULT 1,
    valid_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    valid_to TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID NOT NULL
);
```

#### Salary Calculation Layer

```sql
-- Salary calculation results (VSS replacement)
CREATE TABLE salary_calculations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    person_pseudo_id TEXT NOT NULL,

    -- Period
    calculation_month DATE NOT NULL, -- First of month

    -- Input snapshot (for reproducibility)
    input_snapshot_id UUID NOT NULL,

    -- Calculation results
    gross_salary DECIMAL(10,2) NOT NULL,
    deductions JSONB NOT NULL, -- Structured breakdown
    net_salary DECIMAL(10,2) NOT NULL,

    -- Calculation metadata
    calculation_version TEXT NOT NULL, -- Rules version
    calculated_at TIMESTAMPTZ NOT NULL,
    calculation_duration_ms INT,

    -- Status
    status TEXT NOT NULL, -- 'DRAFT', 'APPROVED', 'PAID'
    approved_by UUID,
    approved_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Input snapshot for audit trail
CREATE TABLE salary_input_snapshots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    person_pseudo_id TEXT NOT NULL,
    snapshot_date TIMESTAMPTZ NOT NULL,

    -- Denormalized input data (encrypted)
    encrypted_snapshot BYTEA NOT NULL,

    -- Hash for integrity verification
    snapshot_hash TEXT NOT NULL,

    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### Audit Layer (Immutable)

```sql
-- Immutable audit log (append-only)
CREATE TABLE audit_log (
    id BIGSERIAL PRIMARY KEY,

    -- What happened
    event_type TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID NOT NULL,

    -- Who did it
    actor_id UUID NOT NULL,
    actor_type TEXT NOT NULL, -- 'USER', 'SYSTEM', 'API'
    actor_ip INET,

    -- Change details
    old_values JSONB,
    new_values JSONB,

    -- Context
    request_id UUID,
    session_id UUID,

    -- Timestamp (immutable)
    occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Partition by month for performance
CREATE INDEX idx_audit_log_entity ON audit_log (entity_type, entity_id, occurred_at);
CREATE INDEX idx_audit_log_actor ON audit_log (actor_id, occurred_at);

-- Prevent updates/deletes
CREATE RULE audit_log_no_update AS ON UPDATE TO audit_log DO INSTEAD NOTHING;
CREATE RULE audit_log_no_delete AS ON DELETE TO audit_log DO INSTEAD NOTHING;
```

### Row-Level Security (Multi-Tenancy)

```sql
-- Enable RLS
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see assignments for their institution
CREATE POLICY assignments_institution_policy ON assignments
    FOR ALL
    USING (
        institution_id IN (
            SELECT institution_id
            FROM user_institution_access
            WHERE user_id = current_setting('app.current_user_id')::UUID
        )
    );

-- Policy: AGODI admins can see all
CREATE POLICY assignments_admin_policy ON assignments
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM user_roles
            WHERE user_id = current_setting('app.current_user_id')::UUID
            AND role = 'AGODI_ADMIN'
        )
    );
```

### Encryption Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Encryption Service (Node.js)                        │   │
│  │  - AES-256-GCM for data encryption                  │   │
│  │  - Key derivation from master key                   │   │
│  │  - Automatic key rotation                           │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Key Management                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  HashiCorp Vault or AWS KMS                         │   │
│  │  - Master key storage                               │   │
│  │  - Key rotation policies                            │   │
│  │  - Access audit logging                             │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Layer                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  PostgreSQL with TDE (Transparent Data Encryption)   │   │
│  │  - Encrypted at rest                                │   │
│  │  - Encrypted backups                                │   │
│  │  - TLS for connections                              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Part 3: MVP Scope

### Philosophy: Build the Hard Parts First

The original Persona project failed by building easy parts (personal data fields) while avoiding the hard parts (assignment logic). This MVP inverts that approach.

### MVP Phase 1: Assignment Core (12 weeks)

**Goal:** Replace RL-1 (assignments) with a working system for ONE pilot school type.

| Week | Deliverable |
|------|-------------|
| 1-2 | Database schema, API scaffolding, auth integration |
| 3-4 | Assignment CRUD with validation rules |
| 5-6 | School admin UI for assignment management |
| 7-8 | AGODI admin UI for oversight |
| 9-10 | Edison RL-1 import/export compatibility layer |
| 11-12 | Pilot deployment, feedback integration |

**Success Criteria:**
- One school type (e.g., basisonderwijs) can manage assignments via Persona
- Bi-directional sync with Edison (fallback mode)
- Complete audit trail
- <500ms response time for all operations

### MVP Phase 2: Service Interruptions (8 weeks)

**Goal:** Add RL-2 (service interruptions) with rules engine.

| Week | Deliverable |
|------|-------------|
| 1-2 | Service interruption schema and API |
| 3-4 | Rules engine for interruption validation |
| 5-6 | UI for interruption management |
| 7-8 | Integration with assignment calculations |

### MVP Phase 3: Salary Calculation Engine (12 weeks)

**Goal:** Replace VSS for pilot scope.

| Week | Deliverable |
|------|-------------|
| 1-3 | Salary rules modeling (selected statutes only) |
| 4-6 | Calculation engine with test suite |
| 7-9 | Comparison mode (run parallel with VSS) |
| 10-12 | Validation, edge case handling, approval workflows |

### MVP Phase 4: Scale & Migrate (Ongoing)

- Expand to additional school types
- Migrate remaining RL types
- Phase out Edison dependencies
- Full VSS replacement

---

## Part 4: Architecture Diagrams

### System Overview

```
┌────────────────────────────────────────────────────────────────────┐
│                         School Users                                │
│                    (Secretariaat, Directie)                        │
└────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                      Web Application                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │   Next.js    │  │   React UI   │  │   Radix +    │            │
│  │   (SSR/SSG)  │  │  Components  │  │   Tailwind   │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
└────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                        API Gateway                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │    tRPC      │  │   Rate       │  │   Auth       │            │
│  │   Router     │  │   Limiting   │  │   (eID)      │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
└────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    ▼             ▼             ▼
┌──────────────────────┐ ┌──────────────┐ ┌──────────────────────┐
│   Assignment Service │ │ Salary Calc  │ │   Integration        │
│   - CRUD operations  │ │ - Rules      │ │   Service            │
│   - Validation       │ │ - Engine     │ │   - KSZ/MAGDA        │
│   - History          │ │ - Approval   │ │   - DIMONA           │
└──────────────────────┘ └──────────────┘ │   - Edison (legacy)  │
           │                    │         └──────────────────────┘
           │                    │                    │
           ▼                    ▼                    ▼
┌────────────────────────────────────────────────────────────────────┐
│                       Data Layer                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │  PostgreSQL  │  │    Redis     │  │    MinIO     │            │
│  │  (Primary)   │  │   (Cache)    │  │  (Documents) │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
└────────────────────────────────────────────────────────────────────┘
```

### Data Flow: Assignment Creation

```
School Admin                    Persona API                    Database
     │                              │                              │
     │  POST /assignments           │                              │
     │  {person, function, dates}   │                              │
     │ ─────────────────────────────>                              │
     │                              │                              │
     │                              │  Validate against rules      │
     │                              │  ─────────────────────────>  │
     │                              │                              │
     │                              │  Check conflicts             │
     │                              │  ─────────────────────────>  │
     │                              │                              │
     │                              │  Create with version=1       │
     │                              │  ─────────────────────────>  │
     │                              │                              │
     │                              │  Write audit log             │
     │                              │  ─────────────────────────>  │
     │                              │                              │
     │  201 Created                 │                              │
     │  {id, status: "ACTIVE"}      │                              │
     │ <─────────────────────────────                              │
     │                              │                              │
     │                              │  Async: Sync to Edison       │
     │                              │  (compatibility mode)        │
     │                              │  ─────────────────────────>  │
```

---

## Part 5: GDPR Compliance Checklist

### Data Protection Impact Assessment (DPIA) Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Lawful Basis** | Legal obligation (education law) + contract (employment) |
| **Data Minimization** | Only fields required for salary calculation |
| **Purpose Limitation** | Documented per-field legal basis in schema |
| **Storage Limitation** | Automatic retention policies (7 years for salary data) |
| **Accuracy** | KSZ/MAGDA integration for authoritative data |
| **Security** | Encryption at rest, in transit, RLS, audit logging |
| **Accountability** | Complete audit trail, DPO access |

### Data Subject Rights Implementation

| Right | Implementation |
|-------|----------------|
| **Access** | Self-service portal + API for data export |
| **Rectification** | Correction workflow with audit trail |
| **Erasure** | Anonymization after retention period (not deletion for legal data) |
| **Portability** | JSON/CSV export in standard format |
| **Objection** | Documented legal basis makes this limited for employment data |

### Technical Measures

- [ ] Encryption at rest (PostgreSQL TDE + application-level for PII)
- [ ] Encryption in transit (TLS 1.3 everywhere)
- [ ] Pseudonymization (separate identity from operational data)
- [ ] Access control (RBAC + row-level security)
- [ ] Audit logging (immutable, tamper-evident)
- [ ] Data retention automation (scheduled anonymization jobs)
- [ ] Breach notification system (automated alerts)
- [ ] Backup encryption (same key management as primary)

---

## Part 6: Cost Estimate

### Team Composition (MVP Phase 1-3)

| Role | Count | Duration | Monthly Cost | Total |
|------|-------|----------|--------------|-------|
| Tech Lead | 1 | 8 months | €12,000 | €96,000 |
| Senior Backend | 2 | 8 months | €10,000 | €160,000 |
| Senior Frontend | 2 | 8 months | €10,000 | €160,000 |
| DevOps/SRE | 1 | 8 months | €10,000 | €80,000 |
| Product Owner | 1 | 8 months | €10,000 | €80,000 |
| Domain Expert (AGODI) | 1 | 8 months | €8,000 | €64,000 |
| QA Engineer | 1 | 6 months | €8,000 | €48,000 |

**Team Total: €688,000**

### Infrastructure (Annual)

| Component | Monthly | Annual |
|-----------|---------|--------|
| Kubernetes cluster | €3,000 | €36,000 |
| PostgreSQL (managed) | €1,500 | €18,000 |
| Redis (managed) | €500 | €6,000 |
| MinIO/S3 storage | €500 | €6,000 |
| Monitoring stack | €500 | €6,000 |
| Security tooling | €1,000 | €12,000 |

**Infrastructure Total: €84,000/year**

### Comparison with Original Project

| Metric | Original Persona | This Proposal |
|--------|------------------|---------------|
| **Budget** | €16M spent | €772K (MVP) |
| **Timeline** | 5 years, 8-10% done | 8 months to MVP |
| **Approach** | Waterfall, easy parts first | Agile, hard parts first |
| **Team** | External consultants | Mixed internal/external |
| **Vendor lock-in** | High (framework contract) | None (open source) |

---

## Part 7: Risk Mitigation

### Technical Risks

| Risk | Mitigation |
|------|------------|
| Legacy Edison compatibility | Build compatibility layer first; run parallel |
| Rules complexity | Start with one school type; expand incrementally |
| KSZ/MAGDA integration | Use existing AGODI integration; don't rebuild |
| Performance at scale | Load testing from week 1; PostgreSQL scales |

### Organizational Risks

| Risk | Mitigation |
|------|------------|
| AGODI capacity | Embed domain expert in team; not governance vendor |
| Political interference | Ship working software every 2 weeks; facts over reports |
| Scope creep | Fixed MVP scope; backlog for everything else |
| Vendor lock-in | Open source stack; no proprietary dependencies |

### What We Learned from the Failure

| Original Problem | This Proposal's Solution |
|------------------|-------------------------|
| No defined objectives | MVP scope locked in writing |
| No project governance | Tech lead accountable, not "governance vendor" |
| Easy parts first | Hard parts (RL-1, RL-2, salary) first |
| No financial control | Fixed-price phases with clear deliverables |
| No oversight of consultants | Mixed team with internal domain expertise |
| Parliament misled | Bi-weekly demos, public progress dashboard |

---

## Part 8: Recommendations

### For AGODI

1. **Build internal engineering capability** — You cannot outsource accountability
2. **Start with the hard problems** — If you can't solve RL-1/RL-2, you don't have a project
3. **Ship every 2 weeks** — Working software is the only honest progress metric
4. **Use open source** — The framework contract is a cartel; escape it

### For the Flemish Government

1. **Reform the ICT framework contract** — Mini-competitions among friends is not competition
2. **Require independent technical audits** — Not by the governance vendor
3. **Mandate public progress dashboards** — "Complex but manageable" should be impossible to report
4. **Build a Government Digital Service** — Like UK GDS, central expertise for all agencies

### For the Next Minister

1. **Don't approve projects without defined requirements** — The Moore audit found "no objectives"
2. **Demand working software, not reports** — Consultants produce reports; engineers produce software
3. **Commission audits before the budget runs out** — Not after

---

## Appendix: File Structure

```
persona-mvp/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/               # App router pages
│   │   ├── components/        # React components
│   │   └── lib/               # Client utilities
│   └── api/                    # tRPC API server
│       ├── routers/           # API routes
│       ├── services/          # Business logic
│       └── db/                # Drizzle schema
├── packages/
│   ├── ui/                    # Shared UI components
│   ├── validators/            # Zod schemas
│   ├── rules-engine/          # Salary calculation rules
│   └── edison-compat/         # Legacy compatibility layer
├── infrastructure/
│   ├── kubernetes/            # K8s manifests
│   ├── terraform/             # Infrastructure as code
│   └── docker/                # Container definitions
└── docs/
    ├── architecture/          # ADRs and diagrams
    ├── api/                   # API documentation
    └── runbooks/              # Operational guides
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-01-28 | DOGE Europe | Initial proposal |
