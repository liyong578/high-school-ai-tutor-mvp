import Link from "next/link";

const subjects = [
  {
    href: "/physics",
    title: "物理陪练",
    icon: "力",
    className: "physics",
    desc: "适合受力分析、运动过程、能量动量、电场磁场和电路题。",
    tags: ["研究对象", "受力分析", "运动过程", "公式推导"]
  },
  {
    href: "/chemistry",
    title: "化学陪练",
    icon: "化",
    className: "chemistry",
    desc: "适合平衡移动、电化学、离子关系、氧化还原和实验题。",
    tags: ["反应类型", "平衡移动", "电极判断", "实验现象"]
  }
];

export default function HomePage() {
  return (
    <main className="shell">
      <Header />
      <div className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">高二物化 · AI 学习陪练</p>
            <h1>不是搜答案，而是陪你搞懂为什么错。</h1>
            <p className="lead">
              输入题目和你的卡住点，系统会识别考点、讲清概念、拆解步骤、诊断错因，并生成同类训练和复习建议。
            </p>
            <div className="subject-grid">
              {subjects.map((subject) => (
                <Link className="card subject-card" href={subject.href} key={subject.title}>
                  <div className="subject-title">
                    <span className={`subject-icon ${subject.className}`}>{subject.icon}</span>
                    {subject.title}
                  </div>
                  <p className="lead" style={{ fontSize: 15 }}>{subject.desc}</p>
                  <div className="tag-list">
                    {subject.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="button secondary">进入陪练</span>
                </Link>
              ))}
            </div>
          </div>
          <aside className="card flow-card">
            <h2>一次诊断，会做这些事</h2>
            <div className="flow-list">
              {["输入题目", "说出卡点", "AI 诊断错因", "生成同类训练", "形成学习报告"].map((item, index) => (
                <div className="flow-item" key={item}>
                  <span className="number">{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">AI</span>
          <span>高中物化 AI 学习陪练系统</span>
        </Link>
        <nav className="nav-links">
          <Link href="/analysis?subject=physics">物理陪练</Link>
          <Link href="/analysis?subject=chemistry">化学陪练</Link>
        </nav>
      </div>
    </header>
  );
}
