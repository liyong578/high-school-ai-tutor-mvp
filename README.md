# 高中物化 AI 学习陪练系统 MVP

面向中文区高二学生的 H5 / 网站 MVP。它不是搜题工具，而是围绕题目理解、错因诊断、同类训练和学习报告的 AI 陪练原型。

## 已实现功能

- 首页：物理陪练、化学陪练两个入口
- 题目分析页：科目选择、题目输入、学生答案 / 卡住点输入、开始诊断
- 学习报告页：本题考点、概念讲解、解题步骤、错因诊断、同类训练、复习建议
- Mock 模式：没有 API Key 也能生成示例报告
- DeepSeek、Kimi / Moonshot、OpenAI 模式：具备真实 API 接入结构
- 通义千问、豆包、智谱、腾讯混元、Claude、Gemini：已创建 provider，暂为预留接口
- 后端 API：`POST /api/diagnose`
- 多智能体 prompts：物理和化学分别维护

## AI_PROVIDER 支持值

```txt
mock
deepseek
kimi
openai
qwen
doubao
zhipu
hunyuan
claude
gemini
```

## Mock

```txt
AI_PROVIDER=mock
```

## DeepSeek

```txt
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat
```

## Kimi / Moonshot

没有 `KIMI_API_KEY` 时会自动 fallback 到 Mock。

```txt
AI_PROVIDER=kimi
KIMI_API_KEY=你的 Moonshot API Key
KIMI_BASE_URL=https://api.moonshot.cn/v1
KIMI_MODEL=moonshot-v1-8k
```

## OpenAI

模型名不写死，后续可以配置 GPT-5.5 或其他 OpenAI 模型。

```txt
AI_PROVIDER=openai
OPENAI_API_KEY=你的 OpenAI API Key
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4.1-mini
```

## 预留 Provider

这些 provider 文件已创建，当前会返回“该模型接口已预留，尚未接入真实 API。”类提示。

```txt
AI_PROVIDER=qwen
QWEN_API_KEY=
QWEN_BASE_URL=
QWEN_MODEL=

AI_PROVIDER=doubao
DOUBAO_API_KEY=
DOUBAO_BASE_URL=
DOUBAO_MODEL=

AI_PROVIDER=zhipu
ZHIPU_API_KEY=
ZHIPU_BASE_URL=
ZHIPU_MODEL=

AI_PROVIDER=hunyuan
HUNYUAN_API_KEY=
HUNYUAN_BASE_URL=
HUNYUAN_MODEL=

AI_PROVIDER=claude
ANTHROPIC_API_KEY=

AI_PROVIDER=gemini
GEMINI_API_KEY=
```

API Key 只放在 `.env.local` 或 Vercel 环境变量中，不会暴露到前端。

## 不需要本地 Node

如果电脑没有 Node 环境，可以直接把项目推送到 GitHub，再交给 Vercel 云端自动安装依赖、构建和部署。

## 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 新建项目并导入仓库
3. Framework Preset 选择 Next.js
4. 配置所需环境变量
5. 点击 Deploy 或重新部署

## 目录说明

```txt
app/                  页面和 API
components/           前端组件
lib/                  报告类型、Mock 数据、多智能体编排、模型适配层
prompts/              物理 / 化学多智能体提示词
```
