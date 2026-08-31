---
title: 编排（Orchestration）
description: 编排是什么、如何用框架把模型、工具、流程串成一条流水线
---

# 编排（Orchestration）

::: tip 一句话定义
编排（Orchestration）是把模型调用、工具、检索、条件分支等串成一条可复用的工作流的过程。框架帮你管理这条流水线的状态、顺序和错误处理。
:::

## 详细解释

一个 AI 应用往往不是"调一次模型"就完事，而是多步流程：先检索、再判断、可能调工具、最后生成、甚至循环。手动写这些 if/else 和状态管理很痛苦，于是有了编排框架：

- **LangChain / LlamaIndex**：提供链（Chain）、检索器等抽象。
- **LangGraph**：用"图"表达有分支、循环的状态机式流程。
- **Dify / Coze**：低代码/可视化编排平台，拖拽搭流程。

选型：简单流程用轻量封装，复杂 Agent 用图式编排，非技术用户用低代码平台。

## 生活化类比

编排框架像**流水线调度系统**：把"取料→加工→质检→打包"每一步接好，还要处理哪一步出错怎么办、该不该回退。

## 代码示例

```python
# LangGraph 式编排：先检索，命中则回答，否则拒答（示意）
graph = StateGraph(State)
graph.add_node("retrieve", retrieve)
graph.add_node("answer", answer)
graph.add_node("refuse", refuse)
graph.add_conditional_edges("retrieve", lambda s: "answer" if s.docs else "refuse")
```

## 常见误区

- ❌ 「有框架就能乱搭」→ 框架省的是胶水代码，业务逻辑和评测仍要自己把关。
- ❌ 「一律上重框架」→ 简单任务直接调 API 更清晰，别为了用框架而用框架。
- ❌ 「框架会保证正确」→ 框架管流程，不管答案质量，评测仍然不可或缺。

## 相关词条

- [Agent](/terms/agent/agent.md) · [多智能体](/terms/agent/multi-agent.md) · [RAG](/terms/rag/rag.md)

## 延伸阅读

- LangChain、LangGraph、Dify 官方文档
