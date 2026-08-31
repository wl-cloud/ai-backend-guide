---
title: 成本优化（Cost Optimization）
description: 成本优化是什么、如何系统性降低 AI 应用的 token 开销
---

# 成本优化（Cost Optimization）

::: tip 一句话定义
成本优化是通过模型选择、缓存、路由、压缩等手段，系统性地降低 AI 应用的 token 消耗和费用，同时尽量不牺牲质量。
:::

## 详细解释

AI 应用的成本主要来自"输入 + 输出 token × 单价"。优化就是从这几个乘数下手：

- **选对模型**：能用小模型就不用大模型（见[模型路由](/terms/llmops/model-routing.md)）。
- **压缩输入**：精简 Prompt、只注入最相关的上下文、历史对话做摘要。
- **缓存**：语义缓存复用相似问题的答案（见[语义缓存](/terms/rag/semantic-cache.md)）。
- **控制输出**：限制 max_tokens、要求精简回答。
- **批量与错峰**：利用批量、离线任务错峰处理。

关键原则：**先测量（每个请求花了多少 token/钱），再优化**，否则优化是盲目的。

## 生活化类比

成本优化像**家庭理财**：先记账（观测），再砍掉不必要的开销（精简 Prompt）、能复用就复用（缓存）、大件货比三家（选模型）。

## 代码示例

```python
def estimate_cost(model, usage):
    price = {"gpt-4o": (5, 15), "gpt-4o-mini": (0.15, 0.6)}  # 每百万 token 美元
    inp, out = price[model]
    return usage.prompt_tokens / 1e6 * inp + usage.completion_tokens / 1e6 * out
```

## 常见误区

- ❌ 「优化成本 = 牺牲质量」→ 靠路由、缓存、压缩，往往能"又快又好又省"。
- ❌ 「不测量就优化」→ 不知道钱花在哪，优化就是瞎猜。
- ❌ 「只砍输出」→ 输入（上下文）常常是成本大头，精简输入更有效。

## 相关词条

- [模型路由](/terms/llmops/model-routing.md) · [语义缓存](/terms/rag/semantic-cache.md) · [Token](/terms/model/token.md)

## 延伸阅读

- 各厂商 Pricing 页 + 成本优化最佳实践
