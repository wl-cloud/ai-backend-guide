---
title: 提示与交互
description: 提示与交互模块 —— 与模型「对话」的艺术，控制输入输出的第一手段
---

# 提示与交互

::: tip 一句话定位
提示与交互是「与模型对话」的艺术：如何写提示词、如何约束输出、如何流式返回，是成本最低、见效最快的优化手段。
:::

## 这个模块包括什么

- **Prompt（提示词）**：发给模型的输入，模型据此生成回答。
- **System Prompt**：设定角色、规则、输出格式的系统提示词。
- **Few-shot**：用几个示例教会模型输出格式。
- **流式输出（Streaming）**：边生成边返回，改善等待体验。
- **工具调用（Function Calling）**：让模型请求调用某个函数。
- **结构化输出**：约束模型返回固定格式的 JSON。
- **上下文注入**：把资料、历史、工具结果拼进 Prompt。

## 在 AI 后端开发中的作用

模型本身是"死的"，它的表现几乎完全由你喂进去的内容决定。这个模块解决的是：

1. **怎么问得准**（Prompt、System Prompt、Few-shot）—— 直接决定回答质量。
2. **怎么拿到结构化结果**（结构化输出、工具调用）—— 让程序能可靠解析。
3. **怎么让体验和效率更好**（流式输出、上下文注入）—— 提升响应体感、喂足依据。

大部分问题，先在这里优化就够了，不必一上来就上 RAG、Agent 或微调。

## 词条导航

<div class="term-nav" style="--acc:#0891b2">
  <a class="term-btn" href="/terms/prompt/prompt"><span class="cn">提示词</span><span class="en">Prompt</span></a>
  <a class="term-btn" href="/terms/prompt/system-prompt"><span class="cn">系统提示词</span><span class="en">System Prompt</span></a>
  <a class="term-btn" href="/terms/prompt/few-shot"><span class="cn">少样本提示</span><span class="en">Few-shot</span></a>
  <a class="term-btn" href="/terms/prompt/streaming"><span class="cn">流式输出</span><span class="en">Streaming</span></a>
  <a class="term-btn" href="/terms/prompt/function-calling"><span class="cn">工具调用</span><span class="en">Function Calling</span></a>
  <a class="term-btn" href="/terms/prompt/structured-output"><span class="cn">结构化输出</span><span class="en">Structured Output</span></a>
  <a class="term-btn" href="/terms/prompt/context-injection"><span class="cn">上下文注入</span><span class="en">Context Injection</span></a>
</div>

## 相关模块

- [模型与推理](/terms/model/index.md) · [RAG 与检索](/terms/rag/index.md) · [Agent 智能体](/terms/agent/index.md)
