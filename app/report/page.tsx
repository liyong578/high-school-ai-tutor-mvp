"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mockReport } from "@/lib/mockReport";
import type { StudyReport } from "@/lib/types";

export default function ReportPage() {
  const [report, setReport] = useState<StudyReport | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("latestStudyReport");
    setReport(stored ? JSON.parse(stored) : mockReport("physics", "不确定"));
  }, []);

  if (!report) {
    return <main className="container">正在加载学习报告...</main>;
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" href="/">
            <span className="brand-mark">AI</span>
            <span>高中物化 AI 学习陪练系统</span>
          </Link>
          <nav className="nav-links">
            <Link href="/analysis?subject=physics">重新诊断</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="report-header">
          <div>
            <p className="eyebrow">AI 学习报告</p>
            <h1>这道题的关键，不只在答案。</h1>
            <p className="lead">下面按考点、概念、步骤、错因和训练方向拆开看。</p>
          </div>
          <Link className="button secondary" href="/analysis">再诊断一题</Link>
        </div>

        <section className="report-grid">
          <article className="card report-card">
            <h2>本题考点卡</h2>
            <div className="kv-grid">
              <div className="kv"><span>科目</span><strong>{report.topicCard.subject}</strong></div>
              <div className="kv"><span>章节</span><strong>{report.topicCard.chapter}</strong></div>
              <div className="kv"><span>知识点</span><strong>{report.topicCard.knowledgePoints.join("、")}</strong></div>
              <div className="kv"><span>难度</span><strong>{report.topicCard.difficulty}</strong></div>
            </div>
          </article>

          <article className="card report-card">
            <h2>概念讲解卡</h2>
            <p><strong>一句话解释：</strong>{report.conceptCard.oneSentence}</p>
            <p><strong>生活类比：</strong>{report.conceptCard.lifeAnalogy}</p>
            <div className="formula">{report.conceptCard.formulaMeaning}</div>
            <div className="mistake">常见误区：{report.conceptCard.commonMistakes.join("；")}</div>
            <p><strong>考试怎么考：</strong>{report.conceptCard.examFocus}</p>
          </article>

          <article className="card report-card">
            <h2>解题步骤卡</h2>
            <ol className="step-list">
              {report.solutionSteps.map((step) => (
                <li key={step.name}>
                  <span className="step-name">{step.name}</span>
                  <span>{step.content}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="card report-card">
            <h2>错因诊断卡</h2>
            <div className="tag-list">
              {report.errorDiagnosis.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p><strong>错误原因：</strong>{report.errorDiagnosis.reason}</p>
            <p><strong>正确理解：</strong>{report.errorDiagnosis.correctUnderstanding}</p>
            <p><strong>改正方法：</strong>{report.errorDiagnosis.fixMethod}</p>
          </article>

          <article className="card report-card">
            <h2>同类训练卡</h2>
            <div className="practice-list">
              {report.practiceQuestions.map((item, index) => (
                <details key={item.question}>
                  <summary>同类题 {index + 1}</summary>
                  <p className="practice-body"><strong>题目：</strong>{item.question}</p>
                  <p className="practice-body"><strong>提示：</strong>{item.hint}</p>
                  <p className="practice-body"><strong>答案：</strong>{item.answer}</p>
                  <p className="mistake">易错点：{item.commonTrap}</p>
                </details>
              ))}
            </div>
          </article>

          <article className="card report-card">
            <h2>复习建议卡</h2>
            <p><strong>本次薄弱点：</strong>{report.reviewAdvice.weakPoint}</p>
            <p><strong>下一步复习建议：</strong>{report.reviewAdvice.nextStep}</p>
            <p><strong>推荐训练方向：</strong>{report.reviewAdvice.trainingDirection}</p>
          </article>
        </section>
      </div>
    </main>
  );
}
