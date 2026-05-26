# 高中物化 AI 学习陪练系统 MVP

面向中文区高二学生的 H5 / 网站 MVP。它不是搜题工具，而是围绕题目理解、错因诊断、同类训练和学习报告的 AI 陪练原型。

## 已实现功能

- 首页：物理陪练、化学陪练两个入口
- 物理 / 化学直达页：`/physics`、`/chemistry`
- 题目分析页：科目选择、题目输入、学生答案 / 卡住点输入、开始诊断
- 学习报告页：本题考点、概念讲解、解题步骤、错因诊断、同类训练、复习建议
- 同类训练答案默认折叠
- Mock 模式：没有 API Key 也能生成示例报告
- DeepSeek 模式：配置后端环境变量后调用真实 DeepSeek API
- 后端 API：`POST /api/diagnose`
- 模型适配层：已支持 Mock、DeepSeek；预留通义千问、OpenAI、Claude、Gemini
- 多智能体 prompts：物理和化学分别维护

## 当前 AI 模式

默认是 Mock：

```txt
AI_PROVIDER=mock
```

启用 DeepSeek：

```txt
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat
```

API Key 只放在 `.env.local` 或 Vercel 环境变量中，不会暴露到前端。

## 不需要本地 Node

如果你的电脑没有 Node 环境，可以直接把项目上传到 GitHub，再交给 Vercel 云端自动安装依赖、构建和部署。

详细步骤见：

```txt
DEPLOYMENT.md
```

## 预览流程

1. 进入首页
2. 点击“物理陪练”或“化学陪练”
3. 粘贴题目，填写自己的答案或卡住点
4. 点击“开始诊断”
5. 查看卡片式学习报告

## 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 新建项目并导入仓库
3. Framework Preset 选择 Next.js
4. Vercel 会自动执行安装和构建
5. 环境变量先用 Mock：

```txt
AI_PROVIDER=mock
```

6. 如要接入真实 DeepSeek，再改为：

```txt
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat
```

7. 点击 Deploy 或重新部署

## 目录说明

```txt
app/                  页面和 API
components/           前端组件
lib/                  报告类型、Mock 数据、多智能体编排、模型适配层
prompts/              物理 / 化学多智能体提示词
```
