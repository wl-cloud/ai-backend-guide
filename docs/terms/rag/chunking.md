---
title: 分块（Chunking）
description: 分块是什么、为什么要用递归切分 + 重叠窗口把文档切成小块
---

# 分块（Chunking）

::: tip 一句话定义
分块（Chunking）是把长文档切成一个个小块的过程，块会被分别向量化后存入知识库。分块质量直接决定 RAG 检索的准确率。
:::

## 详细解释

文档往往很长，直接向量化会丢失细节、检索不精准。所以要先分块。主流做法是**递归切分 + 重叠窗口**：

- **递归切分**：按"段落 → 换行 → 句子 → 字符"的优先级逐级切，尽量在语义边界断开。
- **重叠窗口**：相邻块之间保留一段重叠（overlap），避免一句话被切断、上下文丢失。

关键参数：

- **chunk_size**：块大小。太大检索不精准，太小丢失上下文，常用 256~1000 字符。
- **chunk_overlap**：重叠量，通常是 chunk_size 的 10%~20%。

## 生活化类比

分块像**把一整本书裁成一页页**：既要每页信息完整，又要在页边留一点上一页的尾巴，避免翻页时断了上下文。

## 代码示例

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,       # 每块约 500 字符
    chunk_overlap=50,     # 相邻块重叠 50 字符
    separators=["\n\n", "\n", "。", "！", "？", "；", " ", ""],
)
chunks = splitter.split_text(document)
```

## 常见误区

- ❌ 「块越大越好」→ 太大检索不准、容易被无关内容稀释；太小又丢了上下文。
- ❌ 「一刀切按固定字数」→ 应优先按段落/句子等语义边界切，再配重叠窗口。
- ❌ 「切完就固定不变」→ 不同类型文档（代码/表格/长文）需要不同分块策略。

## 相关词条

- [RAG](/terms/rag/rag.md) · [Embedding](/terms/rag/embedding.md) · [重排 Rerank](/terms/rag/rerank.md)

## 延伸阅读

- [LangChain：RAG 实战教程](https://python.langchain.com/docs/tutorials/rag/)
- [RAG 综述：Retrieval-Augmented Generation for LLMs](https://arxiv.org/abs/2312.10997)
