---
title: RAG（检索增强生成）
description: RAG 是什么、为什么要用它解决模型「知识过时」和「幻觉」问题
---

# RAG（检索增强生成）

::: tip 一句话定义
RAG（Retrieval-Augmented Generation）是「先检索、再生成」的技术：从外部知识库里找出相关资料，拼进 Prompt 一起喂给模型，让回答有依据、不瞎编。
:::

## 详细解释

LLM 的知识在训练完成后就「冻结」了，既会过时，也不知道你公司内部的最新资料。RAG 的思路是：**回答前，先从你的知识库里检索相关内容，作为「参考资料」塞给模型**，让模型基于资料回答。

一条典型的 RAG 链路分五步：

1. **分块（Chunking）**：把文档切成小块——推荐「递归切分 + 重叠窗口」：按段落、句子层级递归往下切，块与块之间保留重叠，避免切断语义。
2. **向量化（Embedding）**：把每块文字转成向量。
3. **存储**：向量存入向量数据库。
4. **检索（Retrieval）**：用户提问转成向量，找最相似的几块。
5. **生成（Generation）**：检索结果 + 问题一起给模型，生成带引用的回答。

## 生活化类比

RAG 就是**开卷考试**：模型是考生，知识库是课本。答题前先翻书找到相关段落（检索），再照着书作答（生成），而不是闭卷硬编。

## 代码示例

```python
# 分块：递归切分 + 重叠窗口（LangChain）
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,       # 每块约 500 字符
    chunk_overlap=50,     # 相邻块重叠 50 字符，避免切断语义
    separators=["\n\n", "\n", "。", "！", "？", "；", " ", ""],  # 递归分隔符
)
chunks = splitter.split_text(document)
```

```python
# 简化版 RAG：检索 + 拼 Prompt + 生成
docs = vector_db.search(query_embedding, top_k=3)   # 1. 检索
context = "\n".join(doc.text for doc in docs)

prompt = f"""请仅根据以下资料回答问题，资料没有就说明「不知道」。

【资料】
{context}

【问题】{question}"""
resp = client.chat.completions.create(model="gpt-4o-mini",
    messages=[{"role": "user", "content": prompt}])
```

## 常见误区

- ❌ 「RAG 能完全消灭幻觉」→ 它大幅降低，但检索不准或资料本身就错时，仍会出错。
- ❌ 「切块越大越好」→ 块太大检索精度差，太小又丢上下文，需要按内容类型调优。
- ❌ 「检索到就万事大吉」→ 还需要重排（Rerank）挑出最相关的，而不是简单取 Top-K。

## 相关词条

- [LLM](/terms/model/llm.md) · [Prompt](/terms/prompt/prompt.md) · [Agent](/terms/agent/agent.md) · [幻觉](/terms/eval/hallucination.md)

## 延伸阅读

- [RAG 原论文：Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)
- [RAG 综述：Retrieval-Augmented Generation for LLMs](https://arxiv.org/abs/2312.10997)
- [LangChain：RAG 实战教程](https://python.langchain.com/docs/tutorials/rag/)
