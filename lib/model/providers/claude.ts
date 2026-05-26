import type { ModelProvider } from "@/lib/model/types";

export const claudeProvider: ModelProvider = {
  name: "claude",
  async diagnose() {
    throw new Error("Claude provider 预留完成，待接入真实 API。");
  }
};
