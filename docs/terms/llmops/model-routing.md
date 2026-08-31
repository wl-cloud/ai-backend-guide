---
title: 模型路由（Model Routing）
description: 模型路由是什么、如何按任务和预算自动选择最合适的模型
---

# 模型路由（Model Routing）

::: tip 一句话定义
模型路由（Model Routing）是根据请求的特征（难度、类型、预算等）自动把请求分发到最合适的模型——简单任务用便宜的小模型，复杂任务用强模型。
:::

## 详细解释

不是所有问题都需要最强的模型。模型路由做一个"分流器"：

- **按难度**：简单问题 → 便宜快模型；难问题 → 强模型。
- **按类型**：代码任务 → 擅长代码的模型；翻译 → 翻译模型。
- **按预算/优先级**：VIP 用户 → 强模型；普通用户 → 标准模型。
- **容灾**：某供应商挂了，自动切备用模型。

好处：在效果和成本之间取得平衡，通常能显著省钱而不明显降质。

## 生活化类比

模型路由像**医院分诊台**：感冒去普通门诊（小模型），重症去专家号（强模型），而不是每个人都挂最贵的专家号。

## 代码示例

```python
def route(question):
    if is_simple(question):          # 用一个轻量分类器判断难度
        return "gpt-4o-mini"
    return "gpt-4o"

model = route(question)
resp = client.chat.completions.create(model=model, messages=[...])
```

## 常见误区

- ❌ 「一律用最强模型最省心」→ 成本可能高数倍，效果未必更好。
- ❌ 「路由规则拍脑袋」→ 要靠评测数据验证"简单/复杂"的判断是否靠谱。
- ❌ 「路由只按价格」→ 还要考虑延迟、质量、供应商稳定性。

## 相关词条

- [成本优化](/terms/llmops/cost-optimization.md) · [负载均衡](/terms/arch/load-balancing.md) · [推理](/terms/model/inference.md)

## 延伸阅读

- 各厂商模型路由 / 语义路由实践
