---
title: 对齐（SFT / RLHF）
description: 对齐是什么、如何让模型"更听话、更有用、更安全"
---

# 对齐（SFT / RLHF）

::: tip 一句话定义
对齐（Alignment）是让模型的输出更符合人类期望的过程——更有用、更诚实、更安全。主要通过 SFT（监督微调）和 RLHF（基于人类反馈的强化学习）实现。
:::

## 详细解释

预训练完的模型"知识渊博但未必听话"，可能说错话、答非所问甚至输出有害内容。对齐就是再训练它：

- **SFT（Supervised Fine-Tuning，监督微调）**：用"人工标注的高质量问答对"训练，让模型学会"该怎么答"。
- **RLHF（Reinforcement Learning from Human Feedback）**：让人对模型的不同回答打分，用强化学习让模型倾向生成高分（更符合人类偏好）的回答。

这是 ChatGPT 等对话模型"好用"的关键一步。

## 生活化类比

SFT 像**岗前培训**（拿标准答案教他正确做法）；RLHF 像**绩效考核 + 调教**（根据用户打分，不断纠正他"什么回答更好"）。

## 代码示例

```python
# 对齐训练数据样例（SFT 的问答对，JSONL 格式）
{"messages": [
    {"role": "user", "content": "怎么快速入门 AI 后端？"},
    {"role": "assistant", "content": "建议先搞懂 LLM 调用、RAG、Agent 三个核心概念……"}]}
```

## 常见误区

- ❌ 「对齐就是微调」→ SFT/RLHF 是微调的具体形式，目标是"符合人类偏好"，不只学任务。
- ❌ 「对齐能根除幻觉」→ 对齐降低有害输出，但无法彻底消除事实错误。
- ❌ 「后端开发要自己做对齐」→ 绝大多数场景直接用厂商已对齐的模型即可。

## 相关词条

- [微调 Fine-tuning](/terms/finetune/fine-tuning.md) · [幻觉 Hallucination](/terms/eval/hallucination.md) · [LLM](/terms/model/llm.md)

## 延伸阅读

- OpenAI：InstructGPT / RLHF 论文
