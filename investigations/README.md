# Investigations Directory

This directory is for storing your investigation case files, research notes, and collected evidence.

## Structure

Organize your investigations like this:

```
investigations/
├── case-001-topic-name/
│   ├── documents/
│   │   ├── official/
│   │   ├── media/
│   │   └── leaked/
│   ├── financial/
│   │   ├── transactions/
│   │   └── analysis/
│   ├── networks/
│   │   └── relationship-maps/
│   ├── timeline.md
│   ├── sources.md
│   └── notes.md
├── case-002-another-topic/
└── ...
```

## Security Notice

**IMPORTANT:** This directory is gitignored by default to protect sensitive investigation data.

### Best Practices:

1. **Never commit sensitive investigation data** to version control
2. **Encrypt sensitive files** at rest
3. **Use secure backup** solutions
4. **Remove metadata** from documents before sharing
5. **Protect source identities** in all notes
6. **Follow GDPR** and data protection regulations

### For Sensitive Material:

- Use encrypted volumes (e.g., VeraCrypt)
- Store offline when possible
- Use secure deletion when disposing of files
- Never include names of confidential sources
- Redact personal information from documents

## Case File Template

When starting a new investigation, create a directory and include:

### 1. Case Overview (`overview.md`)
```markdown
# Case: [Name]

**Status:** Active/On Hold/Closed
**Start Date:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD

## Summary
Brief description of the investigation

## Key Questions
- Question 1
- Question 2

## Key Entities
- Person/Organization 1
- Person/Organization 2

## Status Notes
Current state and next steps
```

### 2. Sources Log (`sources.md`)
```markdown
# Sources

## Documents
- [Type] [Title/Description] - [Date] - [Source]

## Interviews
- [Person/Alias] - [Date] - [Type: On record/Background/etc.]

## Databases
- [Database name] - [Access date] - [Relevant queries]

## Media
- [Article/Report] - [Publication] - [Date] - [URL]
```

### 3. Timeline (`timeline.md`)
```markdown
# Timeline

## YYYY-MM-DD
- Event description
- Source: [reference]

## YYYY-MM-DD
- Event description
- Source: [reference]
```

### 4. Network Map (`networks/map.md`)
```markdown
# Network Map

## Key Entities
- Entity 1: [Description]
- Entity 2: [Description]

## Relationships
- Entity 1 → Entity 2: [Type of relationship]
  - Evidence: [Documentation]
```

### 5. Research Notes (`notes.md`)
```markdown
# Research Notes

## [Date] - [Topic]
Notes and findings

## To Do
- [ ] Task 1
- [ ] Task 2

## Questions to Resolve
- Question 1
```

## Working with Claude

You can ask Claude to help:
- Organize investigation files
- Create case templates
- Analyze collected documents
- Build timelines
- Map networks
- Track financial flows
- Generate reports

Example prompts:
```
"Create a new case file structure for investigating [topic]"
"Help me organize these documents into the case file"
"Build a timeline from these events"
"Map the network connections I've discovered"
"Analyze these financial records"
```

## Collaboration

If working with others:
- **Define clear roles** (lead investigator, researcher, fact-checker, etc.)
- **Use separate encrypted channels** for communication
- **Maintain access controls** to sensitive materials
- **Document who has access** to what
- **Have protocols** for handling leaks and sensitive sources

## Legal Compliance

Remember:
- Follow Belgian FOI laws when requesting documents
- Comply with GDPR for personal data
- Respect court orders and legal restrictions
- Understand defamation law
- Know whistleblower protections
- Maintain journalistic privilege where applicable

## Ethics

Always:
- Follow the project's ETHICS.md guidelines
- Verify before sharing findings
- Protect source confidentiality
- Minimize harm to innocent parties
- Maintain objectivity
- Serve the public interest

---

**Stay safe, stay ethical, and follow the evidence.**
