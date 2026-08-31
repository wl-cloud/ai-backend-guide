---
title: 方法论
description: AI 后端 / 大模型应用开发方法论指南
---

# 方法论

「怎么做」系列：一篇一个主题，是可复用的行动指南，而非概念堆砌。

## 指南目录

<div class="guide-card" style="--acc:#4f46e5">
  <h3>1. 从 0 到 1 做 LLM 应用</h3>
  <p>一个可运行的 MVP 从哪下手、怎么迭代。核心心法：Prompt → RAG → Agent → 微调，从便宜到贵，够用就停。</p>
  <a href="/guides/llm-app-from-zero">开始阅读 →</a>
</div>

<div class="guide-card" style="--acc:#0d9488">
  <h3>2. RAG 落地方法论</h3>
  <p>分块 → 向量化 → 检索 → 重排 → 生成 → 评测的完整链路，每一步怎么做、有哪些坑。</p>
  <a href="/guides/rag-playbook">开始阅读 →</a>
</div>

<div class="guide-card" style="--acc:#ea580c">
  <h3>3. RAG 拒答 / 兜底策略</h3>
  <p>资料里没有的问题，系统该怎么答。核心：置信度阈值 → 分场景兜底 → 提示词硬约束，绝不编造。</p>
  <a href="/guides/rag-fallback">开始阅读 →</a>
</div>

<div class="guide-card" style="--acc:#7c3aed">
  <h3>4. Agent 设计方法论</h3>
  <p>什么时候该用 Agent、什么时候不该用，以及设计时要守的几条原则。</p>
  <a href="/guides/agent-design">开始阅读 →</a>
</div>

<div class="guide-card" style="--acc:#2563eb">
  <h3>5. 评估驱动开发</h3>
  <p>用评测集和指标倒逼应用迭代，让每一次改动都有据可依，而不是靠感觉。</p>
  <a href="/guides/eval-driven">开始阅读 →</a>
</div>

## 建议阅读顺序

- **想快速上手**：先读[从 0 到 1 做 LLM 应用](/guides/llm-app-from-zero.md)。
- **在做知识问答**：重点读 [RAG 落地方法论](/guides/rag-playbook.md) + [RAG 拒答/兜底](/guides/rag-fallback.md)。
- **在做自动化/助手**：读 [Agent 设计方法论](/guides/agent-design.md)。
- **想持续优化**：读 [评估驱动开发](/guides/eval-driven.md)。

> 配合[术语词典](/terms/)一起看，理解更顺畅。
