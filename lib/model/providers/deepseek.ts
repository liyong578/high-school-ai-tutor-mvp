import type { ModelProvider } from "@/lib/model/types";

export const deepseekProvider: ModelProvider = {
  name: "deepseek",
  async diagnose() {
    throw new Error("DeepSeek provider 预留完成，待接入真实 API。");
  }
};
