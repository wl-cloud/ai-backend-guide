---
title: 架构与工程
description: 架构与工程模块 —— 把模型能力封装成稳定可靠的服务
---

# 架构与工程

::: tip 一句话定位
架构与工程是把模型能力「封装成稳定可靠服务」的模块：处理并发、限流、稳定性、可观测性等工程问题，让 AI 应用扛得住真实流量。
:::

## 这个模块包括什么

- **API 网关**：对外服务的统一入口，负责鉴权、限流、路由。
- **编排（Orchestration）**：把模型、工具、流程串成流水线。
- **限流（Rate Limiting）**：控制请求频率，保护服务和成本。
- **可观测性**：看清延迟、成本、质量的运行数据。
- **负载均衡 / 灰度**：分流流量、平稳上线新版本。
- **FastAPI**：搭 AI 后端服务的主流 Python 框架。

## 在 AI 后端开发中的作用

模型能"答"，但离"线上稳定服务"还差一层工程。这个模块解决：

1. **统一入口与安全**（API 网关）—— 鉴权、限流、路由收口。
2. **流程管理**（编排）—— 把多步调用串成可维护的流水线。
3. **扛流量**（限流、负载均衡、灰度）—— 防打爆、平滑变更。
4. **看得见**（可观测性）—— 出问题能定位、能优化。
5. **写得快**（FastAPI）—— 异步、流式、自动文档，天生适合 AI 服务。

没有这一层，你的"模型"只是 demo，不是"产品"。

## 词条导航

<div class="term-nav" style="--acc:#2563eb">
  <a class="term-btn" href="/terms/arch/api-gateway"><span class="cn">API 网关</span><span class="en">API Gateway</span></a>
  <a class="term-btn" href="/terms/arch/orchestration"><span class="cn">编排</span><span class="en">Orchestration</span></a>
  <a class="term-btn" href="/terms/arch/rate-limiting"><span class="cn">限流</span><span class="en">Rate Limiting</span></a>
  <a class="term-btn" href="/terms/arch/observability"><span class="cn">可观测性</span><span class="en">Observability</span></a>
  <a class="term-btn" href="/terms/arch/load-balancing"><span class="cn">负载均衡 · 灰度</span><span class="en">Load Balancing</span></a>
  <a class="term-btn" href="/terms/arch/fastapi"><span class="cn">FastAPI</span><span class="en">Python Web Framework</span></a>
</div>

## 相关模块

- [Agent 智能体](/terms/agent/index.md) · [评测与安全](/terms/eval/index.md) · [LLMOps 与成本](/terms/llmops/index.md)
