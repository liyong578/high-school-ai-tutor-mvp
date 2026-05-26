import type { DiagnosisInput, StudyReport } from "@/lib/types";
import { claudeProvider } from "@/lib/model/providers/claude";
import { deepseekProvider } from "@/lib/model/providers/deepseek";
import { doubaoProvider } from "@/lib/model/providers/doubao";
import { geminiProvider } from "@/lib/model/providers/gemini";
import { hunyuanProvider } from "@/lib/model/providers/hunyuan";
import { kimiProvider } from "@/lib/model/providers/kimi";
import { mockProvider } from "@/lib/model/providers/mock";
import { openaiProvider } from "@/lib/model/providers/openai";
import { qwenProvider } from "@/lib/model/providers/qwen";
import { zhipuProvider } from "@/lib/model/providers/zhipu";

export async function callModel(input: DiagnosisInput): Promise<StudyReport> {
  const provider = (process.env.AI_PROVIDER || "mock").toLowerCase();

  const providers = {
    mock: mockProvider,
    deepseek: deepseekProvider,
    kimi: kimiProvider,
    openai: openaiProvider,
    qwen: qwenProvider,
    doubao: doubaoProvider,
    zhipu: zhipuProvider,
    hunyuan: hunyuanProvider,
    claude: claudeProvider,
    gemini: geminiProvider
  };

  const selectedProvider = providers[provider as keyof typeof providers];

  if (!selectedProvider) {
    throw new Error(`不支持的 AI_PROVIDER「${provider}」。`);
  }

  return selectedProvider.diagnose(input);
}
