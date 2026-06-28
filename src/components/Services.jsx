"use client";

export default function Services({ onOpenContact }) {
  const services = [
    {
      icon: "🌲",
      tag: "1:1 맞춤 진단",
      title: "신중년 & 소상공인 AI 커리어 컨설팅",
      desc: "기술이 낯선 신중년과 사업 효율화가 필요한 소상공인을 위해 AI 도구를 쉽게 활용할 수 있도록 1:1 진단부터 업무 자동화 마케팅 적용까지 체계적으로 가이드합니다.",
      features: [
        "16년 경력 기반 커리어/사업 맞춤형 진단",
        "생성형 AI(ChatGPT, Gemini, Claude) 실전 활용법",
        "소상공인 마케팅 문구 및 사업계획서 자동화",
      ],
      color: "var(--primary-emerald)",
    },
    {
      icon: "📚",
      tag: "현장 중심 교육",
      title: "취업 역량 강화 & 디지털 리터러시 강의",
      desc: "고용센터, 지자체, 교육기관 수강생들의 눈높이에 맞춘 다정한 강의를 진행합니다. 이론에 그치지 않고 교육 후 즉시 사용할 수 있는 자체 워크북을 함께 제공합니다.",
      features: [
        "신중년 재취업 및 동기부여 특강",
        "직업상담사 대상 AI 프롬프트 작성 실습 워크숍",
        "수강생 맞춤형 워크북 및 실습 가이드북 제작",
      ],
      color: "var(--accent-sage)",
    },
    {
      icon: "💻",
      tag: "실전 솔루션 개발",
      title: "AI 기반 맞춤형 앱 & 콘텐츠 개발",
      desc: "직접 코드와 앱을 만드는 커리어 컨설턴트로서, 현장의 복잡한 서류 작업과 상담 절차를 획기적으로 줄여주는 전용 AI 웹/앱 프론트엔드 및 프롬프트 템플릿을 개발합니다.",
      features: [
        "고용서비스 기관용 공문/서류 자동 작성기 제작",
        "맞춤형 기술평가 및 상담 모의 테스트 앱 구축",
        "업무 생산성 향상을 위한 전용 프롬프트 템플릿",
      ],
      color: "var(--accent-warm)",
    },
  ];

  return (
    <section id="services" style={{ padding: "90px 0", background: "var(--bg-main)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px auto" }}>
          <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
            💼 전문 분야
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: "800", color: "var(--primary-forest)", letterSpacing: "-0.5px" }}>
            임금희 컨설턴트가 제공하는 핵심 서비스
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "12px", fontSize: "1.05rem" }}>
            막막했던 커리어와 업무 현장에 가장 명확하고 다정한 AI 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, boxShadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 16px 36px rgba(20, 54, 43, 0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background: "rgba(232, 243, 238, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                    }}
                  >
                    {service.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                      background: "#fff",
                      border: "1px solid var(--border-glass)",
                      color: service.color,
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--primary-forest)", marginBottom: "14px", lineHeight: "1.4" }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: "1.65", marginBottom: "24px" }}>
                  {service.desc}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0" }}>
                  {service.features.map((feat, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "10px" }}>
                      <span style={{ color: service.color, fontWeight: "800" }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  background: "var(--accent-light-sage)",
                  color: "var(--primary-emerald)",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--primary-emerald)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--accent-light-sage)";
                  e.currentTarget.style.color = "var(--primary-emerald)";
                }}
              >
                관련 상담 문의하기 ➔
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
