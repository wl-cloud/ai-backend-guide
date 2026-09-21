---
title: MCP（模型上下文协议）
description: MCP 是什么、如何用统一协议让模型连接各种工具和数据源
---

# MCP（模型上下文协议）

::: tip 一句话定义
MCP（Model Context Protocol，模型上下文协议）是一个开放标准，让 AI 应用用统一的方式连接各种工具、数据源和服务——类似 AI 世界的"USB 接口"。
:::

## 详细解释

以前要让模型用某个工具，你得为每个工具单独写对接代码，接口五花八门。MCP 定义了统一的"服务器-客户端"协议：

- **MCP Server**：暴露某个工具/数据源（如文件系统、数据库、GitHub）。
- **MCP Client**：AI 应用（如 Claude、各类 Agent）。
- 客户端按统一协议发现并调用服务器的能力。

好处：**一次对接，到处复用**。生态里已有大量现成的 MCP Server，直接接即可，不用重写工具对接层。

## 生活化类比

MCP 像**统一的 USB 标准**：以前每种设备要专门的接口线，现在一个标准口插什么都行。

## 代码示例

```python
# 用 MCP 客户端连接一个 Server 并调用工具（示意）
from mcp import ClientSession
async with stdio_client(server_params) as (read, write):
    async with ClientSession(read, write) as session:
        tools = await session.list_tools()      # 发现工具
        result = await session.call_tool("search", {"q": "RAG"})
```

## 常见误区

- ❌ 「MCP 是某个大厂私有协议」→ 它是开放标准，由 Anthropic 提出并开源，已被广泛支持。
- ❌ 「MCP 和 Function Calling 一回事」→ Function Calling 是模型输出"要调什么"，MCP 是工具对接的统一协议，两者配合使用。
- ❌ 「接了 MCP 就安全了」→ 工具仍可能被滥用，要配合权限和护栏。

## 相关词条

- [Agent](/terms/agent/agent.md) · [工具调用](/terms/prompt/function-calling.md) · [护栏 Guardrails](/terms/eval/guardrails.md)

## 延伸阅读

- [MCP 官方文档：Model Context Protocol](https://modelcontextprotocol.io/introduction)
- [Anthropic 官方文档](https://docs.anthropic.com/en/docs/welcome)
