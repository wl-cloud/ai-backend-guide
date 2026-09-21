---
title: 微调（Fine-tuning）
description: 微调是什么、和 RAG 什么区别、什么时候该用
---

# 微调（Fine-tuning）

::: tip 一句话定义
微调（Fine-tuning）是在预训练好的大模型基础上，用你自己的小数据集继续训练，让模型在特定任务上表现更好、更符合你的风格。
:::

## 详细解释

大模型已经「预训练」过通用知识。微调就是拿你的一批「输入 → 理想输出」样本，再训练它几轮，让它学会你的专属任务或语气。

常见的轻量方案是 **LoRA**：不重新训练全部参数，只在模型旁挂一小块可训练参数，成本低、速度快，是当前微调的主流做法。

**微调 vs RAG** 的选择：

| 对比项 | 微调 | RAG |
|---|---|---|
| 解决什么 | 学「怎么做 / 什么风格」 | 补「最新 / 私有知识」 |
| 数据 | 需要标注好的训练样本 | 只需文档，切成块 |
| 成本 | 训练要算力 | 只需存储和检索 |
| 更新 | 重新训练才更新 | 更新文档即可 |

## 生活化类比

微调像给一个**老练的厨师做专项集训**：他已经会做菜，你拿你家的菜谱和口味偏好再「特训」几轮，他就更懂你的口味。而 RAG 是给他一本**随时能翻的最新菜谱**。

## 代码示例

```python
# 提交一个微调任务（示意）
job = client.fine_tuning.jobs.create(
    training_file="file-xxx",   # 你的训练数据（JSONL）
    model="gpt-4o-mini",
)
# 微调完成后，用新的模型名调用
resp = client.chat.completions.create(model="ft:gpt-4o-mini:xxx",
    messages=[{"role": "user", "content": "..."}])
```

## 常见误区

- ❌ 「微调能替代 RAG 补知识」→ 微调学的是模式，不是可靠的「知识存储」，新知识还是靠 RAG。
- ❌ 「先微调再说」→ 先试 Prompt 工程和 RAG，够用就别上微调，它成本高、维护重。
- ❌ 「数据越多越好」→ 几十到几百条高质量样本往往就够，脏数据比少数据更伤。

## 相关词条

- [LLM](/terms/model/llm.md) · [RAG](/terms/rag/rag.md) · [LLMOps](/terms/llmops/llmops.md)

## 延伸阅读

- [LoRA 原论文：Low-Rank Adaptation](https://arxiv.org/abs/2106.09685)
- [InstructGPT 论文（SFT + RLHF 对齐）](https://arxiv.org/abs/2203.02155)
