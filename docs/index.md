---
layout: home
title: AI 后端入门手册
description: 面向零基础新手的 AI 后端与大模型应用开发知识站
hero:
  name: AI 后端入门手册
  text: 零基础看懂大模型应用开发
  tagline: 术语词典 + 方法论，帮你从「会用 AI」到「会做 AI 应用」
  actions:
    - theme: brand
      text: 从术语词典开始
      link: /terms/
    - theme: alt
      text: 直接看方法论
      link: /guides/
features:
  - title: 术语词典 · 45 个核心名词
    details: 8 大知识域逐条拆解，每个词条都配一句话定义、生活化类比、代码示例和常见误区。
  - title: 方法论 · 5 篇行动指南
    details: 从 0 到 1 做 LLM 应用、RAG 落地、拒答兜底、Agent 设计、评估驱动开发。
  - title: 为新手设计
    details: 不做名词堆砌，先讲「是什么、为什么」，再用类比和可运行代码讲透。
---

## 知识地图

一张图看懂 AI 后端的知识版图，点击任意分类卡片即可跳转到对应词条：

<div class="mindmap">
  <div class="mm-center">AI 后端</div>
  <div class="mm-branches">
    <a class="mm-branch" style="--c:#4f46e5" href="/terms/model/"><div class="mm-label">模型与推理</div><div class="mm-children">LLM · Token · 上下文窗口 · 推理 · 温度 · 多模态</div></a>
    <a class="mm-branch" style="--c:#0891b2" href="/terms/prompt/"><div class="mm-label">提示与交互</div><div class="mm-children">Prompt · System Prompt · 流式输出 · 工具调用 · 结构化输出</div></a>
    <a class="mm-branch" style="--c:#0d9488" href="/terms/rag/"><div class="mm-label">RAG 与检索</div><div class="mm-children">RAG · Embedding · 向量库 · 分块 · 重排 · 混合检索</div></a>
    <a class="mm-branch" style="--c:#7c3aed" href="/terms/agent/"><div class="mm-label">Agent 智能体</div><div class="mm-children">Agent · ReAct · 多智能体 · MCP · 记忆</div></a>
    <a class="mm-branch" style="--c:#db2777" href="/terms/finetune/"><div class="mm-label">微调与训练</div><div class="mm-children">微调 · LoRA · 蒸馏 · 对齐</div></a>
    <a class="mm-branch" style="--c:#2563eb" href="/terms/arch/"><div class="mm-label">架构与工程</div><div class="mm-children">API 网关 · 编排 · 限流 · 可观测性 · FastAPI</div></a>
    <a class="mm-branch" style="--c:#ea580c" href="/terms/eval/"><div class="mm-label">评测与安全</div><div class="mm-children">幻觉 · 评测 · 护栏 · 提示注入 · 红队</div></a>
    <a class="mm-branch" style="--c:#059669" href="/terms/llmops/"><div class="mm-label">LLMOps 与成本</div><div class="mm-children">LLMOps · 模型路由 · 成本优化 · 监控告警</div></a>
  </div>
</div>

## 从这里开始

- **想快速上手**：直接读[从 0 到 1 做 LLM 应用](/guides/llm-app-from-zero.md)。
- **在做知识问答**：重点看 [RAG 落地方法论](/guides/rag-playbook.md) 和 [RAG 拒答/兜底](/guides/rag-fallback.md)。
- **想查某个名词**：去[术语词典](/terms/)按分类查找。
