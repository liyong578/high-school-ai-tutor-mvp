import type { ModelProvider } from "@/lib/model/types";

export const qwenProvider: ModelProvider = {
  name: "qwen",
  async diagnose() {
    throw new Error("通义千问 provider 预留完成，待接入真实 API。");
  }
};
