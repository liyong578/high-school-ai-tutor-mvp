import type { DiagnosisInput, StudyReport } from "@/lib/types";
import { deepseekProvider } from "@/lib/model/providers/deepseek";
import { mockProvider } from "@/lib/model/providers/mock";

export async function callModel(input: DiagnosisInput): Promise<StudyReport> {
  const provider = (process.env.AI_PROVIDER || "mock").toLowerCase();

  if (provider === "mock") {
    return mockProvider.diagnose(input);
  }

  if (provider === "deepseek") {
    return deepseekProvider.diagnose(input);
  }

  throw new Error(`模型 provider「${provider}」尚未接入。请先使用 AI_PROVIDER=mock 或 AI_PROVIDER=deepseek。`);
}
