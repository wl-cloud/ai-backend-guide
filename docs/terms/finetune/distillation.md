---
title: 蒸馏（Distillation）
description: 蒸馏是什么、如何用大模型"教"小模型，让小模型更轻更快
---

# 蒸馏（Distillation）

::: tip 一句话定义
蒸馏（Distillation）是用一个大模型（教师）的输出去训练一个小模型（学生），让小模型学会大模型的能力，从而用更低的成本和延迟获得接近的效果。
:::

## 详细解释

大模型能力强但贵、慢。蒸馏的思路：

1. 用"教师模型"对一批数据生成输出（往往是软标签/概率分布，而不只是标准答案）。
2. 用这些输出去训练"学生模型"（更小）。
3. 学生模型学会模仿教师的行为。

这样得到的"小模型"，在特定任务上能接近大模型，但推理更快、成本更低。很多"蒸馏小模型"（如 GPT-4o-mini 类、各家的 mini 版）都用了类似思路。

## 生活化类比

蒸馏像**名师带徒弟**：老师（大模型）把解题思路和判断过程教给徒弟（小模型），徒弟不必像老师那么"博学"，但在这类题上也能答得八九不离十。

## 代码示例

```python
# 蒸馏：用教师模型的输出训练学生（示意，训练框架省略）
teacher_outputs = teacher_model.generate(dataset)   # 教师生成软标签
student_model.train(dataset, labels=teacher_outputs) # 学生模仿
```

## 常见误区

- ❌ 「蒸馏 = 简单压缩」→ 关键是学习教师的"输出分布"，而不只是复制答案。
- ❌ 「蒸馏的小模型能全面比肩大模型」→ 通常只在特定任务上接近，泛化能力仍弱。
- ❌ 「蒸馏一定要自己训」→ 直接用厂商已蒸馏好的 mini 模型更省事。

## 相关词条

- [微调 Fine-tuning](/terms/finetune/fine-tuning.md) · [LLM](/terms/model/llm.md) · [成本优化](/terms/llmops/cost-optimization.md)

## 延伸阅读

- [知识蒸馏原论文（Hinton 等）](https://arxiv.org/abs/1503.02531)
- [InstructGPT 论文（SFT + RLHF 对齐）](https://arxiv.org/abs/2203.02155)
