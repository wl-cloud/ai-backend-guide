---
title: 知识库（Knowledge Base）
description: 知识库是什么、RAG 的"资料源"是怎么组织和管理的
---

# 知识库（Knowledge Base）

::: tip 一句话定义
知识库（Knowledge Base）是 RAG 系统里存储"参考资料"的地方：把文档、FAQ、网页等经过分块、向量化后组织起来，供检索时查询。
:::

## 详细解释

知识库不是把文件原样丢进去，而是一条加工流水线的产物：

1. **接入**：导入文档（PDF、Word、网页、数据库……）。
2. **解析**：抽取文字、表格，去掉噪声。
3. **分块**：切成语义完整的小块（见[分块](/terms/rag/chunking.md)）。
4. **向量化**：每块转成向量（见[Embedding](/terms/rag/embedding.md)）。
5. **入库**：向量 + 原文 + 元数据存进[向量数据库](/terms/rag/vector-db.md)。

知识库的质量（内容全不全、切得好不好、更新及时不及时）直接决定 RAG 回答质量。

## 生活化类比

知识库像**给模型配的一间资料室**：资料要分类、编目（分块+向量化）、方便检索，而不是把文件随手一扔。

## 代码示例

```python
def add_document(doc):
    chunks = splitter.split_text(doc.text)
    for i, c in enumerate(chunks):
        vec = embed(c)
        vector_db.add(id=f"{doc.id}-{i}", text=c, vector=vec,
                      metadata={"source": doc.source, "date": doc.date})
```

## 常见误区

- ❌ 「知识库 = 一堆文件」→ 必须经过解析、分块、向量化才能被 RAG 检索。
- ❌ 「建一次就不用管」→ 知识会过时，要做增量更新、过期清理。
- ❌ 「资料越多越好」→ 噪声资料会拉低检索质量，宁缺毋滥、做好清洗。

## 相关词条

- [RAG](/terms/rag/rag.md) · [分块](/terms/rag/chunking.md) · [向量数据库](/terms/rag/vector-db.md)

## 延伸阅读

- 各 RAG 框架（LlamaIndex / LangChain）的知识库构建文档
