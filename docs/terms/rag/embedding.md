---
title: Embedding（向量嵌入）
description: Embedding 是什么、如何把文字变成能计算相似度的向量
---

# Embedding（向量嵌入）

::: tip 一句话定义
Embedding（向量嵌入）是把文字、图片等转成一串数字（向量）的技术。语义相近的内容，向量在空间里也挨得近，于是就能用"距离"衡量"相似度"。
:::

## 详细解释

机器不会直接"理解"文字，但它能处理数字。Embedding 模型把一段文本压缩成一串固定长度的浮点数（如 1536 维），这段数字编码了文本的语义。

关键特性：**语义相近 → 向量相近**。所以：

- "今天天气真好" 和 "阳光明媚的一天" → 向量很接近；
- "今天天气真好" 和 "怎么修电脑" → 向量很远。

这是 RAG 检索、语义搜索、聚类、推荐的基础。

## 生活化类比

Embedding 像**给每句话一个 GPS 坐标**：意思相近的句子，坐标也相邻；要找"和这句话最像的内容"，就是找坐标最近的点。

## 代码示例

```python
from openai import OpenAI
client = OpenAI()
resp = client.embeddings.create(model="text-embedding-3-small",
    input=["什么是 RAG？"])
vector = resp.data[0].embedding   # 一个浮点数列表
print(len(vector))                # 维度，如 1536
```

## 常见误区

- ❌ 「Embedding 越大越准」→ 维度高不必然更准，要在准确率、存储、速度间权衡。
- ❌ 「中英文可以随便混用同一种向量」→ 要用支持对应语言的 Embedding 模型，效果才稳定。
- ❌ 「Embedding 是一次性的」→ 模型换了、文档变了，向量要重新生成。

## 相关词条

- [向量数据库](/terms/rag/vector-db.md) · [RAG](/terms/rag/rag.md) · [多模态](/terms/model/multimodal.md)

## 延伸阅读

- [Sentence-BERT：句向量原论文](https://arxiv.org/abs/1908.10084)
- [DPR：稠密向量检索原论文](https://arxiv.org/abs/2004.04906)
