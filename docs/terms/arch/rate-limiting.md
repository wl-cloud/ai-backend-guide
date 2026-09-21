---
title: 限流（Rate Limiting）
description: 限流是什么、为什么要控制请求频率保护模型服务和成本
---

# 限流（Rate Limiting）

::: tip 一句话定义
限流（Rate Limiting）是控制请求频率的机制：限制"某段时间内最多允许多少次请求"，防止单个用户或流量洪峰打爆服务、烧光预算。
:::

## 详细解释

模型 API 有并发和配额限制，且按 token 收费。不限流的话，一个失控的客户端或恶意刷量就能把服务拖垮、把账单打爆。限流在多个层面起作用：

- **上游 API 限流**：模型厂商自己会限（如 RPM：每分钟请求数、TPM：每分钟 token 数）。
- **你自己的限流**：在网关层按用户/API Key 限流。
- **排队与降级**：超限的请求排队等待，或降级到更便宜的模型。

常见算法：固定窗口、滑动窗口、令牌桶（Token Bucket）。

## 生活化类比

限流像**餐厅排队叫号**：后厨一次只能做这么多菜，超过就排队，而不是所有人一拥而上把厨房挤爆。

## 代码示例

```python
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

@app.post("/v1/chat")
@limiter.limit("30/minute")   # 每 IP 每分钟最多 30 次
def chat(): ...
```

## 常见误区

- ❌ 「限流就是拒绝请求」→ 更好的是排队、降级、熔断，而不是一刀切 429。
- ❌ 「只看请求数」→ token 消耗也要限（TPM），否则长问题会偷偷烧钱。
- ❌ 「限流和计费无关」→ 限流是控成本的重要手段，和预算强相关。

## 相关词条

- [API 网关](/terms/arch/api-gateway.md) · [成本优化](/terms/llmops/cost-optimization.md) · [监控告警](/terms/llmops/monitoring.md)

## 延伸阅读

- [SlowAPI：FastAPI 限流库文档](https://slowapi.readthedocs.io/)
- [NGINX：HTTP 负载均衡指南](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/)
