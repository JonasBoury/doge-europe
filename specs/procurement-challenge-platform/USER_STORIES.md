# User Stories: Procurement Challenge Platform

## Overview

User stories organized by role and feature area. Each story follows the format:
> As a [role], I want to [action] so that [benefit].

---

## Government Agency Stories

### Challenge Creation

```gherkin
US-A01: Create Challenge Draft
As a government agency
I want to create a draft challenge
So that I can define the problem before publishing

Acceptance Criteria:
- Can save draft without all required fields
- Draft visible only to agency
- Can edit draft unlimited times
- Shows validation warnings for missing fields
```

```gherkin
US-A02: Define Success Metrics
As a government agency
I want to define measurable success metrics
So that teams know how they will be evaluated

Acceptance Criteria:
- Can add multiple metrics (1-10)
- Each metric has name, description, target, weight
- Weights must sum to 100%
- Provides metric templates for common scenarios
```

```gherkin
US-A03: Set Budget Range
As a government agency
I want to set a budget range (min-max)
So that teams understand the investment level

Acceptance Criteria:
- Minimum budget >= €10,000
- Maximum budget >= minimum
- Currency selectable (EUR default)
- Shows breakdown of payment milestones
```

```gherkin
US-A04: Publish Challenge
As a government agency
I want to publish a completed challenge
So that teams can apply

Acceptance Criteria:
- All required fields validated
- Legal review confirmation checkbox
- Sets application deadline automatically
- Challenge becomes publicly visible
- Notification sent to registered teams
```

```gherkin
US-A05: Provide User Access
As a government agency
I want to describe how teams can access real users
So that they can build user-centered solutions

Acceptance Criteria:
- Text field for access description
- Can specify number of users available
- Can specify user availability windows
- Can upload consent forms/templates
```

### Application Review

```gherkin
US-A06: Review Applications
As a government agency
I want to review team applications
So that I can accept qualified teams

Acceptance Criteria:
- See all applications in queue
- View team profile and portfolio
- Accept or reject with optional note
- Bulk accept/reject option
- Cannot reject after build phase starts
```

```gherkin
US-A07: Answer Team Questions
As a government agency
I want to answer team questions publicly
So that all teams have equal information

Acceptance Criteria:
- See all questions from all teams
- Answer visible to all accepted teams
- Can mark question as FAQ
- Email notification when question asked
```

### Evaluation

```gherkin
US-A08: Review Submissions
As a government agency
I want to review team submissions
So that I can select the best solution

Acceptance Criteria:
- See all submissions side-by-side
- View demo video inline
- Access deployed prototype
- See automated check results
- See user testing results
```

```gherkin
US-A09: Score Submissions
As a government agency
I want to score submissions on agency criteria
So that I contribute to final evaluation

Acceptance Criteria:
- Score each criterion (0-100)
- Add notes for each score
- See preview of weighted total
- Submit review only once (no editing)
- Must review all submissions before results
```

```gherkin
US-A10: Select Winner
As a government agency
I want to select the winning team
So that the challenge can conclude

Acceptance Criteria:
- See final rankings after all reviews
- Confirm winner selection
- Optional: select runner-up awards
- Publish results publicly
- Trigger winner payment milestone
```

### Payments

```gherkin
US-A11: Approve Payments
As a government agency
I want to approve payment milestones
So that teams receive compensation

Acceptance Criteria:
- See pending payment requests
- View milestone criteria
- Approve or request revision
- Track payment history
- Export for treasury processing
```

---

## Team Stories

### Registration

```gherkin
US-T01: Create Team
As a developer
I want to create a team profile
So that I can apply to challenges

Acceptance Criteria:
- Register with email
- Add team name and description
- Invite team members
- Add portfolio items (URLs)
- Tag skills/technologies
```

```gherkin
US-T02: Verify Identity
As a team lead
I want to verify my identity
So that I can receive payments

Acceptance Criteria:
- Option: eID verification (Belgium)
- Option: ITSME verification
- Option: Manual document upload
- Verification status visible
- Required before first payment
```

```gherkin
US-T03: Add Payment Details
As a team lead
I want to add payment details
So that we can receive milestone payments

Acceptance Criteria:
- Add bank account (IBAN)
- Add VAT number (if applicable)
- Add billing address
- Encrypted storage
- Can update anytime
```

### Challenge Participation

```gherkin
US-T04: Browse Challenges
As a team
I want to browse open challenges
So that I can find relevant opportunities

Acceptance Criteria:
- Filter by status (open, building, etc.)
- Filter by budget range
- Filter by technology/skills
- Sort by deadline, budget, recency
- Save challenges to watchlist
```

```gherkin
US-T05: Apply to Challenge
As a team
I want to apply to a challenge
So that I can participate in the build phase

Acceptance Criteria:
- Write brief approach (max 200 words)
- No detailed proposal required
- Accept terms and conditions
- Receive confirmation email
- See application status
```

```gherkin
US-T06: Submit Weekly Check-in
As a participating team
I want to submit weekly progress updates
So that the agency knows we are on track

Acceptance Criteria:
- Text summary (max 500 chars)
- Optional demo URL
- List blockers
- List questions for agency
- Set next week goals
- Due every Monday by midnight
```

```gherkin
US-T07: Ask Questions
As a participating team
I want to ask questions about the challenge
So that I can clarify requirements

Acceptance Criteria:
- Submit question text
- See when question is answered
- See all Q&A from other teams
- Mark question as resolved
```

