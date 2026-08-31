---
title: Token（词元）
description: Token 是什么、为什么它是理解大模型计费和上下文的基础单位
---

# Token（词元）

::: tip 一句话定义
Token（词元）是大模型处理文本的最小单位。模型不按"字"或"词"理解文本，而是先把文本切成一个个 token 再处理。计费、上下文长度、模型输入输出都按 token 算。
:::

## 详细解释

文本进入模型前，要先被"分词器（Tokenizer）"切成 token。一个 token 大约对应：

- 英文：约 4 个字符，或 0.75 个单词；
- 中文：通常 1~2 个字一个 token。

比如 `"你好，世界"` 可能被切成 `["你", "好", "，", "世界"]` 等若干个 token。

对后端开发，token 有三个关键意义：

1. **计费**：API 按"输入 token + 输出 token"收费。
2. **上下文窗口**：模型一次能处理的 token 总数有上限（见[上下文窗口](/terms/model/context-window.md)）。
3. **成本估算**：`总 token × 单价` 就是你每次调用的成本。

## 生活化类比

Token 就像**乐高积木的颗粒**：一段话被拆成一块块积木，模型逐块拼出下一块。块数越多，拼装（计算）的成本越高。

## 代码示例

```python
# 用 tiktoken 估算文本的 token 数
import tiktoken
enc = tiktoken.get_encoding("cl100k_base")
text = "什么是 RAG？"
print(len(enc.encode(text)))   # 输出 token 数量
```

## 常见误区

- ❌ 「一个 token = 一个汉字」→ 中英文切分规则不同，中文 1~2 字/token，英文约 0.75 词/token。
- ❌ 「只算输出 token」→ 输入（含上下文、历史对话）同样计费，长上下文很烧钱。
- ❌ 「token 数和字数成正比」→ 不同模型/分词器切法不同，要用对应分词器算。

## 相关词条

- [LLM](/terms/model/llm.md) · [上下文窗口](/terms/model/context-window.md) · [成本优化](/terms/llmops/cost-optimization.md)

## 延伸阅读

- OpenAI：Tokenizer 在线工具与文档
