---
title: 推理（Inference）
description: 推理是什么、为什么它是 AI 后端最核心的调用动作
---

# 推理（Inference）

::: tip 一句话定义
推理（Inference）是模型"生成结果"的过程——你给它输入，它算出一个输出。它是相对"训练"而言的：训练是学知识，推理是用知识。
:::

## 详细解释

大模型分两个阶段：

- **训练（Training）**：用海量数据"教"模型，学出参数。这个过程贵且慢，由模型厂商完成。
- **推理（Inference）**：模型用学到的参数，对新的输入生成输出。这是你调 API 时发生的事。

对后端开发来说，你几乎只跟"推理"打交道。衡量推理的关键指标：

- **延迟（Latency）**：从发请求到出结果要多久。
- **吞吐（Throughput）**：单位时间能处理多少请求。
- **首字延迟（TTFT）**：流式输出时，第一个字要等多久。

## 生活化类比

训练像**上学读书**（几年，学一次），推理像**考试答题**（几秒，每次都要做）。你雇的是一个"已经毕业的人"，只需要他答题，不需要再送他上学。

## 代码示例

```python
import time
start = time.time()
resp = client.chat.completions.create(model="gpt-4o-mini", messages=messages)
latency = time.time() - start
print(f"首包延迟约 {latency:.2f}s，输出：{resp.choices[0].message.content[:20]}...")
```

## 常见误区

- ❌ 「推理 = 训练」→ 完全是两码事，后端开发者 99% 的场景只做推理（调 API）。
- ❌ 「延迟只看总时长」→ 流式场景更关心首字延迟（TTFT），决定用户体感。
- ❌ 「推理服务随便调就行」→ 高并发下要关注吞吐、限流、排队，否则会打爆。

## 相关词条

- [LLM](/terms/model/llm.md) · [流式输出](/terms/prompt/streaming.md) · [模型路由](/terms/llmops/model-routing.md)

## 延伸阅读

- NVIDIA：什么是 AI Inference
