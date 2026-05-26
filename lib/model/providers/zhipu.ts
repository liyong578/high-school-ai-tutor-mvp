import type { ModelProvider } from "@/lib/model/types";

export const zhipuProvider: ModelProvider = {
  name: "zhipu",
  async diagnose() {
    throw new Error("智谱 GLM / Zhipu 模型接口已预留，尚未接入真实 API。");
  }
};