```gherkin
US-T08: Access Test Users
As a participating team
I want to access real users for testing
So that I can validate my solution

Acceptance Criteria:
- See user access instructions
- Request user testing sessions
- Schedule through platform
- Record consent digitally
- Access anonymized feedback
```

### Submission

```gherkin
US-T09: Submit Solution
As a participating team
I want to submit my working prototype
So that it can be evaluated

Acceptance Criteria:
- Enter deployed prototype URL
- Enter GitHub repository URL
- Upload or link documentation
- Upload demo video (max 3 min)
- See submission confirmation
- Cannot edit after deadline
```

```gherkin
US-T10: View Evaluation Results
As a participating team
I want to view my evaluation results
So that I understand my performance

Acceptance Criteria:
- See automated check results
- See user testing scores
- See technical review (after close)
- See agency review (after close)
- See final ranking
- See detailed feedback
```

### Payments

```gherkin
US-T11: Track Payments
As a team
I want to track payment milestones
So that I know when to expect payment

Acceptance Criteria:
- See all milestone statuses
- See payment amounts
- See approval date
- See expected payment date
- Download payment receipts
```

---

## End User Stories (Testers)

```gherkin
US-U01: Participate in User Test
As an end user
I want to test prototype solutions
So that I can help evaluate them

Acceptance Criteria:
- Receive testing invitation
- Access prototype securely
- Complete defined tasks
- Submit feedback form
- Rate experience (1-5)
- Provide written feedback
```

```gherkin
US-U02: Give Feedback
As an end user
I want to provide detailed feedback
So that teams can improve their solutions

Acceptance Criteria:
- Rate task difficulty
- Report bugs/issues
- Suggest improvements
- Compare to existing system
- Feedback is anonymized for teams
```

---

## Public Stories

```gherkin
US-P01: View Active Challenges
As a citizen
I want to view active challenges
So that I know what the government is building

Acceptance Criteria:
- See all published challenges
- See budget and timeline
- See participating teams
- See challenge status
- No login required
```

```gherkin
US-P02: View Challenge Results
As a citizen
I want to view challenge outcomes
So that I can see how tax money was spent

Acceptance Criteria:
- See winning solution
- See all scores and rankings
- See payment amounts
- Access open source code
- See success metrics achieved
```

```gherkin
US-P03: View Transparency Dashboard
As a citizen
I want to view overall platform statistics
So that I can assess the procurement system

Acceptance Criteria:
- Total challenges run
- Total budget allocated
- Success rate
- Average savings vs traditional
- Time from problem to solution
```

---

## Admin Stories

```gherkin
US-AD01: Verify Agency
As a platform admin
I want to verify government agencies
So that only legitimate agencies can create challenges

Acceptance Criteria:
- Review agency registration
- Verify government affiliation
- Approve or reject
- Set agency permissions
- Audit trail maintained
```

```gherkin
US-AD02: Handle Disputes
As a platform admin
I want to handle disputes between agencies and teams
So that conflicts are resolved fairly

Acceptance Criteria:
- Receive dispute reports
- Review evidence from both parties
- Make binding decision
- Document resolution
- Appeal process available
```

```gherkin
US-AD03: Manage Platform Settings
As a platform admin
I want to manage platform configuration
So that the system operates correctly

Acceptance Criteria:
- Set minimum/maximum budgets
- Configure payment milestones
- Manage email templates
- Configure integrations
- View system health
```

---

## Non-Functional Stories

```gherkin
US-NF01: Accessibility
As a user with disabilities
I want the platform to be fully accessible
So that I can participate equally

Acceptance Criteria:
- WCAG 2.1 AA compliant
- Screen reader compatible
- Keyboard navigation
- Color contrast ratios
- Focus indicators visible
```

```gherkin
US-NF02: Performance
As any user
I want the platform to load quickly
So that I can work efficiently

Acceptance Criteria:
- Page load < 3 seconds
- API response < 500ms
- Search results < 1 second
- Works on 3G connection
- No blocking operations
```

```gherkin
US-NF03: Mobile Support
As a mobile user
I want to access the platform on my phone
So that I can check progress on the go

Acceptance Criteria:
- Responsive design
- Touch-friendly controls
- Readable on small screens
- Core functions available
- Native app not required
```

```gherkin
US-NF04: Multi-language
As a Belgian user
I want the platform in my language
So that I can use it comfortably

Acceptance Criteria:
- Available in EN, FR, NL, DE
- All UI text translated
- Date/number formatting localized
- Legal documents in all languages
- Language preference saved
```

---

## Story Map

```
                    Browse → Apply → Build → Submit → Results
                      │        │       │        │        │
Agency              Create → Review → Monitor → Score → Award
                      │        │       │        │        │
Team                 │      Apply → Check-in → Submit → Payment
                      │        │       │        │        │
User                 │        │       │      Test  →  Feedback
                      │        │       │        │        │
Public              Browse ───────────────────────────→ View
```

---

## Priority Matrix

| Priority | Stories | Rationale |
|----------|---------|-----------|
| P0 (MVP) | A01-A04, T01, T04-T05, T09, P01 | Minimum to run one challenge |
| P1 (Core) | A05-A10, T06-T08, T10-T11, U01-U02, P02 | Full challenge lifecycle |
| P2 (Scale) | A11, T02-T03, P03, AD01-AD03 | Multi-challenge, payments |
| P3 (Polish) | NF01-NF04 | Production readiness |
