# 🦸 Superpowers on GitHub Copilot

> 把 GitHub Copilot 从代码补全工具变成一支**有纪律的工程团队** —— 基于 [Superpowers](https://github.com/obra/superpowers) 方法论。

[![在 GitHub Codespaces 中打开](https://github.com/codespaces/badge.svg)](https://codespaces.new/turbo998/Superpowers-on-GitHub-Copilot?quickstart=1)

## 这是什么？

一个 **30 分钟可跑通的 POC Demo**，融合三层能力：

| 层级 | 内容 | 实现方式 |
|------|------|----------|
| 🧠 **方法论** | Superpowers 工作流 | 头脑风暴 → 计划 → TDD → 执行 → 审查 |
| 🤖 **载具** | GitHub Copilot Agent Mode | 自定义指令 + 专属 Agent 角色 |
| ☁️ **平台** | Azure | Container Apps / App Service 部署 |

**用 Superpowers 之前：** 你输入提示 → Copilot 猜你要什么 → 你修半天。

**用 Superpowers 之后：** Copilot 先问清楚需求 → 写计划 → 先写测试 → 再实现 → 自审代码 → 部署上线。

## 快速开始

### 方式一：Codespaces（推荐）

1. 点击上方 "在 GitHub Codespaces 中打开" 徽章
2. 等待 devcontainer 构建（约 2 分钟）
3. 打开 Copilot Chat → 切换到 Agent Mode
4. 试试：`@workspace 帮我构建一个工单系统的 REST API，支持增删改查`

### 方式二：本地 VS Code

```bash
git clone https://github.com/turbo998/Superpowers-on-GitHub-Copilot.git
cd Superpowers-on-GitHub-Copilot
code .
```

## 项目结构

```
.
├── .github/
│   ├── copilot-instructions.md    # 🧠 Copilot 灵魂 + 规则
│   └── copilot/
│       └── agents/                # 🎭 专属 Agent 角色
│           ├── architect.md       #    方案架构师
│           ├── deployer.md        #    Azure 部署专家
│           ├── reviewer.md        #    代码质量审查员
│           ├── security.md        #    安全红队
│           └── tester.md          #    TDD 测试工程师
├── skills/                        # 📚 Superpowers 技能（适配 Copilot）
│   ├── brainstorming.md           #    头脑风暴
│   ├── writing-plans.md           #    撰写计划
│   ├── test-driven-development.md #    测试驱动开发
│   ├── systematic-debugging.md    #    系统化调试
│   └── azure-deploy.md            #    Azure 部署
├── demo/                          # 🎬 30 分钟演示脚本
│   ├── scenario-1-build-api.md    #    场景1：从零构建 API
│   ├── scenario-2-debug-prod.md   #    场景2：调试生产问题
│   └── scenario-3-deploy-azure.md #    场景3：部署到 Azure
├── sample-app/                    # 🎯 演示项目：工单服务 API
│   ├── package.json
│   ├── src/
│   └── tests/
├── .devcontainer/
│   └── devcontainer.json
└── README.md
```

## 5 个 Agent

| Agent | 角色 | 使用场景 |
|-------|------|----------|
| `@architect` | 方案架构师 | 启动新功能或新服务时 |
| `@tester` | 测试工程师 | 写代码之前（TDD 红-绿-重构）|
| `@reviewer` | 代码审查员 | 实现完成后、合并之前 |
| `@security` | 安全红队 | 部署之前 |
| `@deployer` | 部署专家 | 上线到 Azure |

## Superpowers 工作流

```
  💡 想法
    ↓
  🧠 @architect 头脑风暴 → 明确需求
    ↓
  📋 撰写计划（2-5 分钟一个任务，含文件路径和验证步骤）
    ↓
  🧪 @tester 先写失败的测试（RED）
    ↓
  💻 写最少的代码让测试通过（GREEN）
    ↓
  🔄 重构
    ↓
  🔍 @reviewer 审查代码质量
    ↓
  🛡️ @security 安全红队审查
    ↓
  🚀 @deployer 部署到 Azure
```

## 演示场景

### 场景 1：从零构建 REST API（15 分钟）
使用完整 Superpowers 流程，从零到一构建可测试、经审查的工单服务 API。

### 场景 2：调试生产问题（10 分钟）
系统化调试，根因分析 —— 不瞎猜，不乱试。

### 场景 3：部署到 Azure（5 分钟）
安全审查 + Container Apps 一键部署。

👉 详细脚本见 [`demo/`](./demo/)

## 灵感来源

- [Superpowers](https://github.com/obra/superpowers)（Jesse Vincent）—— 让 AI Agent 真正靠谱的方法论
- [Agent Harness Engineering Workshop](https://github.com/turbo998/Agent-Harness-Engineering-on-Azure-and-GitHub-Copilot) —— 我们的 120 分钟深度 Workshop，讲解 4 层 Harness 模型（Rule → Soul → Role → Tool）

## 许可证

MIT
