# AI 后端入门手册

面向零基础新手的 **AI 后端 / 大模型应用开发** 知识站：术语词典 + 方法论。

在线访问：**https://ai-backend-guide.vercel.app**

## 内容结构

### 术语词典（45 篇，8 大知识域）

| 分类 | 词条数 | 覆盖内容 |
|---|---|---|
| 模型与推理 | 6 | LLM、Token、上下文窗口、推理、温度/Top-p、多模态 |
| 提示与交互 | 7 | Prompt、System Prompt、Few-shot、流式输出、工具调用、结构化输出、上下文注入 |
| RAG 与检索 | 8 | RAG、Embedding、向量数据库、分块、重排、混合检索、语义缓存、知识库 |
| Agent 智能体 | 5 | Agent、ReAct、多智能体、MCP、记忆 |
| 微调与训练 | 4 | 微调、LoRA、蒸馏、对齐（SFT/RLHF） |
| 架构与工程 | 6 | API 网关、编排、限流、可观测性、负载均衡/灰度、FastAPI |
| 评测与安全 | 5 | 幻觉、评测、护栏、提示注入、红队测试 |
| LLMOps 与成本 | 4 | LLMOps、模型路由、成本优化、监控告警 |

每个词条统一采用 7 段模板：**一句话定义 → 详细解释 → 生活化类比 → 代码示例 → 常见误区 → 相关词条 → 延伸阅读**。

每个大分类另有独立的「模块总览页」，讲清该模块包含什么、在 AI 后端开发中的具体作用，并配有跳转到各词条的按钮。

### 方法论（5 篇）

1. 从 0 到 1 做 LLM 应用
2. RAG 落地方法论
3. **RAG 拒答 / 兜底策略**（置信度阈值 → 分场景兜底 → 提示词硬约束）
4. Agent 设计方法论
5. 评估驱动开发

## 本地开发

```bash
npm install        # 安装依赖
npm run docs:dev   # 本地开发（热更新）
npm run docs:build # 构建静态产物到 docs/.vitepress/dist
npm run docs:preview # 预览构建产物
```

## 技术栈

- **VitePress 1.6** —— 静态站点生成、本地搜索、SEO 友好
- 自定义主题（`docs/.vitepress/theme/`）：科技感配色 + Metro 卡片风格
- 部署：Vercel（`vercel.json` 已配置 `cleanUrls`）

## 目录结构

```
docs/
├── index.md                 # 首页（含知识地图）
├── terms/                   # 术语词典
│   ├── index.md             # 分类索引（卡片网格）
│   └── <分类>/               # 每个分类：index.md（模块总览）+ 各词条
└── guides/                  # 方法论
```
