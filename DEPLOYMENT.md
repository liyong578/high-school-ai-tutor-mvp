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

7. 添加环境变量：

```txt
AI_PROVIDER=mock
```

8. 点击 **Deploy**。

部署完成后，Vercel 会给你一个在线访问地址。

## 后续接入真实大模型

当前 MVP 默认使用 Mock 模式，不需要 API Key。

未来接入真实模型时，在 Vercel 的 **Project Settings → Environment Variables** 中添加对应变量。例如：

```txt
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的后端 API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat
```

API Key 只放在 Vercel 后端环境变量里，不会暴露到浏览器前端。
