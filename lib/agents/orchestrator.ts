import { mockReport } from "@/lib/mockReport";
import type { DiagnosisInput, StudyReport } from "@/lib/types";
import { callModel } from "@/lib/model";

export async function runDiagnosis(input: DiagnosisInput): Promise<StudyReport> {
  if (!input.question || !input.question.trim()) {
    throw new Error("请先输入题目内容");
  }

  const provider = process.env.AI_PROVIDER || "mock";

  if (provider === "mock") {
    return mockReport(input.subject, input.chapter);
  }

  return callModel(input);
}
