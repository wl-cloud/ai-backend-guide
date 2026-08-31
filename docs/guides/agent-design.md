---
title: Agent 设计方法论
description: 什么时候该用 Agent、什么时候不该用，以及怎么设计
---

# Agent 设计方法论

::: tip 这篇讲什么
Agent 很酷，但大部分场景不需要。这篇讲**什么时候该用、什么时候不该用**，以及设计 Agent 时要守的几条原则。
:::

## 一、先问：真的需要 Agent 吗？

Agent（见[Agent](/terms/agent/agent.md)）擅长"多步 + 需工具 + 需决策"的任务。判断标准：

**该用 Agent**：
- 任务需要多步、且步骤之间依赖工具结果（查了 A 才能做 B）。
- 需要自主决策下一步做什么（而不是固定流程）。

**不该用 Agent**：
- 一次调用就能回答的问题（直接调模型）。
- 流程固定、无分支（用普通编排/流水线即可）。
- 对可靠性要求极高、出错代价大（Agent 多步更容易出错）。

> 经验法则：**能用一次调用解决的，绝不上 Agent。** Agent 的复杂度、成本、出错率都更高。

## 二、Agent 的核心循环

Agent 本质是一个"思考—行动—观察"循环（[ReAct](/terms/agent/react.md)）：

```python
while not done:
    action = model.decide(messages, tools)   # 思考 + 决定下一步
    if action is None:
        final = model.answer(messages); done = True
    else:
        result = execute_tool(action)        # 行动
        messages.append({"role": "tool", "content": result})  # 观察
```

## 三、设计原则

### 1. 工具要少而精

工具越多，模型越容易选错。每个工具要：

- 名称和描述清晰（描述会被模型看到，是"说明书"）。
- 参数 schema 严格（类型、必填、枚举）。
- 只暴露必要的，别一股脑全给。

### 2. 每一步都要兜底

Agent 的每一步都可能失败，必须配齐：

- **超时**：工具调用设超时，别无限等。
- **重试**：失败重试 1~2 次。
- **兜底**：重试仍失败，给用户明确的降级回复。

### 3. 控制步数和成本

Agent 可能"死循环"或"越走越偏"：

- 设最大步数（如 10 步），超了就停并总结。
- 每步记录 token 和耗时，防止成本失控。

### 4. 让模型"可被观察"

每一步的思考、调用、结果都要记下来（见[可观测性](/terms/arch/observability.md)），否则出错无从排查。

## 四、单 Agent vs 多 Agent

- **单 Agent**：任务单一、工具不多时，简单可靠，优先选。
- **多 Agent**：任务边界清晰、可并行拆分时才用（如"规划者 + 执行者 + 评审者"）。它会带来更大的协调成本、延迟和费用，别为用而用。

## 五、上线前必查清单

- [ ] 这个任务真的需要 Agent 吗？（还是直接调模型）
- [ ] 工具描述和参数 schema 清晰吗？
- [ ] 每步有超时、重试、兜底吗？
- [ ] 设了最大步数和成本上限吗？
- [ ] 工具调用前有权限校验吗？（防[提示注入](/terms/eval/prompt-injection.md)越权）
- [ ] 有评测集能回归验证吗？

## 六、小结

Agent 是"重武器"，不是默认选项。设计时要**克制**：工具少而精、每步有兜底、成本有上限、全程可观测。先证明单 Agent 够用，再考虑多 Agent。

## 相关词条

- [Agent](/terms/agent/agent.md) · [ReAct](/terms/agent/react.md) · [工具调用](/terms/prompt/function-calling.md) · [多智能体](/terms/agent/multi-agent.md)
