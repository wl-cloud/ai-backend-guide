---
title: System Prompt（系统提示词）
description: System Prompt 是什么、如何用它设定角色、规则和输出格式
---

# System Prompt（系统提示词）

::: tip 一句话定义
System Prompt（系统提示词）是你在对话最前面给模型设定的"角色与规则"，用来定义它是谁、该怎么答、有什么边界。它优先级高于用户消息，但仍是"软指令"。
:::

## 详细解释

一次对话的 messages 通常分三种角色：

- **system**：设定全局规则（角色、语气、输出格式、禁止事项）。
- **user**：用户的实际输入。
- **assistant**：模型的回复（用于历史对话）。

System Prompt 写什么，直接决定应用的"人格"和稳定性。好的 System Prompt 通常包含：

1. **角色**：你是谁（如"资深后端架构师"）。
2. **任务**：要做什么。
3. **规则**：怎么做、不能做什么。
4. **输出格式**：返回什么结构（JSON、列表等）。

## 生活化类比

System Prompt 是**给员工的岗位说明书**：角色、职责、红线都写清楚，员工才知道该怎么干活、哪些不能碰。

## 代码示例

```python
messages = [
    {"role": "system", "content":
        "你是电商客服。规则：① 只用中文简洁回答；② 不知道就说'请咨询人工客服'；"
        "③ 不承诺退款。输出为 JSON：{\"reply\": \"...\"}"},
    {"role": "user", "content": "我买的鞋能退吗？"},
]
```

## 常见误区

- ❌ 「System Prompt 是铁律，模型一定遵守」→ 它是软指令，可能被用户用提示注入绕过。
- ❌ 「写得越长越稳」→ 太长重点被稀释，应精炼、明确、可测试。
- ❌ 「只写一句就行」→ 角色、规则、输出格式缺一不可，否则输出不稳定。

## 相关词条

- [Prompt](/terms/prompt/prompt.md) · [提示注入](/terms/eval/prompt-injection.md) · [结构化输出](/terms/prompt/structured-output.md)

## 延伸阅读

- Anthropic：System Prompts 最佳实践
