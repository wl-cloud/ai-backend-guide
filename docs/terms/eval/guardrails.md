---
title: 护栏（Guardrails）
description: 护栏是什么、如何在模型前后加一层安全校验
---

# 护栏（Guardrails）

::: tip 一句话定义
护栏（Guardrails）是架在模型前后的安全与合规校验层：输入进来先检查，输出出去前再检查，拦截有害、越界或不合规的内容。
:::

## 详细解释

模型可能被诱导输出有害内容、泄露数据、或答非所问。护栏在"模型"这个不可控环节外面加两道闸：

- **输入护栏**：检测提示注入、敏感词、越权请求，在进入模型前拦截。
- **输出护栏**：检测违规内容、幻觉、格式错误、数据泄露，在返回用户前拦截。

实现方式：规则/关键词、分类模型、或用另一个 LLM 做合规审查（LLM-as-judge）。

## 生活化类比

护栏像**机场安检**：进候机厅（模型）前查一遍，登机（输出）前再查一遍，把危险品挡在门外。

## 代码示例

```python
def chat(user_input):
    if input_guard.flagged(user_input):     # 输入护栏
        return "请求包含违规内容，已拒绝"
    answer = call_llm(user_input)
    if output_guard.flagged(answer):        # 输出护栏
        return "回答未能通过安全检查，请换个问法"
    return answer
```

## 常见误区

- ❌ 「有模型自带安全就够了」→ 厂商安全不等于你的业务合规，要按业务加自己的护栏。
- ❌ 「护栏只在输入做」→ 输出同样要查（幻觉、泄露、违规），两头都要拦。
- ❌ 「护栏会误伤」→ 要平衡拦截和误伤率，护栏过严会严重影响体验。

## 相关词条

- [提示注入](/terms/eval/prompt-injection.md) · [红队测试](/terms/eval/red-teaming.md) · [幻觉 Hallucination](/terms/eval/hallucination.md)

## 延伸阅读

- NVIDIA NeMo Guardrails、Guardrails AI 文档
