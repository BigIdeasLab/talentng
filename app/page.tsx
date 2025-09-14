import React from "react";
import Header from "../components/Header";
import { HeroSection, TalentShowcase, CallToAction } from "@/components/landing-page";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Talent Showcase */}
      <TalentShowcase />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
