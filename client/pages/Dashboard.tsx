import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsSection } from "@/components/StatsSection";
import { OutstandingTalents } from "@/components/OutstandingTalents";
import { OutstandingMentors } from "@/components/OutstandingMentors";
import { RecommendedLearningPaths } from "@/components/RecommendedLearningPaths";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Hidden on mobile */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />
        
        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10">
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
        </main>
      </div>
    </div>
  );
}
