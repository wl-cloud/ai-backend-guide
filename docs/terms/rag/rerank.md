---
title: 重排（Rerank）
description: 重排是什么、为什么向量检索后还要再排一次序
---

# 重排（Rerank）

::: tip 一句话定义
重排（Rerank）是在向量检索拿到一批候选后，用一个更精细的模型再算一遍"相关性"，把最相关的排到最前面。它解决的是"向量检索召回不准"的问题。
:::

## 详细解释

向量检索用"语义距离"找 Top-K，速度快但精度有限——有时最相关的文档向量距离反而不是最近。重排模型（Cross-Encoder）会把"问题"和"每个候选文档"成对地精细打分，重新排序。

典型流程：

1. 向量检索召回 50~100 条候选（快，粗筛）。
2. 重排模型对候选逐一精确打分（慢，精排）。
3. 取重排后的前 3~5 条给 LLM 生成。

这样既保住了速度，又提升了最终送入模型的内容质量。

## 生活化类比

向量检索像**海选**（快速挑出一批可能相关的人），重排像**复试**（逐个仔细评估，定出最终名次）。

## 代码示例

```python
# 先向量检索，再用重排模型精排（示意）
candidates = vector_db.search(qvec, top_k=50)
reranked = rerank_model.rerank(query=question, documents=candidates, top_n=5)
context = "\n".join(r.text for r in reranked)
```

## 常见误区

- ❌ 「向量检索够了，不用重排」→ 召回多、精排准，两者结合才是标配。
- ❌ 「重排所有候选」→ 重排慢，先粗筛到几十条再做，否则延迟扛不住。
- ❌ 「重排只对文本有效」→ 重排模型对代码、多模态等场景要专门选型。

## 相关词条

- [RAG](/terms/rag/rag.md) · [混合检索](/terms/rag/hybrid-search.md) · [Embedding](/terms/rag/embedding.md)

## 延伸阅读

- Cohere：Rerank 文档
