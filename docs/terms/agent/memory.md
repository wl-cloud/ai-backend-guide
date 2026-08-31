---
title: 记忆（Memory）
description: 记忆是什么、Agent 如何"记住"对话历史和长期信息
---

# 记忆（Memory）

::: tip 一句话定义
记忆（Memory）是 Agent 保存和读取信息的能力，让它能记住对话历史、用户偏好和过往结果，从而在多轮交互中保持连贯、避免重复劳动。
:::

## 详细解释

模型本身是"无状态"的——每次调用都像失忆，除非你把历史拼回去。记忆就是把这些信息管理起来：

- **短期记忆**：当前会话的对话历史，直接拼进上下文。
- **长期记忆**：跨会话的信息（用户偏好、事实），存到外部存储，需要时检索回来。

常见实现：短期记忆靠"把历史 messages 塞进上下文"；长期记忆靠向量库（存摘要/事实）或结构化存储，配合检索注入。

## 生活化类比

短期记忆像**当前谈话的草稿纸**，长期记忆像**随身笔记本**——重要的事记下来，下次翻本子就能想起你是谁、聊过什么。

## 代码示例

```python
# 短期记忆：把历史拼进 messages
messages = [{"role": "system", "content": system_prompt}]
messages += load_recent_history(user_id, k=10)   # 最近 10 轮
messages.append({"role": "user", "content": question})

# 长期记忆：把关键事实写入向量库，下次按需检索
memory_store.add(user_id, "用户偏好简洁回答", embed("用户偏好简洁回答"))
```

## 常见误区

- ❌ 「记忆 = 无限塞历史」→ 上下文有限且要花钱，长对话要摘要或截断。
- ❌ 「长期记忆就是存原文」→ 更常存的是摘要、事实、偏好，按需检索。
- ❌ 「记忆不会过时」→ 长期记忆要更新和清理，否则会答错。

## 相关词条

- [上下文窗口](/terms/model/context-window.md) · [Embedding](/terms/rag/embedding.md) · [Agent](/terms/agent/agent.md)

## 延伸阅读

- LangChain：Memory 模块文档
