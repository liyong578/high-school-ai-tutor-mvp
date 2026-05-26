import type { ModelProvider } from "@/lib/model/types";

export const openaiProvider: ModelProvider = {
  name: "openai",
  async diagnose() {
    throw new Error("OpenAI provider 预留完成，待接入真实 API。");
  }
};
