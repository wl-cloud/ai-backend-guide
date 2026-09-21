---
title: LLMOps
description: LLMOps 是什么、和传统 MLOps 有什么区别
---

# LLMOps

::: tip 一句话定义
LLMOps（LLM Operations）是围绕大模型应用的一套工程实践：涵盖部署、监控、评测、成本控制与持续迭代，让 AI 应用从「能跑」到「稳定可靠地跑」。
:::

## 详细解释

传统 MLOps 关注训练模型、管理数据集、部署推理服务。LLMOps 的差异在于：大多数团队**不训练模型，而是调 API**，所以重心变成：

- **Prompt 版本管理**：像管代码一样管 Prompt 的变更。
- **评测（Eval）**：用评测集在每次改动后自动回归。
- **可观测性**：追踪每次请求的延迟、token、成本、质量。
- **成本治理**：模型路由、缓存、限流来控费。
- **安全护栏**：内容安全、防提示注入。

## 生活化类比

如果 LLM 应用是一辆车上路，LLMOps 就是**仪表盘 + 保养手册**：告诉你油耗（成本）、速度（延迟）、有没有故障（错误），并让你能持续调优而不是盲开。

## 代码示例

```python
# 记录每次调用的关键指标（示意）
import time
start = time.time()
resp = client.chat.completions.create(model=model, messages=messages)
latency = time.time() - start
tokens = resp.usage.total_tokens
log_metrics({"model": model, "latency": latency, "tokens": tokens,
             "cost": estimate_cost(model, tokens)})
```

## 常见误区

- ❌ 「上线就是终点」→ 没有监控和评测，模型/提示词一变，效果悄悄变差你都不知道。
- ❌ 「LLMOps 就是套现成平台」→ 平台是工具，关键是先有评测集和可观测数据。
- ❌ 「评测是可选」→ 没有评测，任何「优化」都只是感觉，无法判断好坏。

## 相关词条

- [微调](/terms/finetune/fine-tuning.md) · [API 网关](/terms/arch/api-gateway.md) · [Agent](/terms/agent/agent.md)

## 延伸阅读

- [LLMOps 综述（LLMOps: A Survey）](https://arxiv.org/abs/2407.12797)
- [Langfuse：LLM 可观测性平台文档](https://langfuse.com/docs)
