---
title: 从 0 到 1 做 LLM 应用
description: 一个可运行的 LLM 应用 MVP 从哪下手、怎么迭代
---

# 从 0 到 1 做 LLM 应用

::: tip 这篇讲什么
从零做一个能上线的大模型应用，应该按什么顺序动手、每一步做到什么程度算"够了"。核心思想是：**先跑通最小闭环，再逐步加料**。
:::

## 一、先想清楚：你要解决什么问题

动手前，用三句话逼自己说清楚：

1. **给谁用**：目标用户是谁。
2. **解决什么痛点**：没有这个应用，他们现在怎么凑合。
3. **成功的标志**：用户做什么动作算"有用"（转发？付费？日活？）。

如果说不清楚，先别写代码——这不是拖延，而是避免做一个"技术上很酷、没人用"的东西。

## 二、第一步：跑通"模型能回答"的最小闭环

不要一开始就上 RAG、Agent、微调。先做一个**最朴素的对话接口**：

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ChatReq(BaseModel):
    message: str

@app.post("/chat")
def chat(req: ChatReq):
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": req.message}],
    )
    return {"reply": resp.choices[0].message.content}
```

跑通这个，你就有了一个能对话的后端。**先验证"模型本身能不能解决你的问题"**——很多时候你会发现纯 Prompt 就够了。

## 三、第二步：用 Prompt 把效果"调"出来

先别加复杂架构，把精力花在 [System Prompt](/terms/prompt/system-prompt.md) 上：

- 设定角色、规则、输出格式；
- 用 [Few-shot](/terms/prompt/few-shot.md) 给几个示例；
- 用[结构化输出](/terms/prompt/structured-output.md)约束返回格式。

**判断标准**：Prompt 调到位后，如果效果已经够用，就到此为止，不要过度工程。

## 四、第三步：按需加"料"

只有当 Prompt 不够用时，才按这个优先级加：

1. **上下文不足** → 上 [RAG](/terms/rag/rag.md)（补知识）。
2. **需要执行动作** → 上[工具调用](/terms/prompt/function-calling.md) / [Agent](/terms/agent/agent.md)。
3. **风格/格式总不对** → 才考虑[微调](/terms/finetune/fine-tuning.md)。

记住这个顺序：**Prompt → RAG → Agent → 微调**，从便宜到贵，从简单到复杂。

## 五、第四步：让它"能用、敢上线"

上线前补齐这几件事，否则只能算 demo：

- **流式输出**：改善等待体验（见[流式输出](/terms/prompt/streaming.md)）。
- **错误处理**：超时、重试、上游限流怎么办。
- **鉴权 + 限流**：防止被刷（见[限流](/terms/arch/rate-limiting.md)）。
- **观测**：记录延迟、token、成本（见[可观测性](/terms/arch/observability.md)）。
- **评测集**：至少 20~30 条，每次改动跑一遍（见[评估驱动开发](/guides/eval-driven.md)）。

## 六、迭代的节奏

上线后，用数据驱动迭代：

1. 看用户的真实提问，找"答得不好"的高频 case；
2. 加进评测集，针对性改 Prompt / 补知识；
3. 每周跑一遍评测回归，确认没退步。

## 小结

| 阶段 | 做什么 | 完成标志 |
|------|--------|----------|
| 0. 想清楚 | 定义用户和痛点 | 三句话能说清 |
| 1. 最小闭环 | 朴素对话接口 | 模型能答你的问题 |
| 2. 调 Prompt | 角色+规则+示例 | 效果够用 |
| 3. 加料 | 按需上 RAG/Agent/微调 | 按优先级，够用就停 |
| 4. 敢上线 | 流式/容错/限流/观测/评测 | 有评测集兜底 |
| 5. 迭代 | 数据驱动改进 | 效果持续提升 |

**核心心法：先让它能用，再让它好用，别一上来就堆架构。**

## 相关词条

- [RAG](/terms/rag/rag.md) · [Agent](/terms/agent/agent.md) · [评估驱动开发](/guides/eval-driven.md)
