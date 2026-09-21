---
title: Prompt（提示词）
description: Prompt 是什么、为什么写好提示词是 AI 应用的第一步
---

# Prompt（提示词）

::: tip 一句话定义
Prompt 是你发给大模型的输入文本——包括问题、指令、上下文等，模型基于它来生成回答。写好 Prompt 是 AI 应用开发性价比最高的第一步。
:::

## 详细解释

对后端开发者来说，Prompt 不只是「用户问的一句话」，而是你**组装出来的完整上下文**。一个成熟的 AI 应用，Prompt 通常包含：

- **System Prompt（系统提示词）**：设定角色、规则、输出格式，比如「你是一名客服，用中文简洁回答」。
- **User Message（用户消息）**：用户实际输入的内容。
- **上下文**：检索到的资料、历史对话、工具返回结果等，拼进去让模型「有依据」。

Prompt 的质量直接决定回答质量，所以有「Prompt Engineering（提示词工程）」这门手艺。

## 生活化类比

Prompt 就像给新来的实习生写**任务说明书**：背景、要求、格式、边界交代得越清楚，交付结果越靠谱；只丢一句「帮我弄一下」，结果往往跑偏。

## 代码示例

```python
# System Prompt 设定角色 + User Message 提问
messages = [
    {"role": "system", "content": "你是一名后端架构师，用中文简洁回答，不超过 100 字。"},
    {"role": "user", "content": "什么是流式输出？"},
]
resp = client.chat.completions.create(model="gpt-4o-mini", messages=messages)
```

## 常见误区

- ❌ 「System Prompt 是硬约束，模型一定遵守」→ 它是「软指令」，可能被用户绕过去（提示注入）。
- ❌ 「Prompt 越长越好」→ 太长会稀释重点、增加成本，还容易超出上下文窗口。
- ❌ 「只写一句 Prompt 就完事」→ 生产级应用要靠 Few-shot 示例、结构化输出约束来稳定效果。

## 相关词条

- [LLM](/terms/model/llm.md) · [RAG](/terms/rag/rag.md) · [Agent](/terms/agent/agent.md)

## 延伸阅读

- [Prompt Engineering Guide（提示工程指南）](https://www.promptingguide.ai/)
- [Anthropic 提示工程指南](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
