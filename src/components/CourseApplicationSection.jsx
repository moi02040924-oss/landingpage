"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CourseApplicationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferred_date: "",
    course_type: "신중년 AI 커리어 특강",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      // Check if Supabase URL is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
        // Fallback demo message if environment variables aren't filled yet
        setTimeout(() => {
          setLoading(false);
          setStatusMsg({
            type: "success",
            text: "🎉 신청이 접수되었습니다! (Supabase URL 설정 후 실제 DB에 실시간 연동됩니다.)",
          });
        }, 800);
        return;
      }

      const { data, error } = await supabase
        .from("lecture_applications")
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            preferred_date: formData.preferred_date,
            course_type: formData.course_type,
            message: formData.message,
          },
        ]);

      if (error) {
        throw error;
      }

      setStatusMsg({
        type: "success",
        text: "🎉 강의 신청이 완료되었습니다! 확인 후 남겨주신 연락처로 안내드리겠습니다.",
      });
      setFormData({
        name: "",
        phone: "",
        preferred_date: "",
        course_type: "신중년 AI 커리어 특강",
        message: "",
      });
    } catch (err) {
      console.error("Supabase Error:", err);
      setStatusMsg({
        type: "error",
        text: `오류 발생: ${err.message || "신청 중 문제가 발생했습니다."}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" style={{ padding: "90px 0", background: "var(--accent-light-sage)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px auto" }}>
          <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
            📅 맞춤형 교육 & 컨설팅
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: "800", color: "var(--primary-forest)", letterSpacing: "-0.5px" }}>
            실전 AI 강의 & 컨설팅 신청하기
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "12px", fontSize: "1.05rem" }}>
            이름, 연락처, 희망 날짜를 남겨주시면 수강 일정 조율 및 맞춤 커리큘럼을 안내해 드립니다.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "48px",
            background: "#fff",
            borderRadius: "28px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {statusMsg.text && (
            <div
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                marginBottom: "24px",
                fontWeight: "700",
                fontSize: "0.98rem",
                background: statusMsg.type === "success" ? "#e6f4ea" : "#fce8e6",
                color: statusMsg.type === "success" ? "#137333" : "#c5221f",
                border: `1px solid ${statusMsg.type === "success" ? "#a8dab5" : "#f5c6cb"}`,
              }}
            >
              {statusMsg.text}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {/* 이름 */}
            <div>
              <label style={{ display: "block", fontSize: "0.95rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "8px" }}>
                성함 (이름) *
              </label>
              <input
                type="text"
                required
                placeholder="예: 임금희 (또는 기관명)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "1px solid var(--border-glass)",
                  fontSize: "1rem",
                  outline: "none",
                  background: "var(--bg-main)",
                }}
              />
            </div>

            {/* 연락처 & 희망 날짜 Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="apply-grid">
              <div>
                <label style={{ display: "block", fontSize: "0.95rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "8px" }}>
                  연락처 (전화번호) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    border: "1px solid var(--border-glass)",
                    fontSize: "1rem",
                    outline: "none",
                    background: "var(--bg-main)",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.95rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "8px" }}>
                  희망 수강 날짜 *
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    border: "1px solid var(--border-glass)",
                    fontSize: "1rem",
                    outline: "none",
                    background: "var(--bg-main)",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            </div>

            {/* 희망 강의 분야 */}
            <div>
              <label style={{ display: "block", fontSize: "0.95rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "8px" }}>
                희망 교육 / 컨설팅 분야 *
              </label>
              <select
                value={formData.course_type}
                onChange={(e) => setFormData({ ...formData, course_type: e.target.value })}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "1px solid var(--border-glass)",
                  fontSize: "1rem",
                  outline: "none",
                  background: "var(--bg-main)",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                <option>👴👵 신중년 AI 커리어 & 이력서 특강</option>
                <option>🏪 소상공인 AI SNS 마케팅 워크숍</option>
                <option>👩‍💼 직업상담사 행정 자동화 & 프롬프트 강의</option>
                <option>💻 맞춤형 AI 애플리케이션 제작 문의</option>
              </select>
            </div>

            {/* 세부 요청사항 */}
            <div>
              <label style={{ display: "block", fontSize: "0.95rem", fontWeight: "700", color: "var(--primary-forest)", marginBottom: "8px" }}>
                기타 요청사항 (선택)
              </label>
              <textarea
                rows={3}
                placeholder="희망하시는 시간대나 강의 관련 질문을 자유롭게 적어주세요."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "1px solid var(--border-glass)",
                  fontSize: "1rem",
                  outline: "none",
                  background: "var(--bg-main)",
                  resize: "none",
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "10px",
                padding: "16px",
                borderRadius: "var(--radius-full)",
                background: "linear-gradient(135deg, var(--primary-emerald), var(--primary-forest))",
                color: "#fff",
                fontWeight: "800",
                fontSize: "1.1rem",
                boxShadow: "0 8px 24px rgba(30, 89, 69, 0.3)",
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "wait" : "pointer",
                transition: "transform 0.2s, boxShadow 0.2s",
              }}
            >
              {loading ? "신청서 제출 중..." : "🚀 실전 강의 신청서 제출하기"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .apply-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
