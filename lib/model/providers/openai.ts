import { callOpenAICompatibleModel } from "@/lib/model/providers/openaiCompatible";
import type { ModelProvider } from "@/lib/model/types";

export const openaiProvider: ModelProvider = {
  name: "openai",
  async diagnose(input) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("缺少 OPENAI_API_KEY。请在 Vercel 环境变量中配置，或改用 AI_PROVIDER=mock。");
    }

    return callOpenAICompatibleModel(input, {
      apiKey,
      baseUrl: process.env.OPENAI_BASE_URL || "https://api.openai.com/v1",
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      providerName: "OpenAI"
    });
  }
};
