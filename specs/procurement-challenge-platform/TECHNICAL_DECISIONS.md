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

## ADR-002: Convex as Backend Platform

### Status
Accepted

### Context
We need a backend that:
- Provides real-time updates (challenge status, check-ins, evaluations)
- Has excellent TypeScript integration
- Minimizes operational overhead
- Enables fast iteration

### Decision
Use Convex Cloud as the primary backend platform.

### Consequences
**Positive:**
- Real-time subscriptions built-in (perfect for live dashboards)
- End-to-end TypeScript type safety without code generation
- Zero infrastructure management
- Built-in file storage for submissions
- Automatic caching and optimistic updates
- Transactions are simple and reliable
- Excellent developer experience

**Negative:**
- US-hosted only (EU region on roadmap)
- Vendor lock-in (proprietary, though self-hosting available)
- CLOUD Act exposure for government data

### Migration Path
If EU data residency becomes a hard requirement:
1. **Option A**: Self-host Convex on EU infrastructure (Hetzner/Scaleway)
2. **Option B**: Wait for Convex EU region (confirmed on roadmap)
3. **Option C**: Abstract data layer and migrate to PostgreSQL + Supabase Realtime

### Alternatives Considered
- **PostgreSQL + tRPC**: More setup, no built-in real-time
- **Supabase**: Good but less elegant DX than Convex
- **Firebase**: Google lock-in, less type-safe

---

## ADR-003: Convex Schema Design

### Status
Accepted

### Context
Convex uses a document-based schema with TypeScript definitions. We need to design for:
- Challenge lifecycle management
- Team and user relationships
- Real-time evaluation tracking
- File attachments for submissions

