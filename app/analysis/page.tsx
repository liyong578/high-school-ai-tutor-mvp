"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

const chapters = {
  physics: ["不确定", "力与运动", "能量动量", "电场", "磁场", "电路", "实验"],
  chemistry: ["不确定", "化学反应原理", "化学平衡", "电化学", "离子反应", "氧化还原", "实验"]
};

type Subject = "physics" | "chemistry";

export default function AnalysisPage() {
  return (
    <Suspense fallback={<main className="container">正在加载...</main>}>
      <AnalysisContent />
    </Suspense>
  );
}

function AnalysisContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") === "chemistry" ? "chemistry" : "physics";
  const [subject, setSubject] = useState<Subject>(initialSubject);
  const [chapter, setChapter] = useState("不确定");
  const [question, setQuestion] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const subjectName = subject === "physics" ? "物理" : "化学";
  const tips = useMemo(
    () =>
      subject === "physics"
        ? ["写清研究对象", "标出已知量", "说出卡在哪一步"]
        : ["写清反应条件", "标出离子或电极", "说出你混淆的地方"],
    [subject]
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!question.trim()) {
      setError("请先输入题目内容。");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, chapter, question, studentAnswer })
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "诊断失败，请稍后重试。");
      }

      sessionStorage.setItem("latestStudyReport", JSON.stringify(data.report));
      router.push("/report");
    } catch (err) {
      setError(err instanceof Error ? err.message : "诊断失败，请稍后重试。");
    } finally {
      setLoading(false);
    }
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
            <Link href="/">首页</Link>
            <Link href="/report">学习报告</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="report-header">
          <div>
            <p className="eyebrow">{subjectName} AI 陪练</p>
            <h1>把题目和卡住点交给陪练系统。</h1>
            <p className="lead">MVP 当前默认 Mock 模式，可直接生成示例学习报告。</p>
          </div>
        </div>

        <section className="form-wrap">
          <aside className="card panel">
            <h2>填写建议</h2>
            <div className="flow-list">
              {tips.map((tip, index) => (
                <div className="flow-item" key={tip}>
                  <span className="number">{index + 1}</span>
                  <strong>{tip}</strong>
                </div>
              ))}
            </div>
            <div className="hint-box" style={{ marginTop: 18 }}>
              不确定章节也可以提交。系统会先识别知识点，再生成诊断报告。
            </div>
          </aside>

          <form className="card panel" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="subject">科目选择</label>
              <select
                className="select"
                id="subject"
                value={subject}
                onChange={(event) => {
                  const next = event.target.value as Subject;
                  setSubject(next);
                  setChapter("不确定");
                }}
              >
                <option value="physics">物理</option>
                <option value="chemistry">化学</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="chapter">章节方向</label>
              <select className="select" id="chapter" value={chapter} onChange={(event) => setChapter(event.target.value)}>
                {chapters[subject].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="question">题目输入框</label>
              <textarea
                className="textarea"
                id="question"
                placeholder="请粘贴题目内容。可以包含选项、图像描述、已知条件。"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="studentAnswer">学生答案 / 卡住点输入框</label>
              <textarea
                className="textarea"
                id="studentAnswer"
                placeholder="写下你的答案、错误思路，或者卡住的地方。"
                value={studentAnswer}
                onChange={(event) => setStudentAnswer(event.target.value)}
              />
            </div>

            {error ? <p className="mistake">{error}</p> : null}
            <button className="button" disabled={loading} type="submit">
              {loading ? "正在诊断..." : "开始诊断"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
