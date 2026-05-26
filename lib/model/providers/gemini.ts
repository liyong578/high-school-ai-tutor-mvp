import type { ModelProvider } from "@/lib/model/types";

export const geminiProvider: ModelProvider = {
  name: "gemini",
  async diagnose() {
    throw new Error("Gemini provider 预留完成，待接入真实 API。");
  }
};
