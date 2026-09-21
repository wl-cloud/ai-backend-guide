---
title: Few-shot（少样本提示）
description: Few-shot 是什么、如何用几个示例教会模型输出格式
---

# Few-shot（少样本提示）

::: tip 一句话定义
Few-shot（少样本提示）是在 Prompt 里先给几个"输入→期望输出"的示例，让模型照着示例的模式来回答。不给示例叫 zero-shot，给几个就叫 few-shot。
:::

## 详细解释

模型很多时候"知道怎么做，但不确定你要什么格式"。Few-shot 就是**用示例当说明书**：你给出 2~3 个例子，模型就能模仿它们的风格、格式和逻辑。

- **Zero-shot**：只给指令，不给例子。
- **Few-shot**：给几个例子。
- **示例越贴近真实场景**，效果越好。

Few-shot 特别适合：抽取信息、分类、格式严格的任务。很多情况下，加几个好例子比反复改指令更有效。

## 生活化类比

Few-shot 像**教新手填表时先给他看两张填好的样表**：不用解释太多，照着样表填就对了。

## 代码示例

```python
prompt = """把下面的句子分类为「正面」或「负面」。

示例：
"这个功能太好用了" -> 正面
"太难用了，退钱" -> 负面

现在请判断：
"客服回复很快" ->"""
resp = client.chat.completions.create(model="gpt-4o-mini",
    messages=[{"role": "user", "content": prompt}])
```

## 常见误区

- ❌ 「示例越多越好」→ 太多示例占用上下文、增加成本，2~3 个高质量示例通常就够。
- ❌ 「示例随便写」→ 示例要和真实输入同分布，否则会误导模型。
- ❌ 「只靠指令不靠示例」→ 格式类任务，示例往往比指令更快见效。

## 相关词条

- [Prompt](/terms/prompt/prompt.md) · [System Prompt](/terms/prompt/system-prompt.md) · [结构化输出](/terms/prompt/structured-output.md)

## 延伸阅读

- [GPT-3 原论文（少样本学习的奠基）](https://arxiv.org/abs/2005.14165)
- [Prompt Engineering Guide（提示工程指南）](https://www.promptingguide.ai/)
