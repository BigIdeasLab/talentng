import React from "react";
import Header from "../components/Header";
import { HeroSection, CallToAction } from "@/components/landing-page";
import Footer from "../components/Footer";
import ClientTalentShowcase from "@/components/landing-page/ClientTalentShowcase";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Talent Showcase */}
      <ClientTalentShowcase />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
