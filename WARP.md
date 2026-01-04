# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

DOGE Europe is a Claude Code plugin (not a traditional software project) that provides specialized AI agents, skills, commands, and hooks for investigating political fraud and corruption in Belgium. This is a research assistant tool designed for investigative journalism and civic transparency work.

**Key Distinction**: This repository contains configuration files and documentation for Claude Code, not a runnable application with build/test/deploy commands.

## Architecture

### Plugin Structure

The plugin follows Claude Code's plugin architecture with four main components:

1. **Agents** (`agents/` directory) - Specialized AI personas for different investigation types
2. **Skills** (`skills/` directory) - Domain knowledge modules
3. **Commands** (`commands/` directory) - Investigation workflow modes triggered by `/doge:*` slash commands
4. **Hooks** (`hooks/` directory) - Automation scripts that run at various lifecycle points

Configuration is centralized in `.claude-plugin/plugin.json` which registers all agents, skills, commands, and hooks.

### Investigation Workflow Modes

The plugin provides four specialized investigation modes (accessed via commands):

- **`/doge:deep-dive`** - Comprehensive investigation requiring exhaustive multi-source research, network mapping, and detailed documentation. Use for complex corruption cases requiring airtight evidence.
- **`/doge:rapid-check`** - Quick fact-checking for single claims. Outputs structured verdicts (TRUE/FALSE/MIXED/UNVERIFIABLE) with 2-3 sources.
- **`/doge:connect-dots`** - Relationship and network mapping between entities
- **`/doge:follow-money`** - Financial trail investigation

Each command file defines specific investigation methodologies, output formats, and which specialized agents to use.

### Agents System

Seven specialized investigation agents defined in `agents/`:
- `fraud-investigator` - Financial irregularities and corruption analysis
- `source-analyzer` - Information verification and fact-checking
- `network-mapper` - Entity relationship mapping
- `document-researcher` - Public records deep-diving
- `timeline-builder` - Chronological event sequencing
- `financial-tracker` - Money flow tracing
- `media-monitor` - Belgian political media analysis

### Hooks System

Automated workflows configured in `hooks/hooks.json` with Python/Bash scripts in `hooks/scripts/`:

**Pre-tool hooks:**
- `protect-files.py` - Protects sensitive investigation data before edits
- `security-check.py` - Security validation before file operations
- `log-commands.sh` - Logs all bash commands for audit trail

**Post-tool hooks:**
- `format-on-edit.py` - Formats files after editing

**Lifecycle hooks:**
- `validate-environment.py` - Session startup validation
- `validate-prompt.py` - User prompt validation for ethical compliance
- `notify-input.sh` / `notify-complete.sh` - Investigation progress notifications

## Development Commands

### Plugin Testing
```bash
# Run Claude Code with this plugin
cd /Users/jonasboury/Github/doge-europe
claude --plugin-dir .
```

### Running Hook Scripts Directly
```bash
# Test protection script
python3 hooks/scripts/protect-files.py

# Test environment validation
python3 hooks/scripts/validate-environment.py

# Test command logging
bash hooks/scripts/log-commands.sh
```

### Dependencies
```bash
# Install Node.js dependencies (for markdown rendering)
npm install
```

## Key Files and Configuration

- **`.claude-plugin/plugin.json`** - Main plugin manifest. Add new agents/skills/commands here.
- **`hooks/hooks.json`** - Hook automation configuration. Defines when scripts run.
- **`ETHICS.md`** - Comprehensive research ethics guidelines covering privacy, accuracy, source protection, and Belgian law compliance. Essential reading for understanding the tool's purpose and limitations.
- **`PERMISSIONS.md`** - Claude Code permission templates for `.claude/settings.local.json`

## Ethical Considerations

This is an investigative research tool governed by strict ethical guidelines in `ETHICS.md`:

- **Public Interest Test**: Investigations must serve legitimate public transparency goals, not harassment or partisan attacks
- **Multi-Source Verification**: All major claims require 3+ independent sources in Deep Dive mode
- **Privacy Protection**: Belgian GDPR compliance required; private information minimized
- **Source Protection**: Confidential sources never revealed; whistleblower protection
- **Right of Reply**: Subjects given opportunity to respond before publication
- **Truth Over Narrative**: Present contradictory evidence; acknowledge uncertainty

Hook scripts enforce some ethical guardrails (e.g., `validate-prompt.py` checks prompts for ethical compliance).

## Adding New Components

### New Investigation Agent
Create `agents/new-agent.md`:
```markdown
---
name: agent-name
description: What this agent does. Use when [triggers].
tools: Read, Write, WebSearch, WebFetch
model: sonnet
---

[Agent instructions and methodologies]
```
Register in `.claude-plugin/plugin.json` under `agents` array.

### New Domain Skill
Create `skills/domain-name/SKILL.md`:
```markdown
---
name: skill-name
description: Knowledge about [domain]. Use for [research types].
---

[Domain knowledge and methodologies]
```
Register in `.claude-plugin/plugin.json` under `skills` array.

### New Investigation Command
Create `commands/command-name.md`:
```markdown
---
description: Workflow description
---

[Command instructions and investigation approach]
```
Register in `.claude-plugin/plugin.json` under `commands` array with namespace `doge`.

### New Hook Script
Create script in `hooks/scripts/`, then add to `hooks/hooks.json` under appropriate lifecycle event (PreToolUse, PostToolUse, SessionStart, etc.).

## Belgian Context

The plugin specializes in Belgian political structures:
- Federal/regional governance (Flanders, Wallonia, Brussels)
- Multi-party parliamentary system
- Belgian privacy laws and GDPR compliance
- FOI request procedures
- Belgian journalistic codes and press freedom
- Both Dutch and French language sources

## Investigation Workflow Pattern

Typical investigation flow when using this plugin:

1. **Initiation**: User selects investigation mode with `/doge:*` command
2. **Research Phase**: Plugin uses appropriate specialized agents and skills
3. **Verification**: Multi-source cross-referencing with source-analyzer
4. **Documentation**: Hooks automatically log sources, maintain audit trails
5. **Output**: Structured reports per command specifications (Deep Dive = comprehensive 11-section report; Rapid Check = verdict + brief evidence)

## Common Pitfalls

- Don't confuse this with a traditional software project - there's no application to "build" or "deploy"
- Investigation data in `investigations/` directory is gitignored for privacy
- Hook scripts use `${CLAUDE_PLUGIN_ROOT}` environment variable for paths
- Belgian investigations require both Dutch and French source checking
- Deep Dive mode deliberately prioritizes thoroughness over speed
