---
title: 上下文注入（Context Injection）
description: 上下文注入是什么、如何把资料、历史、工具结果拼进 Prompt
---

# 上下文注入（Context Injection）

::: tip 一句话定义
上下文注入是把外部信息——检索到的资料、历史对话、工具返回结果、用户画像等——动态拼进 Prompt，让模型"带着依据"回答。
:::

## 详细解释

模型本身只知道训练时的知识。要让它在你的业务里答得准，就要在发请求前，把相关信息"注入"上下文。常见注入内容：

- **RAG 检索结果**：把查到的文档片段拼进去。
- **历史对话**：把最近几轮拼进去，保持连贯。
- **工具结果**：Agent 调完工具后，把结果拼回去。
- **用户画像 / 业务数据**：比如订单信息、会员等级。

上下文注入是 [RAG](/terms/rag/rag.md)、[Agent](/terms/agent/agent.md) 的通用技术手段。注入的质量和数量直接影响效果与成本。

## 生活化类比

上下文注入像**给答题的人递小抄**：把他没背过的资料、之前的对话、刚查到的数据都摆到他面前，让他照着答。

## 代码示例

```python
def build_prompt(question, docs, history):
    context = "\n".join(d["text"] for d in docs)
    return f"""历史对话：
{history}

参考资料：
{context}

问题：{question}"""
```

## 常见误区

- ❌ 「注入越多越好」→ 太多会超窗口、稀释重点、增加成本，要按相关性裁剪。
- ❌ 「注入的内容模型一定信」→ 模型可能忽略或误解，必要时在指令里强调"仅依据资料回答"。
- ❌ 「注入就是简单拼字符串」→ 要注意分隔、去重、排序（最相关的放前面）。

## 相关词条

- [RAG](/terms/rag/rag.md) · [上下文窗口](/terms/model/context-window.md) · [Prompt](/terms/prompt/prompt.md)

## 延伸阅读

- LangChain：Prompt 上下文组装实践
