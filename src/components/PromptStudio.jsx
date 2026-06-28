"use client";
import { useState } from "react";

export default function PromptStudio() {
  const [selectedCategory, setSelectedCategory] = useState("senior");
  const [copied, setCopied] = useState(false);

  const prompts = {
    senior: {
      title: "👴👵 신중년 재취업 이력서 강점 추출 프롬프트",
      subtitle: "수십 년간 쌓아온 소중한 경력에서 AI를 이용해 가장 핵심적인 강점 3가지를 도출하는 실전 프롬프트입니다.",
      promptText: `[역할] 당신은 16년차 베테랑 커리어 컨설턴트입니다.
[상황] 수십 년간 현장에서 성실하게 근무해온 신중년 구직자의 경험 정리입니다.
[입력] 나의 지나온 경력/활동: (예: 25년간 은행 영업점 근무 및 고객 상담, 은퇴 후 지역 봉사활동)
[지시] 위 경험을 바탕으로 2026년 현대 기업이 선호하는 핵심 직무 역량 3가지를 도출하고, 이력서 자기소개서 첫 문장으로 바로 쓸 수 있는 멋진 문장을 작성해 주세요.`,
      resultPreview: "✨ [AI 응답 예시] 1. 고객 신뢰 구축 능력 2. 위기 관리 및 유연한 소통력 3. 책임감 있는 조직 헌신도...",
      tips: "💡 Tip: 거창한 경력이 아니더라도 일상 속 성실함이나 봉사 활동 경험도 AI와 만나면 훌륭한 브랜드가 됩니다.",
    },
    smallbiz: {
      title: "🏪 소상공인 SNS 마케팅 홍보문구 자동화 프롬프트",
      subtitle: "바쁜 사장님들을 위해 매장 특장점만 넣으면 블로그/인스타그램 홍보글이 3초 만에 완성되는 프롬프트입니다.",
      promptText: `[역할] 당신은 감성적인 브랜드 마케터입니다.
[상황] 4050 세대와 MZ세대를 모두 사로잡고 싶은 동네 프리미엄 디저트 카페 사장님의 홍보문구 작성입니다.
[입력] 매장명: 커리어숲 카페 / 대표 메뉴: 수제 쑥 라떼 / 핵심 강점: 매일 아침 직접 찧은 쑥과 유기농 우유 사용
[지시] 인스타그램용 감성 문구와 함께 관련 타깃 해시태그 10개를 작성해 주세요. 친근하고 따뜻한 어조로 부탁합니다.`,
      resultPreview: "✨ [AI 응답 예시] '오늘 하루 고단하셨죠? 아침마다 정성껏 찧은 쑥 향과 유기농 우유가 만나 여러분의 지친 마음을 다정하게 안아줍니다... #커리어숲카페 #동네맛집 #수제쑥라떼'",
      tips: "💡 Tip: 매장의 대표 메뉴와 정성 어린 스토리 하나만 있으면 AI가 훌륭한 영업사원이 되어줍니다.",
    },
    counselor: {
      title: "👩‍💼 직업상담사 심층 상담 일지 요약 프롬프트",
      subtitle: "상담 후 복잡한 내담자 기록을 신속하고 표준화된 양식으로 한눈에 정리해주는 자동화 프롬프트입니다.",
      promptText: `[역할] 당신은 고용서비스 전문가입니다.
[상황] 구직자와의 40분 심층 상담 대화 내용을 보고서 양식으로 요약 정리해야 합니다.
[입력] 내담자 고민: 45세 여성, 10년 경단녀, 컴퓨터 활용에 두려움이 있으나 사회복지 분야 관심.
[지시] 1. 내담자 핵심 요구사항 2. 추천 교육과정(디지털 기초+사회복지) 3. 다음 회기 실행 과제를 구분하여 요약해 주세요.`,
      resultPreview: "✨ [AI 응답 예시] [1. 핵심 요구] 경력단절 극복 및 사회복지 직무 재취업 희망 [2. 추천 교육] 디지털 기초 리터러시 4주 + 사회복지 실무 [3. 차회 과제] 워크넷 구직등록...",
      tips: "💡 Tip: 행정 서류 시간을 줄이면, 내담자의 눈을 맞춰주는 따뜻한 진심 상담 시간이 늘어납니다.",
    },
  };

  const current = prompts[selectedCategory];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="prompt-studio" style={{ padding: "90px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 50px auto" }}>
          <span className="badge" style={{ background: "#eef2ff", color: "#4f46e5", borderColor: "rgba(79,70,229,0.2)", marginBottom: "12px" }}>
            💻 직접 앱 만드는 컨설턴트의 선물
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: "800", color: "var(--primary-forest)", letterSpacing: "-0.5px" }}>
            현장 맞춤형 AI 프롬프트 스튜디오
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "12px", fontSize: "1.05rem" }}>
            임금희 컨설턴트가 강의와 컨설팅 현장에서 직접 검증한 프롬프트를 체험해보세요! 복사하여 ChatGPT나 Gemini에 바로 사용할 수 있습니다.
          </p>
        </div>

        {/* Category Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "36px", flexWrap: "wrap" }}>
          <button
            onClick={() => setSelectedCategory("senior")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              fontWeight: "700",
              fontSize: "0.95rem",
              background: selectedCategory === "senior" ? "var(--primary-forest)" : "var(--bg-main)",
              color: selectedCategory === "senior" ? "#fff" : "var(--text-secondary)",
              border: "1px solid var(--border-glass)",
              transition: "all 0.2s",
            }}
          >
            👴👵 신중년 커리어 프롬프트
          </button>

          <button
            onClick={() => setSelectedCategory("smallbiz")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              fontWeight: "700",
              fontSize: "0.95rem",
              background: selectedCategory === "smallbiz" ? "var(--primary-forest)" : "var(--bg-main)",
              color: selectedCategory === "smallbiz" ? "#fff" : "var(--text-secondary)",
              border: "1px solid var(--border-glass)",
              transition: "all 0.2s",
            }}
          >
            🏪 소상공인 마케팅 프롬프트
          </button>

          <button
            onClick={() => setSelectedCategory("counselor")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              fontWeight: "700",
              fontSize: "0.95rem",
              background: selectedCategory === "counselor" ? "var(--primary-forest)" : "var(--bg-main)",
              color: selectedCategory === "counselor" ? "#fff" : "var(--text-secondary)",
              border: "1px solid var(--border-glass)",
              transition: "all 0.2s",
            }}
          >
            👩‍💼 직업상담사 행정 자동화
          </button>
        </div>

        {/* Prompt Card Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "40px",
            background: "linear-gradient(135deg, #12231b 0%, #1a3c2f 100%)",
            color: "#fff",
            borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(18, 35, 27, 0.25)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-gold)", marginBottom: "6px" }}>
                {current.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#b3c9be" }}>
                {current.subtitle}
              </p>
            </div>
            <button
              onClick={handleCopy}
              style={{
                padding: "10px 20px",
                borderRadius: "var(--radius-full)",
                background: copied ? "#22c55e" : "var(--accent-sage)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "0.9rem",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {copied ? "✓ 복사되었습니다!" : "📋 프롬프트 복사하기"}
            </button>
          </div>

          {/* Prompt Code Display */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "16px",
              padding: "24px",
              fontFamily: "monospace",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              color: "#e2e8f0",
              whiteSpace: "pre-wrap",
              margin: "24px 0",
            }}
          >
            {current.promptText}
          </div>

          <div
            style={{
              background: "rgba(42, 157, 143, 0.15)",
              borderLeft: "4px solid var(--accent-sage)",
              padding: "16px 20px",
              borderRadius: "0 12px 12px 0",
              marginBottom: "16px",
            }}
          >
            <div style={{ fontSize: "0.92rem", color: "#a7f3d0", fontWeight: "600" }}>
              {current.resultPreview}
            </div>
          </div>

          <div style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontStyle: "italic" }}>
            {current.tips}
          </div>
        </div>
      </div>
    </section>
  );
}
