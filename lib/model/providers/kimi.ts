import { mockReport } from "@/lib/mockReport";
import { callOpenAICompatibleModel } from "@/lib/model/providers/openaiCompatible";
import type { ModelProvider } from "@/lib/model/types";

export const kimiProvider: ModelProvider = {
  name: "kimi",
  async diagnose(input) {
    const apiKey = process.env.KIMI_API_KEY;

    if (!apiKey) {
      return mockReport(input.subject, input.chapter);
    }

    return callOpenAICompatibleModel(input, {
      apiKey,
      baseUrl: process.env.KIMI_BASE_URL || "https://api.moonshot.cn/v1",
      model: process.env.KIMI_MODEL || "moonshot-v1-8k",
      providerName: "Kimi / Moonshot"
    });
  }
};
