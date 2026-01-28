# Technical Decisions: Procurement Challenge Platform

## Overview

This document records key architectural and technical decisions for the platform. Each decision follows the ADR (Architecture Decision Record) format.

---

## ADR-001: Next.js as Frontend Framework

### Status
Accepted

### Context
We need a frontend framework that supports:
- Server-side rendering for SEO and accessibility
- TypeScript for type safety
- React ecosystem for component libraries
- Easy deployment to various platforms

### Decision
Use Next.js 14+ with App Router.

### Consequences
**Positive:**
- Built-in SSR/SSG improves initial load and SEO
- App Router provides modern React patterns (Server Components)
- Large ecosystem and community
- Vercel deployment is trivial, self-hosting is possible
- TypeScript is first-class

**Negative:**
- Learning curve for App Router patterns
- Some features lock you into Vercel (though alternatives exist)
- Bundle size can grow if not careful

### Alternatives Considered
- **Remix**: Good alternative, less mature ecosystem
- **Astro**: Better for content sites, less suited for interactive apps
- **SvelteKit**: Smaller ecosystem, less enterprise adoption

---

## ADR-002: PostgreSQL as Primary Database

### Status
Accepted

### Context
We need a database that:
- Handles relational data well (challenges, teams, applications)
- Supports JSON for flexible schemas (metrics, evaluation criteria)
- Is open source and self-hostable
- Has strong consistency guarantees

### Decision
Use PostgreSQL 16+ as the primary database.

### Consequences
**Positive:**
- Mature, battle-tested, excellent documentation
- JSONB type for semi-structured data
- Strong transaction support
- Good performance at expected scale
- Free and open source
- Excellent tooling (pgAdmin, psql, etc.)

**Negative:**
- Requires more ops than managed NoSQL
- Horizontal scaling requires additional tooling (Citus, etc.)
- Schema migrations need careful management

### Alternatives Considered
- **MongoDB**: Flexible schema but weaker consistency
- **MySQL**: Viable, but PostgreSQL has better JSON support
- **CockroachDB**: Overkill for initial scale

---

## ADR-003: tRPC for API Layer

### Status
Accepted

### Context
We need an API layer that:
- Provides end-to-end type safety
- Reduces boilerplate
- Works well with Next.js
- Supports real-time subscriptions (future)

### Decision
Use tRPC for the API layer.

### Consequences
**Positive:**
- End-to-end TypeScript types without code generation
- Automatic input validation with Zod
- Great developer experience
- Integrates seamlessly with Next.js
- Supports WebSocket subscriptions

**Negative:**
- Coupled to TypeScript ecosystem
- Less suitable for public APIs (REST better for third parties)
- Smaller community than REST/GraphQL

### Alternatives Considered
- **REST**: More universal, less type safety
- **GraphQL**: More flexible, more complex setup
- **gRPC**: Better for microservices, not web clients

### Migration Path
Will add REST endpoints for public API (transparency, integrations) while keeping tRPC for internal use.

---

## ADR-004: Drizzle ORM for Database Access

### Status
Accepted

### Context
We need an ORM/query builder that:
- Provides type safety
- Generates efficient SQL
- Supports migrations
- Is lightweight and fast

### Decision
Use Drizzle ORM.

### Consequences
**Positive:**
- Excellent TypeScript integration
- SQL-like syntax, no magic
- Lightweight, fast startup
- Good migration tooling
- Works well with tRPC and Zod

**Negative:**
- Newer than Prisma, smaller community
- Some features still maturing
- Less automatic relation handling

### Alternatives Considered
- **Prisma**: More features, heavier, slower cold starts
- **Kysely**: Good query builder, less ORM features
- **Raw SQL**: No type safety

---

## ADR-005: Authentication with NextAuth.js

### Status
Accepted

### Context
We need authentication that:
- Supports multiple providers (email, eID, social)
- Works with Next.js App Router
- Is extensible for government identity systems
- Handles sessions securely

