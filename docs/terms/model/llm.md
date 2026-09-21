---
title: LLM（大语言模型）
description: LLM 是什么、为什么它是 AI 应用的基础，零基础也能看懂
---

# LLM（大语言模型）

::: tip 一句话定义
LLM（Large Language Model，大语言模型）是一种在海量文本上训练出来、能根据输入预测并生成文本的神经网络模型。你平时用的 ChatGPT、文心一言背后的「大脑」就是它。
:::

## 详细解释

LLM 的核心能力只有一件事：**预测下一个词（token）**。给定一段上文，它计算出接下来最可能出现的词是什么，然后一个接一个地「接龙」，直到凑成一句完整的话。

之所以叫「大」，体现在两方面：

- **参数多**：参数量动辄几十亿到上万亿，模型「记住」了大量语言规律和知识。
- **数据大**：训练语料来自互联网上的海量文本（网页、书籍、代码等）。

对后端开发来说，你通常不需要训练 LLM，而是**通过 API 调用它**——把文本（提示词）发过去，拿到它生成的文本。

## 生活化类比

把 LLM 想象成一个**读了全世界几乎所有书、但没见过你本人的笔友**：你写一句话，它凭着读过的东西接下一句。它知识面极广，但有时会「一本正经地编造」，因为它本质是在「猜下一个词」，而不是「查资料」。

## 代码示例

```python
# 调用 OpenAI 兼容接口生成文本
import openai

client = openai.OpenAI(base_url="https://api.example.com/v1", api_key="sk-xxx")
resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "用一句话解释什么是 RAG"}],
)
print(resp.choices[0].message.content)
```

## 常见误区

- ❌ 「LLM 会实时联网查资料」→ 训练完成后知识是「冻结」的，会过时，需要 RAG 补充新知识。
- ❌ 「LLM 说的一定对」→ 它会幻觉（编造），关键答案要交叉验证。
- ❌ 「LLM 越大越好」→ 越大越贵越慢，实际工程里按场景选模型（模型路由）。

## 相关词条

- [Prompt](/terms/prompt/prompt.md) · [RAG](/terms/rag/rag.md) · [Agent](/terms/agent/agent.md) · [幻觉](/terms/eval/hallucination.md)

## 延伸阅读

- [Attention Is All You Need（Transformer 原论文）](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer（图文详解）](https://jalammar.github.io/illustrated-transformer/)
- [Anthropic 官方文档](https://docs.anthropic.com/en/docs/welcome)
