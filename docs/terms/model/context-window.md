---
title: 上下文窗口（Context Window）
description: 上下文窗口是什么、为什么它决定了模型一次能"记住"多少内容
---

# 上下文窗口（Context Window）

::: tip 一句话定义
上下文窗口（Context Window）是大模型一次能处理的 token 总量上限，包含你输入的所有内容（提示词、历史对话、检索资料）加上它要生成的输出。
:::

## 详细解释

模型像一个"工作台"，上下文窗口就是工作台的大小。你塞进去的所有东西（System Prompt、历史对话、RAG 检索到的资料、用户问题）都占这个窗口，输出结果也占。

比如某模型上下文窗口是 128K token，那"输入 + 输出"加起来不能超过 128K。超了就会报错，或需要截断/遗忘前面的内容。

对后端开发的关键影响：

- **长对话要压缩**：历史太长时，需要摘要或只保留最近几轮。
- **RAG 要控制检索量**：检索回来的资料不能撑爆窗口。
- **窗口 ≠ 记忆**：窗口越大，模型"这次"能看的内容越多，但不是永久记忆。

## 生活化类比

上下文窗口就像**一次性只能摆下 10 本书的书桌**：你要回答的问题、参考的资料、之前的聊天记录都得放桌上，放不下就得撤掉一部分。

## 代码示例

```python
# 估算当前请求是否接近窗口上限
total_tokens = sum(len(enc.encode(m["content"])) for m in messages)
max_window = 128000
if total_tokens > max_window * 0.9:
    messages = messages[-8:]   # 简单策略：只保留最近 8 轮
```

## 常见误区

- ❌ 「窗口大就能记住一切」→ 窗口是一次性的"工作台"，不是长期记忆；且窗口越大越贵越慢。
- ❌ 「忘了算输出」→ 输出 token 也占窗口，长回答可能因窗口不够而中断。
- ❌ 「塞得越满越好」→ 塞太满会稀释重点、增加成本，还容易让模型忽略关键信息。

## 相关词条

- [Token](/terms/model/token.md) · [LLM](/terms/model/llm.md) · [RAG](/terms/rag/rag.md)

## 延伸阅读

- [Anthropic 官方文档](https://docs.anthropic.com/en/docs/welcome)
- [大语言模型综述（A Survey of LLMs）](https://arxiv.org/abs/2303.18223)
