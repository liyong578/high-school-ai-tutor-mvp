export type Subject = "physics" | "chemistry";

export type DiagnosisInput = {
  subject: Subject;
  chapter?: string;
  question: string;
  studentAnswer?: string;
};

export type StudyReport = {
  topicCard: {
    subject: "物理" | "化学";
    chapter: string;
    knowledgePoints: string[];
    difficulty: string;
  };
  conceptCard: {
    oneSentence: string;
    lifeAnalogy: string;
    formulaMeaning: string;
    commonMistakes: string[];
    examFocus: string;
  };
  solutionSteps: Array<{
    name: string;
    content: string;
  }>;
  errorDiagnosis: {
    tags: string[];
    reason: string;
    correctUnderstanding: string;
    fixMethod: string;
  };
  practiceQuestions: Array<{
    question: string;
    hint: string;
    answer: string;
    commonTrap: string;
  }>;
  reviewAdvice: {
    weakPoint: string;
    nextStep: string;
    trainingDirection: string;
  };
};
