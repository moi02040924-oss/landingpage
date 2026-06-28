"use client";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "1:1 커리어 컨설팅",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(18, 35, 27, 0.7)",
        backdropFilter: "blur(8px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "540px",
          width: "100%",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "1.5rem",
            color: "var(--text-muted)",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "var(--bg-main)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <span className="badge" style={{ marginBottom: "12px" }}>
              💌 1:1 빠른 상담 문의
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--primary-forest)", marginBottom: "8px" }}>
              임금희 컨설턴트에게 문의하기
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "28px" }}>
              원하시는 컨설팅이나 강의 주제를 남겨주시면 확인 후 신속하게 연락드리겠습니다.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "6px" }}>
                  성함 / 기관명 *
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동 (또는 OO고용센터)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-glass)",
                    fontSize: "0.95rem",
                    outline: "none",
                    background: "var(--bg-main)",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "6px" }}>
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "1px solid var(--border-glass)",
                      fontSize: "0.95rem",
                      outline: "none",
                      background: "var(--bg-main)",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "6px" }}>
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "1px solid var(--border-glass)",
                      fontSize: "0.95rem",
                      outline: "none",
                      background: "var(--bg-main)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "6px" }}>
                  문의 유형 *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-glass)",
                    fontSize: "0.95rem",
                    outline: "none",
                    background: "var(--bg-main)",
                    fontWeight: "600",
                  }}
                >
                  <option>1:1 커리어 / 재취업 컨설팅</option>
                  <option>소상공인 AI 마케팅 컨설팅</option>
                  <option>기관/기업 출강 및 강의 요청</option>
                  <option>AI 맞춤형 솔루션/앱 제작 문의</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "6px" }}>
                  문의 내용
                </label>
                <textarea
                  rows={4}
                  placeholder="희망하시는 강의 일정이나 상담 받고 싶으신 내용을 자유롭게 작성해 주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-glass)",
                    fontSize: "0.95rem",
                    outline: "none",
                    background: "var(--bg-main)",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "10px",
                  padding: "14px",
                  borderRadius: "var(--radius-full)",
                  background: "linear-gradient(135deg, var(--primary-emerald), var(--primary-forest))",
                  color: "#fff",
                  fontWeight: "800",
                  fontSize: "1.05rem",
                  boxShadow: "0 6px 20px rgba(30, 89, 69, 0.3)",
                }}
              >
                상담 문의 보내기 🚀
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>🎉</div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--primary-forest)", marginBottom: "12px" }}>
              문의가 성공적으로 전달되었습니다!
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "28px" }}>
              임금희 컨설턴트가 내용을 확인한 후 작성해주신 연락처로 신속하게 안내해 드리겠습니다. 감사합니다.
            </p>
            <button
              onClick={handleReset}
              style={{
                padding: "12px 32px",
                borderRadius: "var(--radius-full)",
                background: "var(--primary-emerald)",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
