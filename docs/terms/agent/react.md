---
title: ReAct 模式
description: ReAct 是什么、如何让模型"边思考边行动"完成多步任务
---

# ReAct 模式

::: tip 一句话定义
ReAct（Reasoning + Acting）是一种让模型交替进行"推理（Reasoning）"和"行动（Acting）"的模式：先思考下一步做什么，再调用工具执行，观察结果后继续思考，循环直到完成任务。
:::

## 详细解释

ReAct 把一次"一步到位"的回答，拆成一个循环：

1. **Thought（思考）**：分析当前状态，决定下一步。
2. **Action（行动）**：调用某个工具（搜索、查库、计算……）。
3. **Observation（观察）**：拿到工具返回的结果。
4. 回到第 1 步，直到得出最终答案。

它比"直接让模型回答"更可靠，因为模型每一步都基于真实的工具结果，而不是凭空编。是 [Agent](/terms/agent/agent.md) 最经典的工作模式。

## 生活化类比

ReAct 像**边解题边打草稿的人**：不是盯着题硬想，而是"先想一步 → 查一下资料 → 看结果 → 再想下一步"，一步步逼近答案。

## 代码示例

```python
while not done:
    out = model.reason(messages, tools)      # 思考 + 决定动作
    if out.action:
        result = execute_tool(out.action)    # 行动
        messages.append({"role": "tool", "content": result})  # 观察
    else:
        final_answer = out.content            # 结束
        done = True
```

## 常见误区

- ❌ 「ReAct 就是多问几次模型」→ 核心是"工具调用 + 观察循环"，不是简单重试。
- ❌ 「每一步都可靠」→ 某一步工具调用错了会连锁出错，要加超时、重试、兜底。
- ❌ 「所有任务都要 ReAct」→ 简单任务一步到位更快，别为了"像 Agent"而强行套循环。

## 相关词条

- [Agent](/terms/agent/agent.md) · [工具调用](/terms/prompt/function-calling.md) · [记忆 Memory](/terms/agent/memory.md)

## 延伸阅读

- 论文：ReAct: Synergizing Reasoning and Acting in Language Models
