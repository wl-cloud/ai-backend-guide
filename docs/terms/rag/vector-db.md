---
title: 向量数据库（Vector Database）
description: 向量数据库是什么、为什么 RAG 需要一个能按相似度检索的存储
---

# 向量数据库（Vector Database）

::: tip 一句话定义
向量数据库是专门存储和检索"向量"的数据库：给定一个查询向量，它能快速找出最相似的若干个向量（近似最近邻检索），是 RAG 的存储底座。
:::

## 详细解释

普通数据库按"精确匹配"查（`WHERE name = '张三'`）。但向量检索要的是"相似度"——找出和查询最像的内容，这靠专门的数据结构和索引（如 HNSW）来实现。

向量数据库核心能力：

- **写入**：存向量 + 原始文本（元数据）。
- **检索**：按相似度返回 Top-K，并给出相似度分数。
- **过滤**：结合元数据过滤（如"只要 2024 年的文档"）。

常见选型：开源的 Milvus、Qdrant、Chroma、Weaviate；云上的 Pinecone、阿里云/腾讯云的向量检索服务。小项目甚至可用内存方案（如 FAISS）。

## 生活化类比

普通数据库像**按书名精确找书的目录**；向量数据库像**按"内容相似度"找书的智能推荐**——你说个大概意思，它把最相关的几本递给你。

## 代码示例

```python
import chromadb
client = chromadb.Client()
col = client.create_collection("docs")
col.add(ids=["1"], documents=["什么是 RAG"], embeddings=[vec])
res = col.query(query_embeddings=[qvec], n_results=3)   # 返回最相似的 3 条
```

## 常见误区

- ❌ 「向量数据库就是存数字的普通库」→ 它靠 ANN 索引做相似检索，普通数据库没有这个能力。
- ❌ 「只存向量就行」→ 还要存原文和元数据，否则检索回来也不知道内容。
- ❌ 「越贵越好」→ 小规模用 FAISS/Chroma 就够，别过早引入重型集群。

## 相关词条

- [Embedding](/terms/rag/embedding.md) · [RAG](/terms/rag/rag.md) · [混合检索](/terms/rag/hybrid-search.md)

## 延伸阅读

- [Qdrant 向量数据库文档](https://qdrant.tech/documentation/)
- [Chroma 向量数据库文档](https://docs.trychroma.com/)
- [FAISS：Facebook 向量检索库](https://github.com/facebookresearch/faiss)
