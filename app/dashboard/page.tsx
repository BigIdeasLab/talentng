"use client";
import { StatsSection } from "@/components/StatsSection";
import { OutstandingTalents } from "@/components/OutstandingTalents";
import { OutstandingMentors } from "@/components/OutstandingMentors";
import { RecommendedLearningPaths } from "@/components/RecommendedLearningPaths";

export default function Dashboard() {
  return (
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Welcome Message */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-geist">
          Welcome, Promise 👋
        </h1>
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Outstanding Talents */}
        <OutstandingTalents />
        
        {/* Outstanding Mentors */}
        <OutstandingMentors />
        
        {/* Recommended Learning Paths */}
        <RecommendedLearningPaths />
      </div>
  );
}
