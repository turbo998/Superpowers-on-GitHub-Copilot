# 🦸 Superpowers on GitHub Copilot

> Turn GitHub Copilot from a code autocompleter into a **disciplined engineering team** — powered by the [Superpowers](https://github.com/obra/superpowers) methodology.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/turbo998/Superpowers-on-GitHub-Copilot?quickstart=1)

## What Is This?

A **30-minute demo-ready POC** that combines:

| Layer | What | How |
|-------|-------|------|
| 🧠 **Methodology** | Superpowers workflow | Brainstorm → Plan → TDD → Execute → Review |
| 🤖 **Harness** | GitHub Copilot Agent Mode | Custom instructions + specialized agents |
| ☁️ **Platform** | Azure | Container Apps / App Service deployment |

**Before Superpowers:** You type a prompt → Copilot guesses → you fix the mess.

**After Superpowers:** Copilot asks clarifying questions → writes a plan → tests first → implements → reviews its own work → deploys.

## Quick Start

### Option 1: Codespaces (Recommended)

1. Click the "Open in GitHub Codespaces" badge above
2. Wait for the devcontainer to build (~2 min)
3. Open Copilot Chat → Agent Mode
4. Try: `@workspace Build me a REST API for a ticket system with CRUD operations`

### Option 2: Local VS Code

```bash
git clone https://github.com/turbo998/Superpowers-on-GitHub-Copilot.git
cd Superpowers-on-GitHub-Copilot
code .
```

## Project Structure

```
.
├── .github/
│   ├── copilot-instructions.md    # 🧠 Soul + Rules for Copilot
│   └── copilot/
│       └── agents/                # 🎭 Specialized agent roles
│           ├── architect.md       #    Solution Architect
│           ├── deployer.md        #    Azure Deployment Expert
│           ├── reviewer.md        #    Code Quality Reviewer
│           ├── security.md        #    Security Red Team
│           └── tester.md          #    TDD Test Engineer
├── skills/                        # 📚 Superpowers skills (adapted for Copilot)
│   ├── brainstorming.md
│   ├── writing-plans.md
│   ├── test-driven-development.md
│   ├── systematic-debugging.md
│   └── azure-deploy.md
├── demo/                          # 🎬 30-min demo scenarios
│   ├── scenario-1-build-api.md
│   ├── scenario-2-debug-prod.md
│   └── scenario-3-deploy-azure.md
├── sample-app/                    # 🎯 Demo target: Ticket Service API
│   ├── package.json
│   ├── src/
│   └── tests/
├── .devcontainer/
│   └── devcontainer.json
└── README.md
```

## The 5 Agents

| Agent | Role | When to Use |
|-------|------|-------------|
| `@architect` | Designs system architecture, makes tech decisions | Starting a new feature or service |
| `@tester` | Writes tests first, enforces TDD red-green-refactor | Before any implementation |
| `@reviewer` | Reviews code for quality, patterns, maintainability | After implementation, before merge |
| `@security` | Red-team analysis, OWASP checks, threat modeling | Before deployment |
| `@deployer` | Azure deployment, IaC, CI/CD pipeline | Ship to production |

## The Superpowers Workflow

```
  💡 Idea
    ↓
  🧠 @architect brainstorms → refines requirements
    ↓
  📋 Plan written (2-5 min tasks, file paths, verification)
    ↓
  🧪 @tester writes failing tests (RED)
    ↓
  💻 Implement minimal code to pass (GREEN)
    ↓
  🔄 Refactor
    ↓
  🔍 @reviewer checks quality
    ↓
  🛡️ @security red-team review
    ↓
  🚀 @deployer ships to Azure
```

## Demo Scenarios

### Scenario 1: Build a REST API (15 min)
From zero to a tested, reviewed Ticket Service API using the full Superpowers workflow.

### Scenario 2: Debug a Production Issue (10 min)
Systematic debugging with root cause analysis — no random guessing.

### Scenario 3: Deploy to Azure (5 min)
Container Apps deployment with the deployer agent.

👉 See detailed scripts in [`demo/`](./demo/)

## Inspired By

- [Superpowers](https://github.com/obra/superpowers) by Jesse Vincent — the methodology that makes AI agents actually good
- [Agent Harness Engineering Workshop](https://github.com/turbo998/Agent-Harness-Engineering-on-Azure-and-GitHub-Copilot) — our 120-min deep-dive workshop on the 4-layer harness model

## 中文说明

👉 [中文版 README](./zh/README.md)

## License

MIT
