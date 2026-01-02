# DOGE Europe Agents

This directory contains specialized agents for the DOGE Europe investigation platform, organized into two categories.

## Directory Structure

```
agents/
├── README.md (this file)
├── coding-agents/          # Software development agents
│   ├── code-reviewer.md
│   ├── debugger.md
│   ├── docs-writer.md
│   ├── orchestrator.md
│   ├── refactorer.md
│   ├── security-auditor.md
│   └── test-architect.md
└── doge-investigation-agents/  # Government accountability agents
    ├── document-researcher.md
    ├── financial-tracker.md
    ├── fraud-investigator.md
    ├── media-monitor.md
    ├── network-mapper.md
    ├── source-analyzer.md
    └── timeline-builder.md
```

## Agent Categories

### 🛠️ Coding Agents
**Location:** [`coding-agents/`](./coding-agents/)

*Software development, testing, and code quality agents*

- **[code-reviewer.md](./coding-agents/code-reviewer.md)** - Expert code review specialist for quality, security, and maintainability
- **[debugger.md](./coding-agents/debugger.md)** - Debugging and troubleshooting specialist
- **[docs-writer.md](./coding-agents/docs-writer.md)** - Technical documentation writer
- **[orchestrator.md](./coding-agents/orchestrator.md)** - Multi-agent workflow coordinator
- **[refactorer.md](./coding-agents/refactorer.md)** - Code refactoring and optimization specialist
- **[security-auditor.md](./coding-agents/security-auditor.md)** - Security vulnerability assessment and auditing
- **[test-architect.md](./coding-agents/test-architect.md)** - Test design and testing strategy specialist

### 🔍 DOGE Investigation Agents
**Location:** [`doge-investigation-agents/`](./doge-investigation-agents/)

*Government accountability, transparency, and investigative research agents*

- **[document-researcher.md](./doge-investigation-agents/document-researcher.md)** - Belgian government document retrieval and analysis
- **[financial-tracker.md](./doge-investigation-agents/financial-tracker.md)** - Budget analysis and fiscal accountability tracking
- **[fraud-investigator.md](./doge-investigation-agents/fraud-investigator.md)** - Financial irregularities and corruption pattern analysis
- **[media-monitor.md](./doge-investigation-agents/media-monitor.md)** - News tracking and media sentiment analysis for Belgian politics
- **[network-mapper.md](./doge-investigation-agents/network-mapper.md)** - Political relationship and influence network mapping
- **[source-analyzer.md](./doge-investigation-agents/source-analyzer.md)** - Source verification and credibility assessment
- **[timeline-builder.md](./doge-investigation-agents/timeline-builder.md)** - Chronological event tracking and timeline construction

## Usage

Each agent is defined with:
- **Name**: Unique identifier for invoking the agent
- **Description**: Agent's purpose and when to use it
- **Tools**: Available tools the agent can use
- **Model**: Claude model variant (sonnet/opus/haiku)
- **Skills**: Additional capabilities or workflows

## Invoking Agents

Agents can be invoked using the Claude Code CLI or SDK:

```bash
# Example: Run fraud investigation on Brussels case
claude agent run fraud-investigator --context "Brussels coalition formation crisis"

# Example: Code review before commit
claude agent run code-reviewer --files src/
```

## Development

When creating new agents:
1. Use the existing agent format (YAML frontmatter + markdown)
2. Categorize appropriately (Coding vs. DOGE Investigation)
3. Specify required tools and model
4. Document clear use cases in the description
5. Update this README with the new agent

## Agent Design Principles

**Coding Agents:**
- Focus on software quality and development workflow
- Automate repetitive code tasks
- Enhance code reliability and security
- Support CI/CD and testing processes

**DOGE Investigation Agents:**
- Support transparency and accountability research
- Specialize in Belgian political/institutional context
- Verify sources and maintain investigative rigor
- Follow DOGE Europe ethical guidelines (see ETHICS.md)

## Related Documentation

- [ETHICS.md](../ETHICS.md) - Ethical guidelines for investigations
- [investigations/](../investigations/) - Active investigation cases
- [web/](../web/) - DOGE Europe public web platform
