---
title: 评测（Evaluation）
description: 评测是什么、如何用一套题目客观衡量 AI 应用的质量
---

# 评测（Evaluation）

::: tip 一句话定义
评测（Evaluation）是用一套标准题目和指标，客观衡量 AI 应用输出质量的过程。它是判断"改得好不好"的唯一依据，而不是靠感觉。
:::

## 详细解释

AI 应用的输出质量没有"对错"那么非黑即白，所以需要评测：

- **评测集（Eval Set）**：一批有代表性的"输入 + 期望输出/参考答案"。
- **指标（Metrics）**：准确率、相关性、忠实度、事实一致性、延迟、成本等。
- **自动化**：每次改 Prompt、换模型、调 RAG，都跑一遍评测集，看分数涨跌。

常见做法：写评测集 → 跑基线 → 每次改动跑回归 → 用分数驱动迭代。这是"评估驱动开发"的核心（见[评估驱动开发](/guides/eval-driven.md)）。

## 生活化类比

评测像**考试 + 成绩单**：不考试，你永远不知道学生（应用）到底学会没有、这次改动是进步还是退步。

## 代码示例

```python
# 简单评测：对评测集逐个打分，汇总
scores = []
for item in eval_set:
    answer = app.answer(item["question"])
    scores.append(judge(item["reference"], answer))   # 用模型或规则打分
print(f"平均分：{sum(scores) / len(scores):.2f}")
```

## 常见误区

- ❌ 「看几条例子就算评测」→ 样本太少没统计意义，要成体系、能复现。
- ❌ 「评测一次就够」→ 每次改动都要回归，否则效果悄悄变差都不知道。
- ❌ 「只测准确率」→ 还要测忠实度（是否胡编）、延迟、成本等多维度。

## 相关词条

- [幻觉 Hallucination](/terms/eval/hallucination.md) · [LLMOps](/terms/llmops/llmops.md) · [评估驱动开发](/guides/eval-driven.md)

## 延伸阅读

- [RAGAS：RAG 评测框架文档](https://docs.ragas.io/)
- [TruthfulQA：衡量模型回答真实性](https://arxiv.org/abs/2109.07958)
