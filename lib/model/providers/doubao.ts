import type { ModelProvider } from "@/lib/model/types";

export const doubaoProvider: ModelProvider = {
  name: "doubao",
  async diagnose() {
    throw new Error("豆包 Doubao 模型接口已预留，尚未接入真实 API。");
  }
};
