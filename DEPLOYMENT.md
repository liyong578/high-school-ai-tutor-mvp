# 不依赖本地 Node 的部署步骤

这个项目不需要你在本地运行 `npm install`。Vercel 会在云端自动安装依赖、构建并部署。

## Vercel 部署

1. 打开 Vercel。
2. 点击 **Add New → Project**。
3. 选择 GitHub 仓库 `liyong578/high-school-ai-tutor-mvp`。
4. Framework Preset 保持 **Next.js**。
5. Build Command 使用默认值或保持：

```txt
npm run build
```

6. Install Command 使用默认值或保持：

```txt
npm install
```

7. 如果只是演示，添加环境变量：

```txt
AI_PROVIDER=mock
```

8. 如果要调用真实 DeepSeek API，添加环境变量：

```txt
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat
```

9. 点击 **Deploy**。

部署完成后，Vercel 会给你一个在线访问地址。

## 模型支持状态

- Mock：已支持，不需要 API Key
- DeepSeek：已支持，走后端 API 调用
- 通义千问：预留 provider 文件，尚未接入真实调用
- OpenAI：预留 provider 文件，尚未接入真实调用
- Claude：预留 provider 文件，尚未接入真实调用
- Gemini：预留 provider 文件，尚未接入真实调用

## 安全说明

API Key 只放在 Vercel 后端环境变量里，不要写入前端代码，不要提交 `.env` 或 `.env.local`。
