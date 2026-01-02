# DOGE Europe Setup Complete

Your Belgian political fraud research assistant is now fully configured!

## What Was Created

### Core Documentation
- ✅ **README.md** - Updated with Belgian political research focus
- ✅ **ETHICS.md** - Comprehensive ethical guidelines for investigations
- ✅ **investigations/** - Directory for case files (gitignored for security)

### Investigation Agents (7)
Created specialized AI agents for different aspects of investigations:

1. **fraud-investigator.md** - Financial irregularities and corruption analysis
2. **source-analyzer.md** - Fact-checking and source verification
3. **network-mapper.md** - Relationship and connection mapping
4. **document-researcher.md** - Deep document analysis and FOI requests
5. **timeline-builder.md** - Chronological event tracking
6. **financial-tracker.md** - Money trail analysis and financial forensics
7. **media-monitor.md** - Media coverage and bias detection

### Research Skills (2)
Knowledge bases for the AI to draw upon:

1. **belgian-politics/** - Belgian political structures, parties, and context
2. **investigative-journalism/** - OSINT techniques and journalistic methods

### Investigation Workflows (4)
Slash commands for different investigation modes:

1. **/doge:deep-dive** - Comprehensive, exhaustive investigation
2. **/doge:rapid-check** - Quick fact verification
3. **/doge:connect-dots** - Network and relationship mapping
4. **/doge:follow-money** - Financial investigation focus

### Configuration
- ✅ **.claude-plugin/plugin.json** - Plugin configuration
- ✅ **.claude-plugin/marketplace.json** - Plugin metadata

## How to Use

### Running Claude Code with This Plugin

```bash
cd /Users/jonasboury/Github/doge-europe
claude --plugin-dir .
```

### Starting an Investigation

**Example 1: Quick Fact Check**
```
/doge:rapid-check
Did [Politician X] vote for [Bill Y] on [Date]?
```

**Example 2: Deep Dive Investigation**
```
/doge:deep-dive
Investigate the funding sources for [Political Party]'s recent campaign
```

**Example 3: Network Mapping**
```
/doge:connect-dots
Map the connections between [Company A] and [Government Official B]
```

**Example 4: Financial Investigation**
```
/doge:follow-money
Track the money trail for [Public Contract X]
```

### Using Specialized Agents

The agents will activate automatically based on your requests, but you can also invoke them directly:

```
Use the fraud-investigator agent to analyze [campaign finance records]
Use the source-analyzer to verify [this claim]
Use the network-mapper to show connections between [these entities]
```

## Investigation Workflow

### 1. Create a Case File
```
Create a new investigation case file for [topic name]
```

### 2. Gather Information
```
Search for public records about [subject]
Find recent news coverage about [topic]
What official documents exist about [issue]?
```

### 3. Analyze Evidence
```
Analyze these documents for irregularities
Map the network of people involved
Build a timeline of events
Track the financial flows
```

### 4. Verify Claims
```
Verify this claim: [specific allegation]
Cross-reference these sources
Check if this statement is accurate
```

### 5. Generate Reports
```
Create a comprehensive investigation report
Summarize key findings with sources
Generate a network visualization
```

## Key Features

### Belgian Context
- Understands federal/regional government structure
- Knows Flemish and Walloon political dynamics
- Familiar with Belgian political parties
- Knows Belgian public records sources

### Investigation Capabilities
- Multi-source verification
- Document authentication
- Network analysis
- Financial forensics
- Timeline construction
- Media monitoring
- Bias detection

### Ethical Framework
- Source protection
- Privacy respect
- Fact verification
- Public interest focus
- Legal compliance
- Transparency

## Best Practices

### Always:
- ✅ Verify with multiple sources
- ✅ Distinguish facts from allegations
- ✅ Respect privacy boundaries
- ✅ Follow ethical guidelines
- ✅ Document your sources
- ✅ Protect confidential sources

### Never:
- ❌ Publish unverified claims
- ❌ Violate privacy without justification
- ❌ Use for personal vendettas
- ❌ Ignore contradictory evidence
- ❌ Serve purely partisan interests
- ❌ Compromise source confidentiality

