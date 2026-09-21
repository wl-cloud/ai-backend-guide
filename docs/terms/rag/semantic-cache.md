---
title: 语义缓存（Semantic Cache）
description: 语义缓存是什么、如何用相似度命中缓存来省钱提速
---

# 语义缓存（Semantic Cache）

::: tip 一句话定义
语义缓存是"按语义"命中的缓存：新问题来了，先看有没有和它意思相近的历史问题，有就直接复用上次答案，从而省掉一次模型调用。
:::

## 详细解释

普通缓存按"完全相同的 key"命中。但用户问法千变万化（"怎么退款" / "如何申请退款"），字面不同、意思相同，普通缓存命中不了。

语义缓存把问题转成向量，用相似度判断是否"问过类似问题"：

1. 新问题 → 向量化。
2. 查缓存里是否有相似向量（相似度超阈值）。
3. 命中 → 直接返回缓存的答案，省一次 LLM 调用；未命中 → 调模型，结果再存入缓存。

适合高频重复、答案相对稳定的场景（客服、FAQ），能显著降本提速。

## 生活化类比

语义缓存像**聪明的客服主管**：发现"这个问题和刚答过的基本一样"，就直接把上次的答案翻出来，不用让下属重新查一遍。

## 代码示例

```python
hit = cache.search(query_embedding, threshold=0.92)   # 语义相似度命中
if hit:
    return hit["answer"]                               # 复用，省一次调用
answer = call_llm(question)
cache.add(query_embedding, question, answer)
return answer
```

## 常见误区

- ❌ 「语义缓存和普通缓存一样」→ 它靠向量相似度命中，能识别"同义改写"。
- ❌ 「阈值越高越好」→ 阈值太高难命中，太低会返回"答非所问"的缓存，要按场景调。
- ❌ 「什么都能缓存」→ 答案会实时变化的场景（如查最新价格）不适合缓存。

## 相关词条

- [Embedding](/terms/rag/embedding.md) · [成本优化](/terms/llmops/cost-optimization.md) · [RAG](/terms/rag/rag.md)

## 延伸阅读

- [GPTCache：语义缓存开源实现](https://github.com/zilliztech/GPTCache)
- [LiteLLM：多模型统一接入与路由](https://docs.litellm.ai/)
