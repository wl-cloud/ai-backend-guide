---
title: 流式输出（Streaming / SSE）
description: 流式输出是什么、为什么 AI 应用都爱用"打字机式"返回结果
---

# 流式输出（Streaming / SSE）

::: tip 一句话定义
流式输出（Streaming）是模型不一次性返回完整结果，而是边生成边把内容"一段段"推给你——就像打字机一个字一个字往外蹦。
:::

## 详细解释

普通（非流式）调用：模型把完整回答生成完后，一次性返回，你要等它全部算完。

流式输出：模型每生成一小段，就立刻发给你，直到结束。技术上通常用 **SSE（Server-Sent Events，服务器推送事件）** 实现。

为什么 AI 应用普遍用流式：

- **体验**：用户不用盯着空白等待，首字秒出。
- **首字延迟（TTFT）**：比等完整答案快得多。
- **长回答**：边看边生成，不卡顿。

对后端，流式意味着你要处理一个持续的事件流，而不是一次请求响应。

## 生活化类比

非流式像**写完整封信才寄出**；流式像**打电话边说边听**——对方能立刻回应，不用等整段说完。

## 代码示例

```python
# 流式调用：逐段打印
stream = client.chat.completions.create(model="gpt-4o-mini",
    messages=messages, stream=True)
for chunk in stream:
    delta = chunk.choices[0].delta.content or ""
    print(delta, end="", flush=True)
```

## 常见误区

- ❌ 「流式只是前端的事」→ 后端要用 SSE/WebSocket 推送，网关要支持长连接，还要处理断线重连。
- ❌ 「流式更快出完整结果」→ 总时长未必变短，只是"首字更快"，体感更好。
- ❌ 「流式不用管错误」→ 中途可能断流，要做重试和超时兜底。

## 相关词条

- [推理](/terms/model/inference.md) · [API 网关](/terms/arch/api-gateway.md) · [可观测性](/terms/arch/observability.md)

## 延伸阅读

- [MDN：Server-Sent Events 教程](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [FastAPI 官方文档](https://fastapi.tiangolo.com/)
