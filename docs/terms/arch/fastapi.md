---
title: FastAPI
description: FastAPI 是什么、为什么它是搭 AI 后端服务的首选框架
---

# FastAPI

::: tip 一句话定义
FastAPI 是一个现代 Python Web 框架，用于快速构建 API 服务。因为它天生支持异步、流式响应和自动文档，成为搭 AI 后端服务的主流选择。
:::

## 详细解释

AI 后端大多是"调模型 API + 拼 Prompt + 转发结果"，本质是 I/O 密集的 HTTP 服务。FastAPI 的几个特性特别契合：

- **异步（async）**：调用模型 API 时不用阻塞线程，高并发表现好。
- **流式响应**：原生支持 SSE/StreamingResponse，方便做流式输出。
- **自动文档**：自动生成 OpenAPI/Swagger 文档，省事。
- **类型提示**：用 Pydantic 校验请求/响应，写起来清晰。

所以大量 AI 网关、RAG 服务、Agent 后端都用 FastAPI 搭建。

## 生活化类比

FastAPI 像**一套顺手的厨房设备**：点火快、能同时开几个灶（异步）、出菜还能一道道上（流式），菜单（文档）还自动打印好了。

## 代码示例

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()

@app.post("/v1/chat")
async def chat(payload: dict):
    async def gen():
        stream = client.chat.completions.create(stream=True, **payload)
        for chunk in stream:
            yield chunk.choices[0].delta.content or ""
    return StreamingResponse(gen(), media_type="text/event-stream")
```

## 常见误区

- ❌ 「同步函数也能随便用」→ 调模型 API 要用 async，否则阻塞事件循环、拖垮并发。
- ❌ 「FastAPI 能直接扛大流量」→ 生产环境前面通常还要加网关、限流、负载均衡。
- ❌ 「流式不用处理断开」→ 客户端断开时生成器要能正确停止，避免资源泄漏。

## 相关词条

- [API 网关](/terms/arch/api-gateway.md) · [流式输出](/terms/prompt/streaming.md) · [LLMOps](/terms/llmops/llmops.md)

## 延伸阅读

- [FastAPI 官方文档](https://fastapi.tiangolo.com/)
- [SlowAPI：FastAPI 限流库文档](https://slowapi.readthedocs.io/)
