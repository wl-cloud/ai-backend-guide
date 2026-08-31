---
title: 模型与推理
description: 模型与推理模块 —— AI 后端的知识地基，理解模型是什么、怎么调用、怎么衡量
---

# 模型与推理

::: tip 一句话定位
模型与推理是 AI 后端的「地基」：理解模型是什么、怎么被调用、成本和上限在哪，是看懂一切上层概念的前提。
:::

## 这个模块包括什么

- **LLM（大语言模型）**：AI 应用的「大脑」，一切能力的基础。
- **Token（词元）**：模型处理文本的最小单位，计费和上下文的基准。
- **上下文窗口**：模型一次能处理的 token 总量上限。
- **推理（Inference）**：模型生成结果的过程，你调 API 时发生的事。
- **温度 / Top-p**：控制输出随机性的两个旋钮。
- **多模态**：模型同时理解文本、图像、音频等。

## 在 AI 后端开发中的作用

AI 后端的本质是「调用模型 + 组织上下文 + 返回结果」。这个模块回答三个最基础的问题：

1. **模型是什么、怎么用**（LLM、推理）—— 决定你如何调 API、如何衡量延迟和吞吐。
2. **成本和上限在哪**（Token、上下文窗口）—— 决定你怎么控制成本、避免超窗口。
3. **输出怎么控制**（温度、多模态）—— 决定输出的稳定性与能力边界。

不搞懂这些，后面的提示、RAG、Agent 都是空中楼阁。

## 词条导航

<div class="term-nav" style="--acc:#4f46e5">
  <a class="term-btn" href="/terms/model/llm"><span class="cn">大语言模型</span><span class="en">LLM</span></a>
  <a class="term-btn" href="/terms/model/token"><span class="cn">词元</span><span class="en">Token</span></a>
  <a class="term-btn" href="/terms/model/context-window"><span class="cn">上下文窗口</span><span class="en">Context Window</span></a>
  <a class="term-btn" href="/terms/model/inference"><span class="cn">推理</span><span class="en">Inference</span></a>
  <a class="term-btn" href="/terms/model/temperature"><span class="cn">温度 / Top-p</span><span class="en">Temperature</span></a>
  <a class="term-btn" href="/terms/model/multimodal"><span class="cn">多模态</span><span class="en">Multimodal</span></a>
</div>

## 相关模块

- [提示与交互](/terms/prompt/index.md) · [微调与训练](/terms/finetune/index.md) · [LLMOps 与成本](/terms/llmops/index.md)
