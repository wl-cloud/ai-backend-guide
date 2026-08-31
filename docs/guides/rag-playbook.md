---
title: RAG 落地方法论
description: 从分块到评测，一步步把 RAG 做到能用的完整链路
---

# RAG 落地方法论

::: tip 这篇讲什么
RAG 不是"接个向量库"就完事，而是一条需要逐环调优的链路。这篇按**分块 → 向量化 → 检索 → 重排 → 生成 → 评测**的顺序，讲每一步怎么做、有哪些坑。
:::

## 一、整体链路

一条 RAG 链路由五步组成，任何一环拉胯，整体效果都会打折：

```
文档 → 分块 → 向量化 → 存向量库 → 检索 → 重排 → 拼 Prompt → 生成
```

下面逐环展开。

## 二、分块：递归切分 + 重叠窗口

分块决定"检索的颗粒度"。主流做法是**递归切分 + 重叠窗口**：

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,        # 每块约 500 字符
    chunk_overlap=50,      # 重叠 50 字符，避免切断语义
    separators=["\n\n", "\n", "。", "！", "？", "；", " ", ""],  # 按语义边界切
)
chunks = splitter.split_text(document)
```

**要点**：
- 优先在段落、句子边界断开，而不是硬按字数。
- `chunk_overlap` 通常取 `chunk_size` 的 10%~20%。
- 不同内容（代码、表格、长文）用不同策略，别一刀切。

## 三、向量化：选对 Embedding 模型

把每块文字转成向量（见 [Embedding](/terms/rag/embedding.md)）：

```python
resp = client.embeddings.create(model="text-embedding-3-small", input=chunks)
vectors = [d.embedding for d in resp.data]
```

**要点**：
- 选支持你内容语言的 Embedding 模型。
- 向量维度影响存储和速度，按需选。
- 模型换了，向量要全量重建。

## 四、检索：混合检索 + 召回足够多

纯向量检索会漏掉精确关键词。建议**混合检索**（关键词 BM25 + 向量），并多召回一些候选：

```python
bm25_hits = keyword_index.search(query)
vector_hits = vector_db.search(qvec, top_k=50)
merged = reciprocal_rank_fusion([bm25_hits, vector_hits])  # RRF 融合
```

**要点**：召回阶段宁多勿少（先粗筛），精度交给下一步重排。

## 五、重排：精挑最相关的几条

用重排模型对候选精确打分，取前 3~5 条：

```python
reranked = rerank_model.rerank(query=question, documents=merged, top_n=5)
context = "\n".join(r.text for r in reranked)
```

**要点**：重排慢，只对几十条候选做；别把 500 条全塞进去。

## 六、生成：约束模型"照着资料答"

拼 Prompt 时，用硬约束抑制幻觉：

```python
prompt = f"""请仅根据以下资料回答问题；资料中没有的，请明确说「我不知道」，禁止编造。

【资料】
{context}

【问题】{question}"""
```

**要点**：明确"仅依据资料 + 不知道就说不知道"，这是防幻觉的关键。

## 七、评测：用数据说话

RAG 做完不等于做好。要建评测集，测这几个维度：

- **检索命中率**：检索到的内容里，有没有真正相关的。
- **答案忠实度**：回答是否忠于资料（还是编的）。
- **答案相关性**：回答是否回答了问题。

每次改分块、换模型、调 Prompt，都跑一遍评测回归。详见[评估驱动开发](/guides/eval-driven.md)。

## 八、常见坑汇总

| 坑 | 后果 | 解法 |
|----|------|------|
| 分块太大 | 检索不准 | 按语义边界切 + 重叠 |
| 只做向量检索 | 漏关键词 | 混合检索 |
| 召回太少 | 漏掉答案 | 召回 50~100 再重排 |
| 不做重排 | 无关内容污染 | 加 Rerank |
| 不约束模型 | 幻觉 | Prompt 硬约束 + 兜底 |
| 不评测 | 改了变差都不知道 | 建评测集回归 |

## 小结

RAG 的每一环都要调优，且**最终效果由最弱的一环决定**。按"分块→检索→重排→生成→评测"逐步打磨，用评测集验证每一步的改进。

## 相关词条

- [分块](/terms/rag/chunking.md) · [混合检索](/terms/rag/hybrid-search.md) · [重排](/terms/rag/rerank.md) · [RAG 拒答/兜底](/guides/rag-fallback.md)
