---
title: 多智能体（Multi-Agent）
description: 多智能体是什么、什么时候把任务拆给多个 Agent 协作完成
---

# 多智能体（Multi-Agent）

::: tip 一句话定义
多智能体（Multi-Agent）是把一个复杂任务拆给多个各司其职的 Agent 协作完成，比如一个负责规划、一个负责查资料、一个负责写代码，再汇总结果。
:::

## 详细解释

单个 Agent 要"什么都会"往往效果差、易出错。多智能体让每个 Agent 专注一个角色：

- **规划者**：拆解任务、分配。
- **执行者**：调用工具完成子任务。
- **评审者**：检查结果、提出修改。

常见协作结构有：流水线（A→B→C）、中心调度（一个主控分配）、辩论（多个 Agent 互评取优）等。

适合任务边界清晰、可并行拆分的场景；但也会带来更大的复杂度、成本和延迟。

## 生活化类比

多智能体像**一支项目小组**：产品出方案、工程师实现、测试把关，各司其职比一个人全包更靠谱，但沟通协调成本也更高。

## 代码示例

```python
# 两个角色 Agent 协作（示意）
plan = planner_agent.run("写一篇 RAG 入门文章")       # 规划：列出大纲
draft = writer_agent.run(plan)                        # 写作：按大纲成文
review = reviewer_agent.run(draft)                    # 评审：挑问题
final = writer_agent.revise(draft, review)            # 修改
```

## 常见误区

- ❌ 「Agent 越多越强」→ 多 Agent 带来协调成本、延迟和费用，简单任务一个就够。
- ❌ 「多 Agent 不会出错」→ 角色间传递错误会放大，要定义清晰的输入输出契约。
- ❌ 「必须自己写编排」→ 可先用 LangGraph、AutoGen 等框架，别从零造轮子。

## 相关词条

- [Agent](/terms/agent/agent.md) · [ReAct](/terms/agent/react.md) · [编排 Orchestration](/terms/arch/orchestration.md)

## 延伸阅读

- 微软 AutoGen、LangGraph 多智能体文档
