---
title: 多模态（Multimodal）
description: 多模态是什么、模型如何同时理解文本、图像、音频等
---

# 多模态（Multimodal）

::: tip 一句话定义
多模态（Multimodal）指模型能同时理解多种信息形式——文本、图像、音频、视频——而不只处理文字。比如"给它一张图，问它图里有什么"。
:::

## 详细解释

传统模型只吃文本。多模态模型把图像、声音等也编码成模型能理解的表示（向量），和文本放在一起处理。典型能力：

- **图像理解**：识别图里内容、做 OCR、分析图表。
- **文生图**：根据文字描述生成图片（如 DALL·E、Midjourney）。
- **语音**：语音转文字（ASR）、文字转语音（TTS）。

对后端开发，多模态意味着请求/响应不再是纯文本：

- 请求里可能要传图片的 URL 或 base64 编码；
- 响应可能返回图片、音频等二进制数据；
- 成本和延迟通常比纯文本更高。

## 生活化类比

单模态模型像**只会读字的书呆子**，多模态模型像**一个既会看图、又会听声、还会说话的全能助手**。

## 代码示例

```python
# 图像理解：把图片 URL 和问题一起发给模型
resp = client.chat.completions.create(
    model="gpt-4o",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "这张发票的金额是多少？"},
            {"type": "image_url", "image_url": {"url": "https://example.com/invoice.png"}},
        ],
    }],
)
```

## 常见误区

- ❌ 「多模态 = 只会看图」→ 还包括音频、视频等多种模态。
- ❌ 「图片随便传」→ 图片要转成 URL 或 base64，且会显著增加 token 和成本。
- ❌ 「多模态模型什么都能干」→ 具体能力取决于模型，视频理解等仍相对受限。

## 相关词条

- [LLM](/terms/model/llm.md) · [Embedding](/terms/rag/embedding.md) · [RAG](/terms/rag/rag.md)

## 延伸阅读

- [CLIP：多模态图文对齐原论文](https://arxiv.org/abs/2103.00020)
- [GPT-4 技术报告](https://arxiv.org/abs/2303.08774)