### Decision
Use NextAuth.js (Auth.js) v5.

### Consequences
**Positive:**
- Built for Next.js, excellent integration
- Multiple provider support out of box
- Session management handled
- Extensible for custom providers (eID)
- Active development and community

**Negative:**
- v5 still stabilizing
- Custom provider setup requires work
- Session storage decisions matter at scale

### Alternatives Considered
- **Lucia**: Lighter, more manual setup
- **Clerk**: Managed, but vendor lock-in and cost
- **Custom**: Too much security risk

---

## ADR-006: S3-Compatible Storage

### Status
Accepted

### Context
We need file storage for:
- Team submissions (code, documentation)
- Demo videos
- Agency documents
- User uploads

### Decision
Use S3-compatible object storage (AWS S3, MinIO, Cloudflare R2).

### Consequences
**Positive:**
- Industry standard API
- Multiple provider options (avoid lock-in)
- Self-hostable with MinIO
- Scales infinitely
- Cost-effective for large files

**Negative:**
- Additional infrastructure to manage
- Need CDN for performance
- Presigned URLs add complexity

### Alternatives Considered
- **Local filesystem**: Doesn't scale, not distributed
- **Database blobs**: Poor performance, expensive
- **Git LFS**: Good for code, not general files

---

## ADR-007: Background Jobs with BullMQ

### Status
Accepted

### Context
We need background job processing for:
- Automated evaluation checks
- Email notifications
- Scheduled tasks (deadline reminders)
- Heavy computations (scoring)

### Decision
Use BullMQ with Redis.

### Consequences
**Positive:**
- Reliable job persistence
- Retry and backoff support
- Priority queues
- Dashboard for monitoring
- Well-documented

**Negative:**
- Requires Redis
- Additional service to deploy
- Queue management overhead

### Alternatives Considered
- **Inngest**: Managed, but vendor dependency
- **pg-boss**: Uses PostgreSQL, simpler but less features
- **Temporal**: Overkill for current needs

---

## ADR-008: Meilisearch for Search

### Status
Accepted

### Context
We need search functionality for:
- Finding challenges by keyword
- Team discovery
- Documentation search
- Fast filtering

### Decision
Use Meilisearch.

### Consequences
**Positive:**
- Fast, typo-tolerant search
- Easy to set up and use
- Good filtering and faceting
- Self-hostable, open source
- Low resource usage

**Negative:**
- Index sync adds complexity
- Another service to maintain
- Limited advanced features vs Elasticsearch

### Alternatives Considered
- **PostgreSQL full-text**: Simpler, less powerful
- **Elasticsearch**: More powerful, much heavier
- **Algolia**: Managed, expensive at scale

---

## ADR-009: Monorepo Structure

### Status
Accepted

### Context
We need to organize code for:
- Web application
- Shared types and utilities
- Documentation
- Deployment configs

### Decision
Use monorepo with Turborepo.

### Consequences
**Positive:**
- Shared code between packages
- Atomic changes across boundaries
- Single CI/CD pipeline
- Consistent tooling

**Negative:**
- More complex initial setup
- Build caching important for performance
- Dependency management needs care

### Structure
```
/
├── apps/
│   ├── web/          # Next.js application
│   └── docs/         # Documentation site
├── packages/
│   ├── db/           # Database schema and client
│   ├── api/          # tRPC routers
│   ├── ui/           # Shared components
│   └── config/       # Shared configs (ESLint, TS)
├── turbo.json
└── package.json
```

---

## ADR-010: eID Integration Strategy

### Status
Proposed

### Context
We need to integrate Belgian government identity:
- eID (electronic ID card)
- itsme (mobile identity app)
- Future: EU eIDAS

### Decision
Build abstraction layer for identity providers.

### Consequences
**Positive:**
- Support multiple providers
- Easy to add new countries
- Fallback to manual verification
- Clean separation of concerns

**Negative:**
- Each integration requires specific work
- Government APIs can be complex
- Testing requires sandbox access

