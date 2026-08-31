---
title: Agent 智能体
description: Agent 智能体模块 —— 让模型「动手干活」，自动化任务的核心
---

# Agent 智能体

::: tip 一句话定位
Agent 智能体是让模型从「问答」升级为「动手干活」的模块：自主规划、调用工具、多步执行，完成一个真实任务。
:::

## 这个模块包括什么

- **Agent（智能体）**：能自主规划 + 调用工具 + 多步执行的 AI 程序。
- **ReAct 模式**：边思考边行动的执行循环。
- **多智能体**：多个各司其职的 Agent 协作完成任务。
- **MCP（模型上下文协议）**：统一连接工具和数据源的标准协议。
- **记忆（Memory）**：让 Agent 记住对话历史和长期信息。

## 在 AI 后端开发中的作用

普通模型只能"说"，Agent 让它能"做"。这个模块解决：

1. **执行真实动作**（Agent、ReAct、工具调用）—— 查数据库、发邮件、调 API。
2. **处理复杂任务**（多智能体）—— 拆解、并行、协作。
3. **保持连贯**（记忆）—— 跨轮次记住上下文和偏好。
4. **统一接入工具**（MCP）—— 一次对接、到处复用。

记住：Agent 是"重武器"，能一次调用解决的就别上 Agent，否则复杂度和成本都会飙升。

## 词条导航

<div class="term-nav" style="--acc:#7c3aed">
  <a class="term-btn" href="/terms/agent/agent"><span class="cn">智能体</span><span class="en">Agent</span></a>
  <a class="term-btn" href="/terms/agent/react"><span class="cn">ReAct 模式</span><span class="en">Reasoning + Acting</span></a>
  <a class="term-btn" href="/terms/agent/multi-agent"><span class="cn">多智能体</span><span class="en">Multi-Agent</span></a>
  <a class="term-btn" href="/terms/agent/mcp"><span class="cn">模型上下文协议</span><span class="en">MCP</span></a>
  <a class="term-btn" href="/terms/agent/memory"><span class="cn">记忆</span><span class="en">Memory</span></a>
</div>

## 相关模块

- [提示与交互](/terms/prompt/index.md) · [架构与工程](/terms/arch/index.md) · [评测与安全](/terms/eval/index.md)
