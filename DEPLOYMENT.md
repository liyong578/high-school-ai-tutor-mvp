# 不依赖本地 Node 的部署步骤

这个项目不需要你在本地运行 `npm install`。Vercel 会在云端自动安装依赖、构建并部署。

## Vercel 部署

1. 打开 Vercel。
2. 点击 **Add New → Project**。
3. 选择 GitHub 仓库 `liyong578/high-school-ai-tutor-mvp`。
4. Framework Preset 保持 **Next.js**。
5. Build Command 使用默认值或保持 `npm run build`。
6. Install Command 使用默认值或保持 `npm install`。
7. 添加环境变量。
8. 点击 **Deploy**。

## 推荐配置

演示模式：

```txt
AI_PROVIDER=mock
```

真实 DeepSeek：

```txt
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat
```

真实 Kimi / Moonshot：

```txt
AI_PROVIDER=kimi
KIMI_API_KEY=你的 Moonshot API Key
KIMI_BASE_URL=https://api.moonshot.cn/v1
KIMI_MODEL=moonshot-v1-8k
```

真实 OpenAI：

```txt
AI_PROVIDER=openai
OPENAI_API_KEY=你的 OpenAI API Key
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4.1-mini
```

## 预留模型环境变量

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

## 模型支持状态

- Mock：已支持，不需要 API Key
- DeepSeek：已支持真实 API
- Kimi / Moonshot：已支持真实 API，缺 Key 自动 fallback 到 Mock
- OpenAI：已支持真实 API
- 通义千问：预留 provider，尚未接入真实调用
- 豆包：预留 provider，尚未接入真实调用
- 智谱：预留 provider，尚未接入真实调用
- 腾讯混元：预留 provider，尚未接入真实调用
- Claude：预留 provider，尚未接入真实调用
- Gemini：预留 provider，尚未接入真实调用

## 安全说明

API Key 只放在 Vercel 后端环境变量里，不要写入前端代码，不要提交 `.env` 或 `.env.local`。
