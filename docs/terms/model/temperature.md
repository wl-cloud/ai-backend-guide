---
title: 温度（Temperature）与 Top-p
description: 温度与 Top-p 是什么、怎么用它控制模型输出的随机程度
---

# 温度（Temperature）与 Top-p

::: tip 一句话定义
温度（Temperature）和 Top-p 是两个控制模型输出"随机性"的参数：温度越低输出越确定、越保守；越高越有创意、越不可预测。
:::

## 详细解释

模型生成时，其实是给每个候选词打一个"概率"，再按概率挑词。这两个参数就是调节这个挑选过程的旋钮：

- **Temperature（温度，0~2）**：把概率分布"拉平"或"收尖"。温度越低，高概率词被选中的概率越高（输出稳定）；越高，低概率词也有机会（输出多样）。**设为 0 表示几乎取最可能的词**。
- **Top-p（核采样，0~1）**：只从"累计概率达到 p"的最小候选集里挑，砍掉长尾里的冷门词。

实用建议：**代码生成/抽取用低温（0~0.3），创意写作/头脑风暴用高温（0.7~1.0）**。通常只调一个即可，别两个一起乱调。

## 生活化类比

温度像**面试官的严格程度**：低温时"只录取最稳妥的答案"；高温时"也愿意听听天马行空的想法"。

## 代码示例

```python
resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=messages,
    temperature=0.2,   # 低温：输出稳定，适合代码/抽取
    # top_p=1.0        # 一般二选一，不同时调
)
```

## 常见误区

- ❌ 「温度越高越聪明」→ 温度只影响"随机性"，不影响"能力"，太高反而胡言乱语。
- ❌ 「temperature 和 top_p 一起调」→ 官方建议二选一，一起调容易互相干扰。
- ❌ 「所有任务都用默认值」→ 抽取类任务低温更准，创意类可适当调高。

## 相关词条

- [推理](/terms/model/inference.md) · [LLM](/terms/model/llm.md) · [Prompt](/terms/prompt/prompt.md)

## 延伸阅读

- [Anthropic 提示工程指南](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Prompt Engineering Guide（提示工程指南）](https://www.promptingguide.ai/)
