import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TalentShowcase from "../components/TalentShowcase";
import CallToAction from "../components/CallToAction";
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
