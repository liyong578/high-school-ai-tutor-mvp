import { mockReport } from "@/lib/mockReport";
import type { ModelProvider } from "@/lib/model/types";

export const mockProvider: ModelProvider = {
  name: "mock",
  async diagnose(input) {
    return mockReport(input.subject, input.chapter);
  }
};
