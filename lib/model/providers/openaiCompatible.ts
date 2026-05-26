import type { DiagnosisInput, StudyReport } from "@/lib/types";

type OpenAICompatibleOptions = {
  apiKey: string;
  baseUrl: string;
  model: string;
  providerName: string;
};

export async function callOpenAICompatibleModel(
  input: DiagnosisInput,
  options: OpenAICompatibleOptions
): Promise<StudyReport> {
  const response = await fetch(`${options.baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: options.model,
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: buildSystemPrompt(input) },
        { role: "user", content: buildUserPrompt(input) }
      ]
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`${options.providerName} API 调用失败：${response.status} ${detail.slice(0, 240)}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error(`${options.providerName} API 没有返回可解析的学习报告。`);
  }

  return normalizeReport(JSON.parse(content));
}

function buildSystemPrompt(input: DiagnosisInput) {
  const subjectName = input.subject === "physics" ? "物理" : "化学";
  const subjectFocus =
    input.subject === "physics"
      ? "重点关注研究对象、受力分析、运动过程、能量关系、动量关系、电场、磁场、电路、公式推导。"
      : "重点关注反应类型、条件变化、平衡移动、离子关系、电极判断、实验现象、方程式、氧化还原。";

  return [
    `你是“高中物化 AI 学习陪练系统”的多智能体编排器，当前科目是${subjectName}。`,
    "你需要模拟 6 个角色协作：知识点识别官、概念讲解官、解题教练官、错因诊断官、同类题出题官、学习报告官。",
    subjectFocus,
    "面向中国高二学生，基础中等或偏弱。语言要短句、清爽、卡片式，不要堆大段文字。",
    "必须只输出 JSON，不要 Markdown，不要解释 JSON 外的内容。",
    "JSON 顶层结构必须严格包含：topicCard、conceptCard、solutionSteps、errorDiagnosis、practiceQuestions、reviewAdvice。",
    "solutionSteps 必须包含 Step 1 找条件、Step 2 判断考点、Step 3 选择方法、Step 4 列式/推理、Step 5 总结套路。",
    "practiceQuestions 必须生成 3 道同类题，每道包含 question、hint、answer、commonTrap。"
  ].join("\n");
}

function buildUserPrompt(input: DiagnosisInput) {
  return JSON.stringify(
    {
      subject: input.subject === "physics" ? "物理" : "化学",
      chapter: input.chapter || "不确定",
      question: input.question,
      studentAnswer: input.studentAnswer || "学生未填写答案或卡住点",
      outputShape: {
        topicCard: { subject: "物理或化学", chapter: "章节", knowledgePoints: ["知识点1", "知识点2"], difficulty: "基础/中等/较难" },
        conceptCard: { oneSentence: "一句话解释", lifeAnalogy: "生活类比", formulaMeaning: "公式或关系式含义", commonMistakes: ["常见误区"], examFocus: "考试怎么考" },
        solutionSteps: [
          { name: "Step 1 找条件", content: "短句" },
          { name: "Step 2 判断考点", content: "短句" },
          { name: "Step 3 选择方法", content: "短句" },
          { name: "Step 4 列式/推理", content: "短句" },
          { name: "Step 5 总结套路", content: "短句" }
        ],
        errorDiagnosis: { tags: ["错因标签"], reason: "错误原因", correctUnderstanding: "正确理解", fixMethod: "改正方法" },
        practiceQuestions: [{ question: "同类题", hint: "提示", answer: "答案", commonTrap: "易错点" }],
        reviewAdvice: { weakPoint: "本次薄弱点", nextStep: "下一步复习建议", trainingDirection: "推荐训练方向" }
      }
    },
    null,
    2
  );
}

function normalizeReport(raw: StudyReport): StudyReport {
  return {
    topicCard: raw.topicCard,
    conceptCard: raw.conceptCard,
    solutionSteps: raw.solutionSteps,
    errorDiagnosis: raw.errorDiagnosis,
    practiceQuestions: raw.practiceQuestions,
    reviewAdvice: raw.reviewAdvice
  };
}
