"use client";
import { useState } from "react";

export default function ProfileQA() {
  const [activeTab, setActiveTab] = useState(0);

  const qnaList = [
    {
      id: "qa1",
      question: "Q1. 직업 또는 역할을 한 줄로 표현하자면?",
      shortTag: "한 줄 소개 💬",
      answer: "16년차 직업상담사이자, 신중년·소상공인이 AI와 친해지도록 돕는 커리어 컨설턴트 — 요즘은 직접 앱도 만드는 사람",
      detail: "16년이라는 긴 시간 동안 고용센터와 교육 현장에서 다양한 사람들의 삶과 이직, 창업 스토리를 접해왔습니다. 최근 급변하는 AI 시대 속에서 기술이 막막하게 느껴지지 않도록, 현장의 언어로 쉽고 다정하게 AI 커리어 솔루션을 전달하고 있습니다.",
      icon: "🌱",
    },
    {
      id: "qa2",
      question: "Q2. 임금희 컨설턴트가 매주 반드시 하는 일 3가지",
      shortTag: "주간 루틴 3가지 📅",
      answer: "현장에서 사람을 만나고, AI 도구로 맞춤형 워크북을 제작하며, 최신 AI 도구를 직접 검증하여 실전에 적용합니다.",
      items: [
        {
          num: "1",
          title: "소상공인·신중년 대상 강의와 컨설팅",
          desc: "현장에서 직접 사람들을 만나 고민을 듣고, 1:1 맞춤형 진단과 실전 강의를 통해 성장 발판을 마련해 드립니다.",
          highlight: "현장에서 사람 만나기 🤝",
        },
        {
          num: "2",
          title: "강의 자료 · 워크북 자체 제작",
          desc: "AI 도구를 활용해 수강생들이 교육 후에도 혼자서 복습하고 바로 적용할 수 있는 쉬운 가이드와 실습 워크북을 만듭니다.",
          highlight: "AI 도구로 콘텐츠 만들기 📚",
        },
        {
          num: "3",
          title: "새로운 AI 도구 탐구 및 직접 앱 개발",
          desc: "새롭게 쏟아지는 최신 AI 툴을 매주 직접 공부하고 테스트하여, 유용한 기능만 쏙쏙 뽑아 강의와 서비스 앱에 녹여냅니다.",
          highlight: "배운 걸 강의 & 앱에 녹이기 💡",
        },
      ],
      icon: "⚡",
    },
    {
      id: "qa3",
      question: "Q3. 나를 한 단어로 표현하자면?",
      shortTag: "핵심 키워드 🌟",
      answer: "연결자 (Connector) — 사람과 AI를, 막막함과 가능성을 잇는 사람",
      detail: "기술의 발전이 누군가에게는 벽처럼 느껴질 수 있습니다. 저는 그 벽을 허물어 사람과 AI가 친근하게 조화를 이루도록 돕고, 막막했던 내일의 커리어에 새로운 가능성을 단단하게 연결해 주는 따뜻한 숲 같은 가이드가 되고자 합니다.",
      icon: "🔗",
    },
  ];

  return (
    <section id="about" style={{ padding: "90px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px auto" }}>
          <span className="badge" style={{ marginBottom: "12px" }}>
            🔍 임금희의 커리어 인터뷰
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: "800", color: "var(--primary-forest)", letterSpacing: "-0.5px" }}>
            컨설턴트 임금희를 알아가는 3가지 질문
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "12px", fontSize: "1.05rem" }}>
            현장과 기술, 그리고 사람을 향한 임금희 컨설턴트의 철학과 일상을 확인해보세요.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {qnaList.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              style={{
                padding: "12px 24px",
                borderRadius: "var(--radius-full)",
                fontSize: "1rem",
                fontWeight: "700",
                transition: "all 0.25s ease",
                background: activeTab === index ? "var(--primary-emerald)" : "var(--accent-light-sage)",
                color: activeTab === index ? "#fff" : "var(--primary-forest)",
                boxShadow: activeTab === index ? "0 6px 18px rgba(30, 89, 69, 0.25)" : "none",
                border: "1px solid rgba(30,89,69,0.1)",
              }}
            >
              {item.shortTag}
            </button>
          ))}
        </div>

        {/* Active Tab Display Area */}
        <div
          className="glass-panel"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            padding: "48px",
            position: "relative",
            background: "linear-gradient(135deg, #ffffff 0%, #f7fbf9 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "24px" }}>
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "16px",
                background: "var(--accent-light-sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                flexShrink: 0,
              }}
            >
              {qnaList[activeTab].icon}
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--primary-forest)" }}>
                {qnaList[activeTab].question}
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "var(--primary-emerald)",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                → {qnaList[activeTab].answer}
              </p>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--border-glass)", margin: "28px 0" }} />

          {/* Details / Sub-items */}
          {qnaList[activeTab].detail && (
            <p style={{ fontSize: "1.08rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
              {qnaList[activeTab].detail}
            </p>
          )}

          {qnaList[activeTab].items && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }} className="qna-subgrid">
              {qnaList[activeTab].items.map((sub, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "16px",
                    border: "1px solid var(--border-glass)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      background: "var(--accent-gold)",
                      color: "#fff",
                      fontWeight: "800",
                      fontSize: "0.8rem",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    STEP 0{sub.num}
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "8px" }}>
                    {sub.title}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {sub.desc}
                  </p>
                  <div style={{ marginTop: "12px", fontSize: "0.82rem", fontWeight: "700", color: "var(--primary-emerald)" }}>
                    {sub.highlight}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .qna-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