### Decision
Use Convex's schema definition with the following structure:

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Agencies (Government organizations)
  agencies: defineTable({
    name: v.string(),
    slug: v.string(),
    countryCode: v.string(),
    verified: v.boolean(),
    logoUrl: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  // Users
  users: defineTable({
    email: v.string(),
    name: v.string(),
    role: v.union(v.literal("agency"), v.literal("team"), v.literal("admin")),
    agencyId: v.optional(v.id("agencies")),
    teamId: v.optional(v.id("teams")),
    verified: v.boolean(),
  }).index("by_email", ["email"]),

  // Teams
  teams: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    verified: v.boolean(),
    skills: v.array(v.string()),
    portfolioUrls: v.array(v.string()),
  }).index("by_slug", ["slug"]),

  // Team Members
  teamMembers: defineTable({
    teamId: v.id("teams"),
    userId: v.id("users"),
    role: v.union(v.literal("lead"), v.literal("member")),
  })
    .index("by_team", ["teamId"])
    .index("by_user", ["userId"]),

  // Challenges
  challenges: defineTable({
    agencyId: v.id("agencies"),
    status: v.union(
      v.literal("draft"),
      v.literal("published"),
      v.literal("building"),
      v.literal("evaluating"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    title: v.string(),
    problemStatement: v.string(),
    successMetrics: v.array(v.object({
      name: v.string(),
      description: v.string(),
      target: v.string(),
      weight: v.number(),
    })),
    evaluationCriteria: v.array(v.object({
      name: v.string(),
      description: v.string(),
      weight: v.number(),
    })),
    budgetMin: v.number(),
    budgetMax: v.number(),
    currency: v.string(),
    buildDurationWeeks: v.number(),
    publishedAt: v.optional(v.number()),
    applicationsCloseAt: v.optional(v.number()),
    buildStartsAt: v.optional(v.number()),
    buildEndsAt: v.optional(v.number()),
    evaluationEndsAt: v.optional(v.number()),
    userAccessDescription: v.string(),
    dataAccessDescription: v.optional(v.string()),
    legalRequirements: v.array(v.string()),
    openSourceLicense: v.string(),
    tags: v.array(v.string()),
  })
    .index("by_agency", ["agencyId"])
    .index("by_status", ["status"]),

  // Applications
  applications: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    status: v.union(
      v.literal("pending"),
      v.literal("accepted"),
      v.literal("rejected"),
      v.literal("withdrawn")
    ),
    approachDescription: v.string(),
    appliedAt: v.number(),
    reviewedAt: v.optional(v.number()),
    reviewedBy: v.optional(v.id("users")),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_team", ["teamId"]),

  // Check-ins
  checkins: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    weekNumber: v.number(),
    progressSummary: v.string(),
    demoUrl: v.optional(v.string()),
    blockers: v.array(v.string()),
    questions: v.array(v.string()),
    nextWeekGoals: v.array(v.string()),
    submittedAt: v.number(),
  })
    .index("by_challenge_team", ["challengeId", "teamId"])
    .index("by_challenge_week", ["challengeId", "weekNumber"]),

  // Submissions
  submissions: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    prototypeUrl: v.string(),
    repositoryUrl: v.string(),
    documentationUrl: v.optional(v.string()),
    demoVideoId: v.optional(v.id("_storage")),
    submittedAt: v.number(),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_team", ["teamId"]),

  // Evaluations
  evaluations: defineTable({
    submissionId: v.id("submissions"),
    automatedChecks: v.object({
      accessibility: v.boolean(),
      security: v.boolean(),
      performance: v.boolean(),
      codeQuality: v.boolean(),
      details: v.optional(v.string()),
    }),
    userTestingScore: v.optional(v.object({
      taskCompletion: v.number(),
      timeToComplete: v.number(),
      satisfaction: v.number(),
      feedback: v.array(v.string()),
    })),
    technicalScore: v.optional(v.object({
      codeQuality: v.number(),
      architecture: v.number(),
      maintainability: v.number(),
      security: v.number(),
      reviewerNotes: v.string(),
    })),
    agencyScore: v.optional(v.object({
      problemAlignment: v.number(),
      metricAchievement: v.number(),
      integrationFeasibility: v.number(),
      teamResponsiveness: v.number(),
      notes: v.string(),
    })),
    totalScore: v.optional(v.number()),
    rank: v.optional(v.number()),
    completedAt: v.optional(v.number()),
  }).index("by_submission", ["submissionId"]),

  // Payments
  payments: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    milestone: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("paid"),
      v.literal("rejected")
    ),
    approvedAt: v.optional(v.number()),
    approvedBy: v.optional(v.id("users")),
    paidAt: v.optional(v.number()),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_team", ["teamId"]),

  // Q&A
  questions: defineTable({
    challengeId: v.id("challenges"),
    teamId: v.id("teams"),
    question: v.string(),
    answer: v.optional(v.string()),
    answeredAt: v.optional(v.number()),
    answeredBy: v.optional(v.id("users")),
    askedAt: v.number(),
  }).index("by_challenge", ["challengeId"]),
});
```

---

## ADR-004: Authentication with Clerk

### Status
Accepted

### Context
We need authentication that:
- Works seamlessly with Convex
- Supports multiple providers (email, social, future eID)
- Has good security defaults
- Minimal setup

### Decision
Use Clerk for authentication, integrated with Convex.

### Consequences
**Positive:**
- First-class Convex integration
- Handles email verification, password reset, MFA
- Easy to add OAuth providers
- Good security defaults
- React components included

**Negative:**
- Another US-based service
- Pricing at scale
- Custom eID integration needs work

### Alternatives Considered
- **NextAuth**: More DIY, less seamless with Convex
- **Auth0**: Enterprise-focused, expensive
- **Lucia**: Lighter but more manual setup

### Future: eID Integration
For Belgian government identity (eID/itsme), we'll add a custom OAuth provider through Clerk's custom provider support.

---

## ADR-005: File Storage with Convex

### Status
Accepted

### Context
We need file storage for:
- Demo videos (submissions)
- Documentation uploads
- Team logos and assets

### Decision
Use Convex's built-in file storage.

### Consequences
**Positive:**
- Zero additional setup
- Integrated with Convex queries
- Automatic CDN
- Type-safe file references

**Negative:**
- Storage limits on free tier
- Less control than S3

### Usage
```typescript
// Upload file
const uploadUrl = await generateUploadUrl();
const result = await fetch(uploadUrl, {
  method: "POST",
  body: file,
});
const { storageId } = await result.json();