### Implementation
```typescript
interface IdentityProvider {
  name: string;
  country: string;
  verify(token: string): Promise<VerifiedIdentity>;
  getAuthUrl(): string;
}

// Implementations
class BelgianEIDProvider implements IdentityProvider { }
class ITSMEProvider implements IdentityProvider { }
class ManualVerificationProvider implements IdentityProvider { }
```

---

## ADR-011: Evaluation Automation

### Status
Proposed

### Context
We need automated checks for submissions:
- Accessibility (WCAG compliance)
- Security (basic vulnerabilities)
- Performance (load time, metrics)
- Code quality (linting, tests)

### Decision
Use established open-source tools orchestrated by our platform.

### Tools
| Check | Tool | Notes |
|-------|------|-------|
| Accessibility | axe-core | Industry standard, WCAG 2.1 |
| Performance | Lighthouse CI | Google's tool, well-maintained |
| Security | OWASP ZAP | Basic vulnerability scan |
| Code Quality | ESLint, Prettier | Configurable rules |
| Dependency Scan | npm audit, Snyk | Known vulnerabilities |

### Consequences
**Positive:**
- No custom security scanning needed
- Industry-standard tools
- Reproducible results
- Can run in CI/CD

**Negative:**
- False positives possible
- Tools need maintenance
- Resource-intensive to run

---

## ADR-012: Multi-Tenancy Strategy

### Status
Proposed

### Context
We may support multiple agencies/countries in future:
- Shared platform, isolated data
- Different branding/configuration
- Separate billing

### Decision
Use row-level security with tenant ID, not separate databases.

### Consequences
**Positive:**
- Simpler infrastructure
- Easier to maintain
- Shared codebase
- Cross-tenant features possible

**Negative:**
- Data isolation via application logic
- More complex queries
- Need careful access control

### Implementation
```sql
-- All tables have agency_id
CREATE POLICY agency_isolation ON challenges
  USING (agency_id = current_setting('app.current_agency')::uuid);

-- Set context at request start
SET app.current_agency = 'uuid-here';
```

---

## ADR-013: Open Source License

### Status
Accepted

### Context
We need a license that:
- Allows free use by governments
- Requires derivatives to be open source
- Is legally valid across EU
- Allows commercial use

### Decision
Use EUPL-1.2 (European Union Public License).

### Consequences
**Positive:**
- Copyleft ensures derivatives stay open
- Officially recognized in all EU countries
- Compatible with GPL, LGPL, MPL
- Specifically designed for public sector
- Available in all EU languages

**Negative:**
- Less known than MIT/GPL
- Some companies hesitant about copyleft

### Alternatives Considered
- **MIT**: Too permissive, allows proprietary forks
- **AGPL**: Network copyleft might be too strict
- **GPL**: Less EU legal recognition

---

## Decision Log

| ID | Decision | Status | Date |
|----|----------|--------|------|
| ADR-001 | Next.js frontend | Accepted | 2026-01-28 |
| ADR-002 | PostgreSQL database | Accepted | 2026-01-28 |
| ADR-003 | tRPC API | Accepted | 2026-01-28 |
| ADR-004 | Drizzle ORM | Accepted | 2026-01-28 |
| ADR-005 | NextAuth authentication | Accepted | 2026-01-28 |
| ADR-006 | S3-compatible storage | Accepted | 2026-01-28 |
| ADR-007 | BullMQ background jobs | Accepted | 2026-01-28 |
| ADR-008 | Meilisearch search | Accepted | 2026-01-28 |
| ADR-009 | Turborepo monorepo | Accepted | 2026-01-28 |
| ADR-010 | eID integration | Proposed | 2026-01-28 |
| ADR-011 | Evaluation automation | Proposed | 2026-01-28 |
| ADR-012 | Multi-tenancy strategy | Proposed | 2026-01-28 |
| ADR-013 | EUPL-1.2 license | Accepted | 2026-01-28 |
