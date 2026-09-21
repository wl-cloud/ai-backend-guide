---
title: 结构化输出（Structured Output / JSON Mode）
description: 结构化输出是什么、如何让模型稳定返回 JSON 而不是自由文本
---

# 结构化输出（Structured Output / JSON Mode）

::: tip 一句话定义
结构化输出是约束模型返回固定格式（通常是 JSON）的能力，让模型不再自由发挥，而是输出符合你 Schema 的数据，方便程序直接解析。
:::

## 详细解释

默认情况下模型返回自由文本，程序很难可靠地解析。结构化输出用几种方式把输出"框住"：

- **JSON Mode**：强制输出合法 JSON（但不保证字段结构）。
- **Function Calling 的参数约束**：用 JSON Schema 严格限定字段名和类型。
- **Prompt 约定 + 后处理**：在 System Prompt 里要求 JSON，再在代码里解析并容错。

生产级应用要稳定拿到结构化数据，应该优先用**模型原生的结构化输出能力**（带 Schema 校验），而不是纯靠 Prompt 碰运气。

## 生活化类比

结构化输出像让员工**填表格**而不是写作文：每格该填什么、什么类型都规定好，你拿到就能直接进系统。

## 代码示例

```python
# 用 JSON Schema 约束输出
resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "提取：张三，男，30 岁"}],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "person",
            "schema": {"type": "object",
                "properties": {"name": {"type": "string"},
                               "gender": {"type": "string"},
                               "age": {"type": "integer"}},
                "required": ["name", "gender", "age"]},
        },
    },
)
```

## 常见误区

- ❌ 「在 Prompt 里喊一句'返回 JSON'就够了」→ 仍可能出非法 JSON 或漏字段，要用 Schema 约束。
- ❌ 「解析失败就重试」→ 重试成本高，不如从源头用结构化输出 + 解析容错。
- ❌ 「结构化 = 只能 JSON」→ 也可以是 XML、YAML、表格等，但 JSON 最常见。

## 相关词条

- [Prompt](/terms/prompt/prompt.md) · [工具调用](/terms/prompt/function-calling.md) · [System Prompt](/terms/prompt/system-prompt.md)

## 延伸阅读

- [LangChain：结构化输出指南](https://python.langchain.com/docs/how_to/structured_output/)
- [LangChain 官方文档](https://python.langchain.com/docs/introduction/)
