import type { DiagnosisInput, StudyReport } from "@/lib/types";

export type ModelProvider = {
  name: string;
  diagnose(input: DiagnosisInput): Promise<StudyReport>;
};
