---
title: Agent（智能体）
description: Agent 是什么、和普通聊天机器人有什么区别
---

# Agent（智能体）

::: tip 一句话定义
Agent（智能体）是能「自主规划 + 调用工具 + 多步执行」来完成任务的 AI 程序。它不再只是「一问一答」，而是能拆解目标、调用函数/API、观察结果、继续下一步。
:::

## 详细解释

普通聊天是「模型 → 回答」一条线。Agent 则是一个循环：

1. **理解目标**：把用户需求拆成子任务。
2. **选择工具**：决定调用哪个函数/API（搜索、查数据库、发邮件……）。
3. **执行**：调用工具拿到结果。
4. **观察并决策**：根据结果决定继续还是结束。

这个「思考—行动—观察」的循环，常用 **ReAct** 模式实现。其中「工具调用（Function Calling）」是 Agent 的技术底座——模型输出结构化的「要调哪个函数、传什么参数」，后端真正去执行。

## 生活化类比

普通聊天机器人是**接线员**（你问它答）；Agent 是**能自己动手的助理**：你说「帮我查一下这个客户上月订单并总结」，它会自己查数据库、算汇总、写总结，而不是反问你每一步。

## 代码示例

```python
# 工具定义 + 让模型决定调用哪个工具
tools = [{
    "type": "function",
    "function": {
        "name": "search_orders",
        "description": "按客户名查询订单",
        "parameters": {"type": "object",
                       "properties": {"customer": {"type": "string"}},
                       "required": ["customer"]},
    },
}]
resp = client.chat.completions.create(model="gpt-4o-mini",
    messages=[{"role": "user", "content": "查一下张三的订单"}], tools=tools)
# 模型返回 tool_calls，后端据此执行 search_orders("张三")
```

## 常见误区

- ❌ 「所有需求都该做成 Agent」→ 能用一次调用解决的就别上 Agent，复杂度、成本和出错率都会飙升。
- ❌ 「Agent 一定会成功」→ 多步任务每一步都可能出错，需要重试、超时、兜底。
- ❌ 「Agent 能自己『思考』」→ 它只是在循环「生成下一步动作」，没有真正的意识。

## 相关词条

- [LLM](/terms/model/llm.md) · [Prompt](/terms/prompt/prompt.md) · [RAG](/terms/rag/rag.md)

## 延伸阅读

- 论文：ReAct: Synergizing Reasoning and Acting in Language Models
