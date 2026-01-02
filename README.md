# DOGE Europe - Belgian Political Fraud Research Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-v1.0.33+-blue.svg)](https://code.claude.com)

An AI-powered research assistant specialized in uncovering fraud, corruption, and scams at the political level in Belgium. Built on Claude Code with specialized agents, research skills, and investigation workflows.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage Examples](#usage-examples)
- [Configuration](#configuration)
- [Extending the Plugin](#extending-the-plugin)
- [Plugin Structure](#plugin-structure)
- [Requirements](#requirements)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/doge-europe.git

# Run Claude Code with the plugin
cd doge-europe
claude --plugin-dir .
```

## Features

### Specialized Investigation Agents

| Agent                    | Purpose                                           | Use Cases                                          |
| ------------------------ | ------------------------------------------------- | -------------------------------------------------- |
| `fraud-investigator`     | Analyze financial irregularities and corruption   | Campaign finance, public contracts, lobbying       |
| `source-analyzer`        | Verify and cross-reference information sources    | Fact-checking, document authentication             |
| `network-mapper`         | Map relationships between entities                | Political networks, shell companies, connections   |
| `document-researcher`    | Deep dive into public documents and records       | FOI requests, public records, leaked documents     |
| `timeline-builder`       | Construct chronological event sequences           | Tracking scandals, corruption cases over time      |
| `financial-tracker`      | Trace money flows and financial patterns          | Follow the money, offshore accounts, tax evasion   |
| `media-monitor`          | Monitor and analyze Belgian political media       | News coverage, propaganda detection, bias analysis |

### Research Domain Skills

- **belgian-politics** - Understanding Belgian federal/regional political structures, parties, and processes
- **investigative-journalism** - OSINT techniques, source verification, fact-checking methodologies
- **financial-forensics** - Analyzing financial records, tracking money flows, detecting anomalies
- **legal-framework** - Belgian anti-corruption laws, transparency regulations, FOI procedures
- **data-analysis** - Statistical analysis, pattern recognition, data visualization for investigations
- **european-context** - EU regulations, cross-border corruption, European political networks

### Investigation Workflow Commands

Switch investigation modes with specialized slash commands:

```
/doge:deep-dive       # Comprehensive investigation - exhaustive research and analysis
/doge:rapid-check     # Quick fact-check - verify specific claims or allegations
/doge:connect-dots    # Relationship mapping - find connections between entities
/doge:follow-money    # Financial investigation - track funding and transactions
```

### Research Automation Hooks

| Hook                      | Trigger       | Action                                         |
| ------------------------- | ------------- | ---------------------------------------------- |
| **Source verification**   | Web research  | Cross-references claims with multiple sources  |
| **Data protection**       | Edit/Write    | Protects sensitive investigation data          |
| **Citation tracking**     | Research      | Auto-logs sources and references               |
| **Bias detection**        | Analysis      | Flags potential bias in sources or analysis    |
| **Legal compliance**      | Session start | Validates ethical research boundaries          |
| **Investigation logging** | All actions   | Maintains detailed audit trail                 |
| **Alert notification**    | Key findings  | Notifies when critical evidence is found       |
| **Progress tracking**     | Long research | Tracks investigation progress and next steps   |

## Configuration

### Permissions

See [PERMISSIONS.md](./PERMISSIONS.md) for recommended permissions to add to your project's `.claude/settings.local.json`.

### MCP Servers

See [mcp-servers-template.md](./mcp-servers-template.md) for common MCP server configurations (GitHub, Sentry, databases, etc.).

## Usage Examples

### Investigating Campaign Finance

```
User: Investigate the funding sources for [Political Party X]'s recent campaign
Claude: [Uses financial-tracker agent to analyze public records, donations, and expenditures]
```

### Fact-Checking Political Claims

```
User: Verify the claim that [Politician Y] said [controversial statement]
Claude: [Uses source-analyzer to cross-reference media sources, official records, and transcripts]
```

### Mapping Political Networks

```
User: Map the connections between [Company A] and government contracts
Claude: [Uses network-mapper to trace relationships, board members, and contract awards]
```

### Deep Dive Investigation

```
User: /doge:deep-dive
User: Investigate potential conflicts of interest in the [specific policy decision]
Claude: [Comprehensive mode - exhaustive research across multiple sources and databases]
```

### Quick Fact Check

```
User: /doge:rapid-check
User: Did [Minister Z] attend the meeting with [Lobbyist Group]?
Claude: [Quick verification mode - rapid check of schedules, media reports, official records]
```

## Extending the Research Assistant

### Add Custom Investigation Agents

Create `.md` files in the `agents/` directory:

```markdown
---
name: my-investigator
description: Specialized investigation focus. Use when [triggers].
tools: Read, Write, WebSearch, WebFetch
model: sonnet
---

[Agent instructions and investigation methodologies here]
```

### Add Custom Research Skills

Create subdirectories in `skills/` with a `SKILL.md` file:

```markdown
---
name: my-research-domain
description: Knowledge about [domain]. Use for [research types].
---

[Domain knowledge, methodologies, and best practices here]
```

### Add Custom Investigation Commands

Create `.md` files in the `commands/` directory:

```markdown
---
description: Specialized investigation workflow
---

[Command instructions and investigation approach here]
```

## Project Structure

```
doge-europe/
├── .claude-plugin/
│   ├── plugin.json          # Plugin manifest
│   └── marketplace.json     # Marketplace metadata
├── agents/                   # Investigation specialists
│   ├── fraud-investigator.md
│   ├── source-analyzer.md
│   ├── network-mapper.md
│   ├── document-researcher.md
│   ├── timeline-builder.md
│   ├── financial-tracker.md
│   └── media-monitor.md
├── skills/                   # Research domain knowledge
│   ├── belgian-politics/
│   ├── investigative-journalism/
│   ├── financial-forensics/
│   ├── legal-framework/
│   ├── data-analysis/
│   └── european-context/
├── commands/                 # Investigation workflows
│   ├── deep-dive.md
│   ├── rapid-check.md
│   ├── connect-dots.md
│   └── follow-money.md
├── hooks/
│   ├── hooks.json           # Research automation config
│   └── scripts/             # Automation scripts
├── investigations/          # Case files (gitignored)
├── PERMISSIONS.md           # Permission templates
├── ETHICS.md                # Research ethics guidelines
└── README.md
```

## Requirements

- Claude Code v1.0.33 or later
- Python 3.8+ (for data analysis and automation scripts)
- Internet connection (for web research and source verification)
- Recommended: Access to Belgian public records databases
- Recommended: News API subscriptions for media monitoring

## Ethical Guidelines

This research assistant is designed for legitimate investigative journalism, academic research, and civic transparency. Users must:

- Respect privacy laws and ethical journalism standards
- Verify all claims with multiple credible sources
- Distinguish between allegations and proven facts
- Avoid defamation and false accusations
- Comply with Belgian and EU data protection regulations (GDPR)
- Use information responsibly and in the public interest

See [ETHICS.md](./ETHICS.md) for detailed guidelines.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This tool is for research and transparency purposes only. All findings should be verified through proper investigative journalism channels before publication. The creators assume no liability for misuse of this tool.

## License

MIT - see [LICENSE](./LICENSE) for details.