// Get file URL
const url = await ctx.storage.getUrl(storageId);
```

---

## ADR-006: Deployment Strategy

### Status
Accepted

### Context
We need to deploy:
- Next.js frontend
- Convex backend (managed)

### Decision
Deploy frontend to Vercel, Convex backend is managed.

### Consequences
**Positive:**
- Optimal Next.js performance on Vercel
- Zero backend ops (Convex managed)
- Preview deployments for PRs
- Easy environment management

**Negative:**
- US-hosted (both Vercel and Convex)
- Vercel costs at scale

### Future EU Migration Path
If needed:
1. Frontend: Move to Hetzner/Scaleway with Coolify or self-hosted
2. Backend: Self-host Convex on EU infrastructure

---

## ADR-007: Real-time Features

### Status
Accepted

### Context
The platform needs real-time updates for:
- Challenge status changes
- New applications/submissions
- Evaluation progress
- Live transparency dashboard

### Decision
Use Convex's built-in reactivity.

### Implementation
```typescript
// Frontend: Real-time subscription
const challenges = useQuery(api.challenges.list, { status: "published" });

// Backend: Automatic reactivity
export const list = query({
  args: { status: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const query = ctx.db.query("challenges");
    if (args.status) {
      return query.withIndex("by_status", (q) => q.eq("status", args.status)).collect();
    }
    return query.collect();
  },
});
```

All queries automatically update when underlying data changes. No WebSocket setup needed.

---

## ADR-008: Search Implementation

### Status
Proposed

### Context
We need search for:
- Finding challenges by keyword
- Team discovery
- Q&A search

### Decision
Use Convex's built-in full-text search for MVP. Evaluate Meilisearch if advanced features needed.

### Implementation
```typescript
// convex/schema.ts - add search index
challenges: defineTable({
  // ... fields
})
  .searchIndex("search_challenges", {
    searchField: "title",
    filterFields: ["status", "agencyId"],
  }),

// Query with search
export const search = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("challenges")
      .withSearchIndex("search_challenges", (q) => q.search("title", args.query))
      .take(20);
  },
});
```

---

## ADR-009: Background Jobs

### Status
Accepted

### Context
We need background processing for:
- Automated evaluation checks (accessibility, security)
- Email notifications
- Scheduled deadline reminders

### Decision
Use Convex's scheduled functions and actions.

### Implementation
```typescript
// Scheduled function
export const sendDeadlineReminders = internalAction({
  handler: async (ctx) => {
    // Find challenges with deadlines in 24 hours
    // Send reminder emails
  },
});

// Schedule on deployment
export const scheduleReminders = mutation({
  handler: async (ctx) => {
    await ctx.scheduler.runDaily(
      internal.notifications.sendDeadlineReminders,
      { hourUTC: 8, minuteUTC: 0 }
    );
  },
});
```

For heavy evaluation tasks (running Lighthouse, axe-core), use Convex actions that call external services.

---

## ADR-010: Email Notifications

### Status
Proposed

### Context
We need transactional emails for:
- Application confirmations
- Check-in reminders
- Evaluation results
- Payment notifications

### Decision
Use Resend for transactional email (EU-friendly, React Email support).

### Implementation
```typescript
// convex/actions/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendApplicationConfirmation = action({
  args: { email: v.string(), challengeTitle: v.string() },
  handler: async (ctx, args) => {
    await resend.emails.send({
      from: "challenges@openchallenge.eu",
      to: args.email,
      subject: `Application received: ${args.challengeTitle}`,
      react: ApplicationConfirmationEmail({ title: args.challengeTitle }),
    });
  },
});
```

---

## ADR-011: Automated Evaluation Checks

### Status
Proposed

### Context
Submissions need automated checks for:
- Accessibility (WCAG compliance)
- Performance (Lighthouse)
- Security (basic vulnerability scan)
- Code quality

### Decision
Use external services called from Convex actions:
- **Accessibility**: axe-core via Playwright
- **Performance**: Lighthouse CI
- **Security**: OWASP ZAP (basic scan)

### Implementation
Run checks asynchronously after submission:
```typescript
export const runAutomatedChecks = action({
  args: { submissionId: v.id("submissions") },
  handler: async (ctx, args) => {
    const submission = await ctx.runQuery(api.submissions.get, { id: args.submissionId });

    // Run checks in parallel
    const [accessibility, performance, security] = await Promise.all([
      runAccessibilityCheck(submission.prototypeUrl),
      runPerformanceCheck(submission.prototypeUrl),
      runSecurityCheck(submission.prototypeUrl),
    ]);

    // Store results
    await ctx.runMutation(api.evaluations.updateAutomated, {
      submissionId: args.submissionId,
      accessibility,
      performance,
      security,
    });
  },
});
```

---

## ADR-012: Multi-language Support

### Status
Proposed

### Context
Platform needs to support:
- English (default)
- French
- Dutch
- German

### Decision
Use next-intl for frontend i18n, store user preference in Convex.

### Implementation
Reuse existing setup from DOGE Europe website:
```typescript
// Already configured in the monorepo
import { useTranslations } from 'next-intl';

