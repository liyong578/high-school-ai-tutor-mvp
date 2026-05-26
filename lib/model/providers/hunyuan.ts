import type { ModelProvider } from "@/lib/model/types";

export const hunyuanProvider: ModelProvider = {
  name: "hunyuan",
  async diagnose() {
    throw new Error("腾讯混元 Hunyuan 模型接口已预留，尚未接入真实 API。");
  }
};
