---
title: 负载均衡与灰度发布
description: 负载均衡和灰度发布是什么、如何平稳地把流量分发并逐步上线新模型
---

# 负载均衡与灰度发布

::: tip 一句话定义
负载均衡是把请求分发到多个模型实例/服务上以分摊压力；灰度发布（金丝雀）是先让一小部分流量走新版本，验证没问题后再逐步放量。
:::

## 详细解释

AI 后端调模型服务时，常要面对：

- **多实例**：同一个模型部署多个实例，请求要均衡分配（轮询、最少连接等）。
- **多供应商**：同一个能力接多个模型供应商，按权重路由，一家挂了切另一家。
- **灰度**：换新模型/新 Prompt 时，先给 5% 流量试跑，观察质量与成本，再逐步到 100%。

两者配合，能让服务更稳定、变更更安全。

## 生活化类比

负载均衡像**多个收银台分流顾客**；灰度发布像**新菜先给一小桌客人试吃**，好评了再全店推广。

## 代码示例

```python
MODELS = ["provider-a/gpt", "provider-b/gpt"]   # 多供应商
weights = [0.8, 0.2]                             # 按权重路由

def route():
    return random.choices(MODELS, weights=weights, k=1)[0]

def gray_route(user_id):
    return "new-model" if hash(user_id) % 100 < 10 else "old-model"  # 10% 灰度
```

## 常见误区

- ❌ 「灰度 = 直接切一半流量」→ 灰度要小步放量 + 实时监控，出问题立刻回滚。
- ❌ 「负载均衡只看能通」→ 还要看延迟、错误率、成本，做智能路由。
- ❌ 「灰度和 A/B 测试一回事」→ 灰度关注"稳定上线"，A/B 关注"效果对比"。

## 相关词条

- [模型路由](/terms/llmops/model-routing.md) · [API 网关](/terms/arch/api-gateway.md) · [监控告警](/terms/llmops/monitoring.md)

## 延伸阅读

- [NGINX：HTTP 负载均衡指南](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/)
- [LiteLLM：多模型统一接入与路由](https://docs.litellm.ai/)
