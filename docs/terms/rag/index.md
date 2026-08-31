---
title: RAG 与检索
description: RAG 与检索模块 —— 给模型「补知识」的引擎，知识问答系统的核心
---

# RAG 与检索

::: tip 一句话定位
RAG 与检索是给模型「补知识」的引擎：把最新、私有的资料检索出来喂给模型，解决模型知识过时和幻觉问题，是知识问答系统的核心。
:::

## 这个模块包括什么

- **RAG（检索增强生成）**：先检索、再生成的完整技术。
- **Embedding（向量嵌入）**：把文字变成能算相似度的向量。
- **向量数据库**：存储和检索向量的专用数据库。
- **分块（Chunking）**：把文档切成语义完整的小块。
- **重排（Rerank）**：对检索结果做精细的相关性排序。
- **混合检索**：关键词 + 向量两路检索融合。
- **语义缓存**：按语义命中缓存，省钱提速。
- **知识库**：RAG 的资料源，分块向量化后的存储。

## 在 AI 后端开发中的作用

模型训练完就"定格"了，既不知道你的内部资料，也不知道最新动态。RAG 让模型"开卷考试"：

1. **补知识**（RAG、知识库、Embedding）—— 让回答基于你的真实资料。
2. **提精度**（分块、重排、混合检索）—— 让检索回来的内容更准。
3. **降成本**（语义缓存）—— 复用相似问题的答案，省调用费。

这是从"会聊天"走向"能落地做业务"的关键一步。

## 词条导航

<div class="term-nav" style="--acc:#0d9488">
  <a class="term-btn" href="/terms/rag/rag"><span class="cn">检索增强生成</span><span class="en">RAG</span></a>
  <a class="term-btn" href="/terms/rag/embedding"><span class="cn">向量嵌入</span><span class="en">Embedding</span></a>
  <a class="term-btn" href="/terms/rag/vector-db"><span class="cn">向量数据库</span><span class="en">Vector Database</span></a>
  <a class="term-btn" href="/terms/rag/chunking"><span class="cn">分块</span><span class="en">Chunking</span></a>
  <a class="term-btn" href="/terms/rag/rerank"><span class="cn">重排</span><span class="en">Rerank</span></a>
  <a class="term-btn" href="/terms/rag/hybrid-search"><span class="cn">混合检索</span><span class="en">Hybrid Search</span></a>
  <a class="term-btn" href="/terms/rag/semantic-cache"><span class="cn">语义缓存</span><span class="en">Semantic Cache</span></a>
  <a class="term-btn" href="/terms/rag/knowledge-base"><span class="cn">知识库</span><span class="en">Knowledge Base</span></a>
</div>

## 相关模块

- [提示与交互](/terms/prompt/index.md) · [评测与安全](/terms/eval/index.md) · [LLMOps 与成本](/terms/llmops/index.md)
