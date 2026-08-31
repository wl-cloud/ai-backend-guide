---
title: 微调与训练
description: 微调与训练模块 —— 让模型「学会你的专属任务」
---

# 微调与训练

::: tip 一句话定位
微调与训练是让模型「学会你的专属任务和风格」的模块：当 Prompt 和 RAG 不够用时，用你自己的数据继续训练模型。
:::

## 这个模块包括什么

- **微调（Fine-tuning）**：用自己的小数据集继续训练，学专属任务。
- **LoRA**：轻量微调方法，只训练极少量参数。
- **蒸馏（Distillation）**：用大模型"教"小模型，让小的更轻更快。
- **对齐（SFT / RLHF）**：让模型输出更符合人类偏好、更安全。

## 在 AI 后端开发中的作用

大多数场景你不需要训练，但以下情况会用到：

1. **稳定风格与格式**（微调、LoRA）—— Prompt 反复调不好的输出格式。
2. **降低推理成本**（蒸馏）—— 用小模型替代大模型。
3. **提升安全与可用性**（对齐）—— 减少有害输出。

关键判断：**先试 Prompt 和 RAG，够用就别微调**——它成本高、维护重，且微调学的是"模式"，不是可靠的"知识存储"。

## 词条导航

<div class="term-nav" style="--acc:#db2777">
  <a class="term-btn" href="/terms/finetune/fine-tuning"><span class="cn">微调</span><span class="en">Fine-tuning</span></a>
  <a class="term-btn" href="/terms/finetune/lora"><span class="cn">低秩适配</span><span class="en">LoRA</span></a>
  <a class="term-btn" href="/terms/finetune/distillation"><span class="cn">蒸馏</span><span class="en">Distillation</span></a>
  <a class="term-btn" href="/terms/finetune/alignment"><span class="cn">对齐</span><span class="en">SFT · RLHF</span></a>
</div>

## 相关模块

- [模型与推理](/terms/model/index.md) · [RAG 与检索](/terms/rag/index.md) · [LLMOps 与成本](/terms/llmops/index.md)
