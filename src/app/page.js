"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileQA from "@/components/ProfileQA";
import Services from "@/components/Services";
import PromptStudio from "@/components/PromptStudio";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar onOpenContact={handleOpenContact} />
      <Hero onOpenContact={handleOpenContact} />
      <ProfileQA />
      <Services onOpenContact={handleOpenContact} />
      <PromptStudio />
      <ContactSection onOpenContact={handleOpenContact} />
      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </main>
  );
}
