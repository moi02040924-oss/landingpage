"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection({ onOpenContact }) {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <section id="contact" style={{ padding: "90px 0", background: "var(--bg-main)", position: "relative" }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: "60px 48px",
            borderRadius: "32px",
            background: "linear-gradient(135deg, #ffffff 0%, #e8f3ee 100%)",
            boxShadow: "var(--shadow-lg)",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left Contact Details */}
          <div>
            <span className="badge" style={{ marginBottom: "16px" }}>
              💌 함께 만드는 내일
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--primary-forest)", marginBottom: "16px", lineHeight: "1.3" }}>
              막막함에서 가능성으로,<br />
              <span style={{ color: "var(--primary-emerald)" }}>커리어숲</span>이 함께 걸어갑니다.
            </h2>
            <p style={{ fontSize: "1.08rem", color: "var(--text-secondary)", lineHeight: "1.75", marginBottom: "36px", wordBreak: "keep-all" }}>
              신중년 재취업 컨설팅, 소상공인 AI 마케팅 특강, 기관 대상 역량 강화 워크숍 및 AI 애플리케이션 개발 문의 등 언제든 편하게 연락해 주세요.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              <a
                href="https://www.careerforest.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 24px",
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid var(--border-glass)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "translateX(6px)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "var(--accent-light-sage)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                  🌐
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: "600" }}>공식 웹사이트</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--primary-emerald)" }}>www.careerforest.co.kr</div>
                </div>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 24px",
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid var(--border-glass)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#fefae0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: "600" }}>이메일 & 상담 문의</div>
                  <div style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary-forest)" }}>careerforest@naver.com (또는 하단 문의폼)</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              style={{
                padding: "16px 36px",
                borderRadius: "var(--radius-full)",
                background: "linear-gradient(135deg, var(--primary-emerald), var(--primary-forest))",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "800",
                boxShadow: "0 8px 24px rgba(30, 89, 69, 0.3)",
                transition: "transform 0.2s, boxShadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(30, 89, 69, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(30, 89, 69, 0.3)";
              }}
            >
              1:1 빠른 상담 신청하기 📝
            </button>
          </div>

          {/* Right QR Code Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              background: "#fff",
              padding: "36px",
              borderRadius: "24px",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--border-glass)",
            }}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--primary-emerald)", letterSpacing: "1px", marginBottom: "8px" }}>
              MOBILE CONNECT
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--primary-forest)", marginBottom: "16px" }}>
              QR 코드로 바로 연결하기
            </h3>

            <div
              onClick={() => setShowQrModal(true)}
              style={{
                position: "relative",
                width: "180px",
                height: "180px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid var(--border-glass)",
                padding: "8px",
                cursor: "pointer",
                transition: "transform 0.2s, boxShadow 0.2s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
              }}
            >
              <Image src="/qr-code.png" alt="커리어숲 QR코드" fill style={{ objectFit: "contain" }} />
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "14px" }}>
              스마트폰 카메라로 QR 코드를 스캔하시면<br />모바일로 손쉽게 접속하실 수 있습니다. (클릭 시 확대)
            </p>
          </div>
        </div>
      </div>

      {/* QR Code Zoom Modal */}
      {showQrModal && (
        <div
          onClick={() => setShowQrModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
              maxWidth: "360px",
              width: "100%",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--primary-forest)", marginBottom: "16px" }}>
              스캔용 QR 코드
            </h3>
            <div style={{ position: "relative", width: "240px", height: "240px", margin: "0 auto 20px auto" }}>
              <Image src="/qr-code.png" alt="커리어숲 QR코드 확대" fill style={{ objectFit: "contain" }} />
            </div>
            <button
              onClick={() => setShowQrModal(false)}
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-full)",
                background: "var(--primary-forest)",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
