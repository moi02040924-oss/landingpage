"use client";
import Image from "next/image";

export default function Hero({ onOpenContact }) {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42, 157, 143, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 163, 115, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Text Content */}
          <div className="animate-fade">
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
              <span className="badge">
                🌲 커리어숲 대표 컨설턴트
              </span>
              <span className="badge badge-gold">
                ✨ 16년차 직업상담사
              </span>
              <span className="badge" style={{ background: "#eef2ff", color: "#4f46e5", borderColor: "rgba(79,70,229,0.2)" }}>
                💻 직접 앱 만드는 컨설턴트
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: "800",
                color: "var(--primary-forest)",
                lineHeight: "1.25",
                letterSpacing: "-1px",
                marginBottom: "24px",
              }}
            >
              사람과 AI를, 막막함과 가능성을 잇는<br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary-emerald), var(--accent-sage))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                16년차 커리어 컨설턴트 임금희
              </span>
              입니다.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                marginBottom: "36px",
                wordBreak: "keep-all",
              }}
            >
              신중년과 소상공인이 AI라는 새로운 날개를 달 수 있도록 돕습니다.<br />
              이해하기 쉬운 현장 중심 강의와 1:1 컨설팅, 그리고 직접 개발한 맞춤형 AI 앱 콘텐츠로 당신의 새로운 커리어 숲을 함께 가꿔갑니다.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <button
                onClick={onOpenContact}
                style={{
                  padding: "14px 32px",
                  borderRadius: "var(--radius-full)",
                  background: "linear-gradient(135deg, var(--primary-emerald), var(--primary-forest))",
                  color: "#fff",
                  fontSize: "1.05rem",
                  fontWeight: "700",
                  boxShadow: "0 8px 24px rgba(30, 89, 69, 0.25)",
                  transition: "transform 0.2s, boxShadow 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(30, 89, 69, 0.35)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(30, 89, 69, 0.25)";
                }}
              >
                1:1 컨설팅 & 강의 문의하기 ✉️
              </button>

              <a
                href="https://www.careerforest.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-full)",
                  background: "#fff",
                  color: "var(--primary-forest)",
                  fontSize: "1.05rem",
                  fontWeight: "700",
                  border: "1px solid var(--border-glass)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.2s, background 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "var(--accent-light-sage)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                🌐 커리어숲 공식 웹사이트 방문
              </a>
            </div>

            {/* Stats Counter */}
            <div
              className="glass-panel"
              style={{
                padding: "20px 28px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--primary-emerald)" }}>16년+</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>직업상담 현장 경력</div>
              </div>
              <div style={{ borderLeft: "1px solid var(--border-glass)", borderRight: "1px solid var(--border-glass)" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--accent-warm)" }}>3,000+</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>누적 컨설팅·수강생</div>
              </div>
              <div>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--primary-forest)" }}>100%</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>맞춤형 AI 콘텐츠</div>
              </div>
            </div>
          </div>

          {/* Right Avatar Visual */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                height: "480px",
                borderRadius: "var(--radius-lg)",
                background: "linear-gradient(180deg, rgba(232, 243, 238, 0.6) 0%, rgba(255,255,255,0.9) 100%)",
                border: "2px solid #fff",
                boxShadow: "var(--shadow-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {/* Decorative Circle Behind Avatar */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(58, 136, 108, 0.2) 0%, transparent 70%)",
                }}
              />

              <div
                className="animate-float"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src="/avatar.png"
                  alt="임금희 커리어 컨설턴트 3D 캐릭터"
                  fill
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  priority
                />
              </div>

              {/* Floating Floating Cards around avatar */}
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "10px",
                  background: "rgba(255, 255, 255, 0.95)",
                  padding: "10px 16px",
                  borderRadius: "14px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "var(--primary-forest)",
                  border: "1px solid rgba(30,89,69,0.1)",
                }}
              >
                <span>💡</span> AI 교육 콘텐츠 개발자
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "10px",
                  background: "rgba(255, 255, 255, 0.95)",
                  padding: "10px 16px",
                  borderRadius: "14px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "var(--primary-emerald)",
                  border: "1px solid rgba(30,89,69,0.1)",
                }}
              >
                <span>🤝</span> 연결자 (Connector)
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid :global(.badge) {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
