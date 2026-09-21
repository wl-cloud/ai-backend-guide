---
title: LoRA（低秩适配）
description: LoRA 是什么、如何低成本地微调大模型
---

# LoRA（低秩适配）

::: tip 一句话定义
LoRA（Low-Rank Adaptation，低秩适配）是一种轻量微调方法：不改变原模型参数，只在旁边挂一小块可训练参数，用极低的成本让模型学会新任务。
:::

## 详细解释

全量微调要更新整个模型的几十亿参数，需要大量显存和算力。LoRA 的思路是"冻结原模型，只训练一小块附加矩阵"：

- 原模型参数**保持不变**；
- 在特定层插入低秩矩阵（参数量是原来的千分之一量级）；
- 训练时只更新这一小块。

好处：显存占用小、训练快、可以保存多个"LoRA 适配器"按需切换（同一个底座模型 + 不同 LoRA = 不同能力）。

## 生活化类比

全量微调像**重新装修整栋楼**，LoRA 像**只换几个可插拔的插件模块**——主体不动，装哪个模块就具备哪种新功能。

## 代码示例

```python
# 用 PEFT 库加载 LoRA 配置（示意）
from peft import LoraConfig, get_peft_model
config = LoraConfig(r=8, lora_alpha=16, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)   # 只有 LoRA 部分可训练
```

## 常见误区

- ❌ 「LoRA 是重新训练模型」→ 它冻结原模型，只训练极小附加参数。
- ❌ 「LoRA 能补新知识」→ 它更适合学风格/格式/任务模式，新知识还是靠 RAG。
- ❌ 「r 越大越好」→ rank（r）并非越大越好，要按任务调，避免过拟合。

## 相关词条

- [微调 Fine-tuning](/terms/finetune/fine-tuning.md) · [对齐 SFT/RLHF](/terms/finetune/alignment.md) · [LLM](/terms/model/llm.md)

## 延伸阅读

- [LoRA 原论文：Low-Rank Adaptation](https://arxiv.org/abs/2106.09685)
- [InstructGPT 论文（SFT + RLHF 对齐）](https://arxiv.org/abs/2203.02155)
