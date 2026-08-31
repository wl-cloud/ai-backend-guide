---
title: API 网关
description: AI 后端里 API 网关是做什么的，为什么它是架构的关键一环
---

# API 网关

::: tip 一句话定义
API 网关（API Gateway）是 AI 后端对外服务的统一入口：负责鉴权、限流、路由、日志等，把请求转发给后面的模型服务，并把结果统一返回。
:::

## 详细解释

一个 AI 应用往往要调多个模型（快模型、强模型、向量库、工具服务……）。如果客户端直接连每一个服务，会造成：鉴权分散、限流难做、接口不一致、改地址要改客户端。

API 网关把这些统一收口：

- **鉴权**：校验 API Key / 用户身份。
- **限流**：防止单个用户打爆模型额度（Rate Limiting）。
- **路由**：按规则把请求分发到不同模型（模型路由）。
- **日志 / 观测**：统一记录耗时、token 用量、错误。

## 生活化类比

网关是**大楼前台**：访客（请求）先到前台登记（鉴权）、领号排队（限流），再由前台指引去对应办公室（路由），而不是让访客自己满楼乱撞。

## 代码示例

```python
# 用 FastAPI 写一个极简网关：鉴权 + 转发
from fastapi import FastAPI, Header, HTTPException

app = FastAPI()

@app.post("/v1/chat")
def chat(payload: dict, authorization: str = Header(None)):
    if authorization != "Bearer valid-token":
        raise HTTPException(401, "未授权")
    # 这里按 payload 路由到不同模型服务……
    return forward_to_model(payload)
```

## 常见误区

- ❌ 「网关只是转发」→ 它还是限流、观测、安全策略的落点，做得好能显著降本提稳。
- ❌ 「客户端直连模型更快」→ 短期省事，长期难维护、难治理。
- ❌ 「网关无状态就可以无限扩容」→ 流式输出（SSE）会让网关持有长连接，需注意连接数。

## 相关词条

- [RAG](/terms/rag/rag.md) · [Agent](/terms/agent/agent.md) · [LLMOps](/terms/llmops/llmops.md)

## 延伸阅读

- Cloudflare：什么是 API Gateway
