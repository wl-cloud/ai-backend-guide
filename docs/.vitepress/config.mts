import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI 后端入门手册',
  description: '面向零基础新手的 AI 后端与大模型应用开发术语词典与方法论指南',
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: 'AI后端,大模型应用开发,LLM,RAG,Agent,向量数据库,提示词,微调,术语词典,方法论' }],
    ['meta', { name: 'theme-color', content: '#2563EB' }],
    ['meta', { property: 'og:title', content: 'AI 后端入门手册' }],
    ['meta', { property: 'og:description', content: '面向零基础新手的 AI 后端与大模型应用开发术语词典与方法论指南' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '术语词典', link: '/terms/' },
      { text: '方法论', link: '/guides/' },
    ],
    sidebar: {
      '/terms/': [
        {
          text: '术语词典',
          items: [
            { text: '总览', link: '/terms/' },
            {
              text: '模型与推理',
              link: '/terms/model/',
              items: [
                { text: 'LLM', link: '/terms/model/llm' },
                { text: 'Token', link: '/terms/model/token' },
                { text: '上下文窗口', link: '/terms/model/context-window' },
                { text: '推理', link: '/terms/model/inference' },
                { text: '温度 / Top-p', link: '/terms/model/temperature' },
                { text: '多模态', link: '/terms/model/multimodal' },
              ],
            },
            {
              text: '提示与交互',
              link: '/terms/prompt/',
              items: [
                { text: 'Prompt', link: '/terms/prompt/prompt' },
                { text: 'System Prompt', link: '/terms/prompt/system-prompt' },
                { text: 'Few-shot', link: '/terms/prompt/few-shot' },
                { text: '流式输出', link: '/terms/prompt/streaming' },
                { text: '工具调用', link: '/terms/prompt/function-calling' },
                { text: '结构化输出', link: '/terms/prompt/structured-output' },
                { text: '上下文注入', link: '/terms/prompt/context-injection' },
              ],
            },
            {
              text: 'RAG 与检索',
              link: '/terms/rag/',
              items: [
                { text: 'RAG', link: '/terms/rag/rag' },
                { text: 'Embedding', link: '/terms/rag/embedding' },
                { text: '向量数据库', link: '/terms/rag/vector-db' },
                { text: '分块 Chunking', link: '/terms/rag/chunking' },
                { text: '重排 Rerank', link: '/terms/rag/rerank' },
                { text: '混合检索', link: '/terms/rag/hybrid-search' },
                { text: '语义缓存', link: '/terms/rag/semantic-cache' },
                { text: '知识库', link: '/terms/rag/knowledge-base' },
              ],
            },
            {
              text: 'Agent 智能体',
              link: '/terms/agent/',
              items: [
                { text: 'Agent', link: '/terms/agent/agent' },
                { text: 'ReAct 模式', link: '/terms/agent/react' },
                { text: '多智能体', link: '/terms/agent/multi-agent' },
                { text: 'MCP', link: '/terms/agent/mcp' },
                { text: '记忆 Memory', link: '/terms/agent/memory' },
              ],
            },
            {
              text: '微调与训练',
              link: '/terms/finetune/',
              items: [
                { text: '微调 Fine-tuning', link: '/terms/finetune/fine-tuning' },
                { text: 'LoRA', link: '/terms/finetune/lora' },
                { text: '蒸馏 Distillation', link: '/terms/finetune/distillation' },
                { text: '对齐 SFT/RLHF', link: '/terms/finetune/alignment' },
              ],
            },
            {
              text: '架构与工程',
              link: '/terms/arch/',
              items: [
                { text: 'API 网关', link: '/terms/arch/api-gateway' },
                { text: '编排 Orchestration', link: '/terms/arch/orchestration' },
                { text: '限流 Rate Limiting', link: '/terms/arch/rate-limiting' },
                { text: '可观测性', link: '/terms/arch/observability' },
                { text: '负载均衡 / 灰度', link: '/terms/arch/load-balancing' },
                { text: 'FastAPI', link: '/terms/arch/fastapi' },
              ],
            },
            {
              text: '评测与安全',
              link: '/terms/eval/',
              items: [
                { text: '幻觉 Hallucination', link: '/terms/eval/hallucination' },
                { text: '评测 Evaluation', link: '/terms/eval/evaluation' },
                { text: '护栏 Guardrails', link: '/terms/eval/guardrails' },
                { text: '提示注入', link: '/terms/eval/prompt-injection' },
                { text: '红队测试', link: '/terms/eval/red-teaming' },
              ],
            },
            {
              text: 'LLMOps 与成本',
              link: '/terms/llmops/',
              items: [
                { text: 'LLMOps', link: '/terms/llmops/llmops' },
                { text: '模型路由', link: '/terms/llmops/model-routing' },
                { text: '成本优化', link: '/terms/llmops/cost-optimization' },
                { text: '监控告警', link: '/terms/llmops/monitoring' },
              ],
            },
          ],
        },
      ],
      '/guides/': [
        {
          text: '方法论',
          items: [
            { text: '总览', link: '/guides/' },
            { text: '从 0 到 1 做 LLM 应用', link: '/guides/llm-app-from-zero' },
            { text: 'RAG 落地方法论', link: '/guides/rag-playbook' },
            { text: 'RAG 拒答/兜底', link: '/guides/rag-fallback' },
            { text: 'Agent 设计方法论', link: '/guides/agent-design' },
            { text: '评估驱动开发', link: '/guides/eval-driven' },
          ],
        },
      ],
    },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: { message: '面向零基础新手的 AI 后端入门知识站' },
  },
})
