"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(20, 54, 43, 0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30, 89, 69, 0.1)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ position: "relative", width: "42px", height: "42px", borderRadius: "10px", overflow: "hidden", background: "#fff", padding: "2px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Image src="/logo.png" alt="커리어숲 로고" fill style={{ objectFit: "contain" }} priority />
          </div>
          <div>
            <span style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--primary-forest)", letterSpacing: "-0.5px" }}>
              커리어숲
            </span>
            <span style={{ display: "block", fontSize: "0.72rem", color: "var(--accent-sage)", fontWeight: "600", marginTop: "-3px" }}>
              CAREER FOREST
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          <a href="#about" style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--text-secondary)", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--primary-emerald)"} onMouseOut={(e) => e.target.style.color = "var(--text-secondary)"}>
            소개 & Q&A
          </a>
          <a href="#services" style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--text-secondary)", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--primary-emerald)"} onMouseOut={(e) => e.target.style.color = "var(--text-secondary)"}>
            하는 일
          </a>
          <a href="#prompt-studio" style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--text-secondary)", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--primary-emerald)"} onMouseOut={(e) => e.target.style.color = "var(--text-secondary)"}>
            AI 체험 실습
          </a>
          <a href="#apply" style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--primary-emerald)", transition: "color 0.2s" }}>
            📅 강의 신청
          </a>
          <a href="#contact" style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--text-secondary)", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--primary-emerald)"} onMouseOut={(e) => e.target.style.color = "var(--text-secondary)"}>
            연락처 & QR
          </a>
        </nav>

        {/* Action Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={onOpenContact}
            style={{
              padding: "10px 22px",
              borderRadius: "var(--radius-full)",
              background: "linear-gradient(135deg, var(--primary-emerald), var(--primary-forest))",
              color: "#fff",
              fontWeight: "700",
              fontSize: "0.9rem",
              boxShadow: "0 4px 14px rgba(30, 89, 69, 0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(30, 89, 69, 0.35)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(30, 89, 69, 0.25)";
            }}
          >
            상담 & 강의 문의 ✉️
          </button>
        </div>
      </div>
    </header>
  );
}
