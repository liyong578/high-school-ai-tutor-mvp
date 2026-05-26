import type { StudyReport, Subject } from "@/lib/types";

export function mockReport(subject: Subject, chapter = "不确定"): StudyReport {
  if (subject === "chemistry") {
    return {
      topicCard: {
        subject: "化学",
        chapter: chapter === "不确定" ? "化学平衡" : chapter,
        knowledgePoints: ["平衡移动", "浓度变化", "勒夏特列原理"],
        difficulty: "中等"
      },
      conceptCard: {
        oneSentence: "平衡移动就是体系受到改变后，反应会朝减弱这种改变的方向调整。",
        lifeAnalogy: "像排队窗口突然少了一个，队伍会重新分配，让拥挤程度缓和一些。",
        formulaMeaning: "Q 与 K 比较：Q < K 正向进行，Q > K 逆向进行，Q = K 达到平衡。",
        commonMistakes: ["把反应速率变快误认为平衡一定正向移动", "只看某一种物质，不看整体条件变化"],
        examFocus: "常考改变浓度、压强、温度后，判断平衡移动方向和各量变化。"
      },
      solutionSteps: [
        { name: "Step 1 找条件", content: "先找题目改变了什么：浓度、压强、温度还是催化剂。" },
        { name: "Step 2 判断考点", content: "判断是否考平衡移动，还是只考速率变化。" },
        { name: "Step 3 选择方法", content: "用勒夏特列原理或 Q、K 比较来判断方向。" },
        { name: "Step 4 列式/推理", content: "写出改变后 Q 的变化，再和 K 比较。" },
        { name: "Step 5 总结套路", content: "先看改变条件，再看体系如何减弱改变，最后判断量的变化。" }
      ],
      errorDiagnosis: {
        tags: ["概念混淆", "条件漏看"],
        reason: "你可能把速率变化和平衡移动混在一起，没有先判断改变的是哪个条件。",
        correctUnderstanding: "催化剂只改变到达平衡的快慢，不改变平衡位置。",
        fixMethod: "每次先写出改变条件，再问自己：这个改变会让 Q 怎么变。"
      },
      practiceQuestions: [
        { question: "某可逆反应达到平衡后，增大反应物浓度，平衡如何移动？", hint: "反应物变多，体系会消耗这部分增加。", answer: "平衡向正反应方向移动。", commonTrap: "不要只说速率变快，要说明平衡方向。" },
        { question: "恒温下，向平衡体系中加入催化剂，平衡常数和平衡位置如何变化？", hint: "催化剂同时加快正逆反应速率。", answer: "平衡常数不变，平衡位置不移动。", commonTrap: "催化剂不改变平衡转化率。" },
        { question: "若 Q 大于 K，反应会向哪个方向进行？", hint: "Q 偏大说明生成物相对过多。", answer: "反应向逆反应方向进行，直到 Q = K。", commonTrap: "Q 和 K 的比较方向容易反。" }
      ],
      reviewAdvice: {
        weakPoint: "对平衡移动和速率变化的区别不够稳。",
        nextStep: "先复习 Q、K 比较，再做 5 道条件改变类题。",
        trainingDirection: "重点练浓度变化、催化剂、温度变化三类判断题。"
      }
    };
  }

  return {
    topicCard: {
      subject: "物理",
      chapter: chapter === "不确定" ? "电场" : chapter,
      knowledgePoints: ["电场力做功", "电势差", "动能定理"],
      difficulty: "中等"
    },
    conceptCard: {
      oneSentence: "电场力做功主要看电荷量和电势差，不看具体路径。",
      lifeAnalogy: "像从高处滑到低处，重力做功看高度差，不看路怎么绕。",
      formulaMeaning: "W = qU，表示电场力做功等于电荷量乘两点间电势差。",
      commonMistakes: ["把电场强度 E 和电势差 U 混为一谈", "忘记电荷正负会影响方向判断"],
      examFocus: "常考带电粒子在电场中的加速、减速和能量转化。"
    },
    solutionSteps: [
      { name: "Step 1 找条件", content: "找电荷量、电势差、初末速度，以及是否忽略重力。" },
      { name: "Step 2 判断考点", content: "看到电势差和速度变化，优先想到电场力做功与动能定理。" },
      { name: "Step 3 选择方法", content: "用 W = qU 和 W = ΔEk 建立联系。" },
      { name: "Step 4 列式/推理", content: "把电场力做功代入动能变化，注意正负号和单位。" },
      { name: "Step 5 总结套路", content: "电场加速类题：先看能量变化，再决定是否需要运动学公式。" }
    ],
    errorDiagnosis: {
      tags: ["公式乱套", "符号判断错误"],
      reason: "你可能直接套 E = U / d，却没有先判断题目真正考的是做功和能量变化。",
      correctUnderstanding: "电场力做功由 W = qU 描述，路径和板间距离不是每题都需要。",
      fixMethod: "遇到速度变化，先写动能定理；遇到电势差，再写 W = qU。"
    },
    practiceQuestions: [
      { question: "一个带正电粒子从电势高处运动到电势低处，电场力做正功还是负功？", hint: "正电荷受力方向沿电势降低方向。", answer: "电场力做正功，粒子动能增大。", commonTrap: "不要只看电势高低，要结合电荷正负。" },
      { question: "电荷量为 q 的粒子经过电势差 U 的电场，电场力做功是多少？", hint: "直接使用电场力做功公式。", answer: "W = qU，符号由 q 和 U 的取值共同决定。", commonTrap: "把 U 写成 Ed 前要确认是否为匀强电场。" },
      { question: "粒子只受电场力，从静止开始加速，如何求末速度？", hint: "把电场力做功转化为动能。", answer: "qU = 1/2 mv²，所以 v = √(2qU/m)。", commonTrap: "漏掉初速度为零这个条件，或忽略 qU 必须对应动能增加。" }
    ],
    reviewAdvice: {
      weakPoint: "电势差、做功和动能变化之间的关系还不够清晰。",
      nextStep: "先复习 W = qU 与动能定理，再做 3 道带电粒子加速题。",
      trainingDirection: "重点练电场力做功、正负电荷方向判断、能量守恒类题。"
    }
  };
}
