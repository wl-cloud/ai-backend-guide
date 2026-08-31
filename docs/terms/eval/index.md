---
title: 评测与安全
description: 评测与安全模块 —— 保证「答得对、不出事」
---

# 评测与安全

::: tip 一句话定位
评测与安全是保证「答得对、不出事」的模块：衡量输出质量、拦截有害内容、防御攻击，让 AI 应用值得信赖。
:::

## 这个模块包括什么

- **幻觉（Hallucination）**：模型"一本正经胡说八道"的问题。
- **评测（Evaluation）**：用标准题目客观衡量输出质量。
- **护栏（Guardrails）**：模型前后的安全与合规校验。
- **提示注入（Prompt Injection）**：诱导模型绕过规则的攻击。
- **红队测试（Red Teaming）**：主动攻击自己的模型找漏洞。

## 在 AI 后端开发中的作用

模型会犯错、会胡编、也会被诱导。这个模块解决：

1. **知道好不好**（评测）—— 用数据判断质量，而不是靠感觉。
2. **减少胡编**（幻觉的缓解）—— 用 RAG、约束 Prompt、结构化输出等手段。
3. **守住底线**（护栏、提示注入、红队）—— 拦截有害/越权/违规内容。

尤其在高风险领域（医疗、法律、金融），这一层不是可选项，而是必须。

## 词条导航

<div class="term-nav" style="--acc:#ea580c">
  <a class="term-btn" href="/terms/eval/hallucination"><span class="cn">幻觉</span><span class="en">Hallucination</span></a>
  <a class="term-btn" href="/terms/eval/evaluation"><span class="cn">评测</span><span class="en">Evaluation</span></a>
  <a class="term-btn" href="/terms/eval/guardrails"><span class="cn">护栏</span><span class="en">Guardrails</span></a>
  <a class="term-btn" href="/terms/eval/prompt-injection"><span class="cn">提示注入</span><span class="en">Prompt Injection</span></a>
  <a class="term-btn" href="/terms/eval/red-teaming"><span class="cn">红队测试</span><span class="en">Red Teaming</span></a>
</div>

## 相关模块

- [RAG 与检索](/terms/rag/index.md) · [架构与工程](/terms/arch/index.md) · [LLMOps 与成本](/terms/llmops/index.md)
