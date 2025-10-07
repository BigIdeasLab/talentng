"use client";

import dynamic from "next/dynamic";

const TalentShowcase = dynamic(
  () => import("@/components/landing-page/TalentShowcase"),
  { ssr: false }
);

export default TalentShowcase;
