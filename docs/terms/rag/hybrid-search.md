---
title: 混合检索（Hybrid Search）
description: 混合检索是什么、如何把关键词检索和向量检索结合起来
---

# 混合检索（Hybrid Search）

::: tip 一句话定义
混合检索是同时用"关键词检索（BM25）"和"向量检索"两条路召回结果，再把两者合并排序，兼顾"精确匹配"和"语义理解"。
:::

## 详细解释

两种检索各有短板：

- **关键词检索（BM25）**：按字面匹配，适合人名、编号、专有名词，但理解不了同义改写。
- **向量检索**：按语义匹配，能懂"近义表达"，但可能漏掉精确的关键词。

混合检索把两条路的召回结果合并，用打分融合（如 RRF，倒数排名融合）排出综合顺序，取长补短。

对包含大量代码、型号、编号、人名的知识库，混合检索通常比纯向量检索明显更准。

## 生活化类比

混合检索像**同时派两个人找人**：一个记住长相（语义），一个只认身份证号（关键词），两个人的线索合并，找到的概率最高。

## 代码示例

```python
# 混合检索：两路召回 + RRF 融合（示意）
bm25_hits = keyword_index.search(query)      # 关键词路
vector_hits = vector_db.search(qvec, top_k=50)  # 向量路
merged = reciprocal_rank_fusion([bm25_hits, vector_hits])  # RRF 融合
```

## 常见误区

- ❌ 「向量检索一定比关键词强」→ 精确匹配场景（编号、专名）关键词更可靠。
- ❌ 「两者结果直接拼一起」→ 要用 RRF 等算法融合，而不是简单相加分数。
- ❌ 「混合检索很复杂」→ 多数向量库（如 Weaviate、Milvus）已内置混合检索能力。

## 相关词条

- [向量数据库](/terms/rag/vector-db.md) · [重排 Rerank](/terms/rag/rerank.md) · [RAG](/terms/rag/rag.md)

## 延伸阅读

- [RAG 综述：Retrieval-Augmented Generation for LLMs](https://arxiv.org/abs/2312.10997)
- [Qdrant 向量数据库文档](https://qdrant.tech/documentation/)
