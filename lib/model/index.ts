import { mockReport } from "@/lib/mockReport";
import type { DiagnosisInput, StudyReport } from "@/lib/types";

export async function callModel(input: DiagnosisInput): Promise<StudyReport> {
  const provider = process.env.AI_PROVIDER || "mock";

  if (provider === "mock") {
    return mockReport(input.subject, input.chapter);
  }

  throw new Error(`模型 provider「${provider}」尚未接入。请先使用 AI_PROVIDER=mock 运行 MVP。`);
}
