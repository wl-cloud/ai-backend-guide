---
title: 监控告警（Monitoring & Alerting）
description: 监控告警是什么、如何在 AI 应用出问题时第一时间知道
---

# 监控告警（Monitoring & Alerting）

::: tip 一句话定义
监控告警是持续采集应用运行指标，并在异常（延迟飙升、错误率升高、成本超预算）时主动通知你，让你在用户发现问题前先发现。
:::

## 详细解释

监控是"持续看"，告警是"出事喊你"。对 AI 应用，需要重点监控：

- **可用性**：错误率、超时率、上游 API 是否挂。
- **性能**：延迟、首字延迟、吞吐。
- **成本**：token 消耗速度、单日/单用户费用，防超预算。
- **质量**：评测分数是否下滑、拒绝率、幻觉率。

告警要设合理阈值，避免"天天报警没人看"或"真出事没报警"。

## 生活化类比

监控告警像**ICU 的监护仪 + 护士铃**：指标一直盯着，一旦异常立刻响铃叫人来处理。

## 代码示例

```python
def check_and_alert(metrics):
    if metrics["error_rate"] > 0.05:
        send_alert(f"错误率异常：{metrics['error_rate']:.2%}")
    if metrics["daily_cost"] > BUDGET * 0.8:
        send_alert(f"成本已达预算 80%：¥{metrics['daily_cost']}")
```

## 常见误区

- ❌ 「监控 = 只看有没有报错」→ 成本、质量、延迟同样要盯，否则隐患悄悄累积。
- ❌ 「阈值随便设」→ 太松漏报、太紧骚扰，要结合基线数据调阈值。
- ❌ 「告警了再处理」→ 告警要能定位到具体链路（哪个模型/哪个环节），否则无从下手。

## 相关词条

- [可观测性](/terms/arch/observability.md) · [LLMOps](/terms/llmops/llmops.md) · [成本优化](/terms/llmops/cost-optimization.md)

## 延伸阅读

- Prometheus / Grafana、Datadog 监控实践