export default function ChallengePage() {
  const t = useTranslations('challenge');
  return <h1>{t('title')}</h1>;
}
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

---

## ADR-014: Monorepo Structure

### Status
Accepted

### Context
The challenge platform will live alongside DOGE Europe website in a monorepo.

### Decision
Add as a new app in the existing monorepo using Turborepo.

### Structure
```
doge-europe/
├── apps/
│   ├── web/                 # DOGE Europe website (existing)
│   └── challenge-platform/  # New procurement platform
├── packages/
│   ├── ui/                  # Shared components
│   ├── config/              # Shared configs
│   └── convex/              # Shared Convex setup (if needed)
├── specs/                   # Specifications (existing)
├── investigations/          # Investigation data (existing)
├── turbo.json
└── package.json
```

---

## Technology Stack Summary

```
┌─────────────────────────────────────────────────────────┐
│  PROCUREMENT CHALLENGE PLATFORM - TECH STACK            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FRONTEND                                               │
│  ├── Next.js 14+ (App Router)                          │
│  ├── TypeScript                                         │
│  ├── Tailwind CSS                                       │
│  ├── next-intl (i18n)                                  │
│  └── Clerk (auth components)                           │
│                                                         │
│  BACKEND                                                │
│  ├── Convex (database + real-time + file storage)      │
│  ├── Clerk (authentication)                            │
│  └── Resend (email)                                    │
│                                                         │
│  EVALUATION SERVICES                                    │
│  ├── axe-core (accessibility)                          │
│  ├── Lighthouse CI (performance)                       │
│  └── OWASP ZAP (security)                              │
│                                                         │
│  DEPLOYMENT                                             │
│  ├── Vercel (frontend)                                 │
│  └── Convex Cloud (backend)                            │
│                                                         │
│  MONITORING                                             │
│  ├── Vercel Analytics                                  │
│  └── Convex Dashboard                                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Decision Log

| ID | Decision | Status | Date |
|----|----------|--------|------|
| ADR-001 | Next.js frontend | Accepted | 2026-01-28 |
| ADR-002 | Convex backend | Accepted | 2026-01-28 |
| ADR-003 | Convex schema design | Accepted | 2026-01-28 |
| ADR-004 | Clerk authentication | Accepted | 2026-01-28 |
| ADR-005 | Convex file storage | Accepted | 2026-01-28 |
| ADR-006 | Vercel deployment | Accepted | 2026-01-28 |
| ADR-007 | Convex real-time | Accepted | 2026-01-28 |
| ADR-008 | Convex search | Proposed | 2026-01-28 |
| ADR-009 | Convex scheduled functions | Accepted | 2026-01-28 |
| ADR-010 | Resend email | Proposed | 2026-01-28 |
| ADR-011 | Automated evaluation | Proposed | 2026-01-28 |
| ADR-012 | next-intl i18n | Proposed | 2026-01-28 |
| ADR-013 | EUPL-1.2 license | Accepted | 2026-01-28 |
| ADR-014 | Monorepo structure | Accepted | 2026-01-28 |

---

## EU Migration Path (If Required)

If EU data sovereignty becomes a hard requirement:

### Phase 1: Self-host Convex
```
Convex Backend → Hetzner Cloud (Germany)
PostgreSQL    → Aiven (Finland)
File Storage  → Scaleway Object Storage (France)
```

### Phase 2: Frontend
```
Vercel → Coolify on Hetzner or Scaleway
```

### Phase 3: Auth
```
Clerk → Self-hosted solution or wait for EU region
```

This migration can be done incrementally without changing application code.
