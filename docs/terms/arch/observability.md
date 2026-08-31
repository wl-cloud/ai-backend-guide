---
title: 可观测性（Observability）
description: 可观测性是什么、如何看清 AI 应用的延迟、成本和质量
---

# 可观测性（Observability）

::: tip 一句话定义
可观测性（Observability）是收集和分析应用运行数据的能力——日志、指标、链路追踪——让你能看清每次 AI 调用"花了多久、花了多少钱、答得怎么样"。
:::

## 详细解释

AI 应用里有很多"看不见"的东西：一次调用走了哪个模型、耗时多少、用了多少 token、检索到了什么、最终质量如何。可观测性就是把它们暴露出来：

- **指标（Metrics）**：延迟、token 数、成本、错误率等可聚合的数字。
- **链路（Tracing）**：一次请求从进来到返回的完整路径（检索→重排→生成）。
- **日志（Logs）**：Prompt、响应、工具调用等原始记录。

专门的 LLM 可观测平台（如 Langfuse、LangSmith、Phoenix）能帮你把这三者串起来。

## 生活化类比

可观测性像**汽车的仪表盘 + 行车记录仪**：仪表盘告诉你油耗速度（指标），记录仪还原整段行程（链路），让你出事时能查清原因。

## 代码示例

```python
# 记录一次调用的关键指标
import time
start = time.time()
resp = client.chat.completions.create(model=model, messages=messages)
log({
    "model": model, "latency_ms": (time.time() - start) * 1000,
    "input_tokens": resp.usage.prompt_tokens,
    "output_tokens": resp.usage.completion_tokens,
    "cost": estimate_cost(model, resp.usage),
})
```

## 常见误区

- ❌ 「打印日志就够了」→ 要指标+链路+日志三位一体，才能定位问题、优化成本。
- ❌ 「上线后再补观测」→ 从第一天就要埋点，否则出了问题无从查起。
- ❌ 「观测只关心延迟」→ 成本、质量、token 消耗同样关键，缺一不可。

## 相关词条

- [监控告警](/terms/llmops/monitoring.md) · [LLMOps](/terms/llmops/llmops.md) · [成本优化](/terms/llmops/cost-optimization.md)

## 延伸阅读

- Langfuse / LangSmith / OpenTelemetry 文档
