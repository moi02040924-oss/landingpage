"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--primary-forest)",
        color: "#fff",
        padding: "60px 0 30px 0",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ position: "relative", width: "48px", height: "48px", borderRadius: "12px", overflow: "hidden", background: "#fff", padding: "3px" }}>
              <Image src="/logo.png" alt="커리어숲 로고" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "#fff", letterSpacing: "-0.5px" }}>
                커리어숲
              </span>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: "600" }}>
                CAREER FOREST | 대표 임금희
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", fontSize: "0.95rem", color: "#a7f3d0" }}>
            <a href="https://www.careerforest.co.kr" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "#fff"} onMouseOut={(e) => e.target.style.color = "#a7f3d0"}>
              www.careerforest.co.kr
            </a>
            <a href="#about" style={{ transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "#fff"} onMouseOut={(e) => e.target.style.color = "#a7f3d0"}>
              프로필 소개
            </a>
            <a href="#services" style={{ transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "#fff"} onMouseOut={(e) => e.target.style.color = "#a7f3d0"}>
              전문 분야
            </a>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)", margin: "20px 0" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.85rem",
            color: "#8fae9e",
          }}
        >
          <p>© {new Date().getFullYear()} 커리어숲 (Career Forest) & Lim Geum-hee. All rights reserved.</p>
          <p>사람과 AI를, 막막함과 가능성을 잇는 16년차 직업상담사 & 커리어 컨설턴트</p>
        </div>
      </div>
    </footer>
  );
}
