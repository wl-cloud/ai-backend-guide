---
title: 工具调用（Function Calling）
description: 工具调用是什么、如何让模型决定调用哪个函数并传参
---

# 工具调用（Function Calling）

::: tip 一句话定义
工具调用（Function Calling）是让模型在需要时"请求调用"某个函数的能力：模型输出结构化的"要调哪个函数、传什么参数"，由你的后端真正去执行，再把结果返回给模型。
:::

## 详细解释

模型本身不能查数据库、发邮件、调 API。工具调用让它"决定"要调什么，但**真正执行的是你的代码**。流程是：

1. 你定义工具（函数名 + 描述 + 参数 schema）。
2. 模型判断需要调用，返回 `tool_calls`（函数名 + 参数 JSON）。
3. 你的后端执行函数，拿到结果。
4. 把结果作为 `tool` 消息发回模型，模型再生成最终回答。

这是 [Agent](/terms/agent/agent.md) 的技术底座。

## 生活化类比

工具调用像**让模型当"点菜员"**：它不能自己下厨，但能准确写下"要一道红烧肉"（函数+参数），由厨师（你的代码）去做。

## 代码示例

```python
tools = [{"type": "function", "function": {
    "name": "get_weather", "description": "查询城市天气",
    "parameters": {"type": "object",
        "properties": {"city": {"type": "string"}}, "required": ["city"]}}}]

resp = client.chat.completions.create(model="gpt-4o-mini",
    messages=[{"role": "user", "content": "北京今天天气？"}], tools=tools)

tc = resp.choices[0].message.tool_calls  # 模型请求调用 get_weather(city="北京")
```

## 常见误区

- ❌ 「模型会自己执行函数」→ 模型只"请求"调用，执行必须由你的后端完成。
- ❌ 「参数可以随便传」→ 模型可能传错参数，要做校验、重试和兜底。
- ❌ 「工具越多越好」→ 工具太多会让模型选错，应精简并写清楚描述。

## 相关词条

- [Agent](/terms/agent/agent.md) · [结构化输出](/terms/prompt/structured-output.md) · [ReAct](/terms/agent/react.md)

## 延伸阅读

- [Toolformer：让模型学会调用工具](https://arxiv.org/abs/2302.04761)
- [MCP 官方文档：Model Context Protocol](https://modelcontextprotocol.io/introduction)
- [LangChain 官方文档](https://python.langchain.com/docs/introduction/)