## Data Sources

### Belgian Public Records
- Moniteur Belge/Belgisch Staatsblad (official gazette)
- BCE/KBO (company registry)
- Parliamentary records
- Public procurement databases
- Court records

### Media Sources
- VRT NWS (Flemish)
- RTBF (Francophone)
- De Standaard, Le Soir (newspapers)
- Apache, Médor (investigative)

### International Databases
- ICIJ leak databases
- OpenCorporates
- EU procurement (TED)

## Security Recommendations

### Protect Your Research
1. Use encrypted storage for sensitive files
2. Use VPN for sensitive research
3. Use Signal/ProtonMail for source communication
4. Keep investigations/ directory gitignored
5. Remove metadata from shared documents
6. Use secure deletion for discarded files

### Protect Sources
1. Never store source names in files
2. Use encrypted channels only
3. Meet in secure locations
4. Remove identifying information
5. Be prepared for legal pressure

## Legal Considerations

### Know Your Rights
- Belgian press freedom protections
- FOI request procedures
- Journalistic privilege
- Source protection laws
- Defamation law boundaries

### Compliance
- GDPR for personal data
- Belgian privacy laws
- Public access regulations
- Professional journalistic codes

## Getting Help

### Documentation
- **README.md** - Overview and features
- **ETHICS.md** - Ethical guidelines
- **investigations/README.md** - Case file templates
- Individual agent .md files - Specific methodologies

### Ask Claude
```
How do I request documents via FOI in Belgium?
What's the best way to verify this type of claim?
How should I organize this investigation?
What are the red flags in these financial records?
```

## Next Steps

1. **Familiarize yourself** with the ethical guidelines in ETHICS.md
2. **Try a simple investigation** to understand the workflow
3. **Explore each agent** to see their capabilities
4. **Build your first case file** in the investigations/ directory
5. **Learn Belgian political context** from the belgian-politics skill

## Examples to Try

### Example 1: Verify a Political Claim
```
/doge:rapid-check
Verify: Did [Minister X] meet with [Lobbyist Y] on [Date]?
```

### Example 2: Investigate Campaign Finance
```
/doge:follow-money
Analyze the campaign finance disclosures for [Political Party]
Who are the major donors?
Are there any suspicious patterns?
```

### Example 3: Map Political Networks
```
/doge:connect-dots
Map the connections between [Company A] and government officials
Who serves on their board?
Do any officials have financial ties?
```

### Example 4: Track a Scandal
```
/doge:deep-dive
Build a comprehensive timeline of the [Scandal Name] from initial allegations to current status
Include all key events, actors, and evidence
```

## Troubleshooting

### If agents don't activate automatically:
- Explicitly request them: "Use the fraud-investigator agent to..."
- Make sure your request matches their trigger keywords

### If commands don't work:
- Ensure you're using the namespace: /doge:command-name
- Check that Claude was started with --plugin-dir flag

### If you need more specialized skills:
- Request creation of new skills in skills/ directory
- Add them to .claude-plugin/plugin.json

## Contributing

This is your research tool. Customize it:

1. **Add new agents** for specialized investigations
2. **Create new skills** for additional domains
3. **Develop new workflows** for specific investigation types
4. **Improve existing agents** based on experience
5. **Share findings** (while protecting sources!)

## Important Reminders

### This Tool Is For:
- ✅ Legitimate investigative journalism
- ✅ Academic research
- ✅ Civic transparency
- ✅ Holding power accountable
- ✅ Serving the public interest

### This Tool Is NOT For:
- ❌ Harassment or doxxing
- ❌ Defamation
- ❌ Partisan opposition research alone
- ❌ Privacy invasion without public interest
- ❌ Personal vendettas

---

## Ready to Begin!

Your Belgian political fraud research assistant is now ready to help uncover corruption and promote transparency.

**Start with:** `/doge:deep-dive` followed by your investigation topic.

**Remember:** Truth, accuracy, and ethics above all else.

**Good luck with your investigations!**
