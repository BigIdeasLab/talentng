"use client";
import { useEffect, Suspense } from "react"; // Import useEffect and Suspense
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { StatsSection } from "@/components/dashboard/StatsSection";
import { OpportunitiesList } from "@/components/opportunities/OpportunitiesList";
import { OutstandingMentors } from "@/components/dashboard/OutstandingMentors";
import { RecommendedLearningPaths } from "@/components/dashboard/RecommendedLearningPaths";

function DashboardContent() {
  const searchParams = useSearchParams(); // Initialize useSearchParams

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      // Optionally, remove the accessToken from the URL to keep it clean
      // router.replace('/dashboard', undefined, { shallow: true }); // Requires useRouter
    }
  }, [searchParams]); // Depend on searchParams to re-run if URL changes

  return (
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Welcome Message */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-geist">
          Welcome, Promise 👋
        </h1>
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Outstanding Talents */}
        <div className="space-y-6">
        <div className="space-y-2.5">
          <h2 className="text-2xl font-medium text-gray-800 font-geist">
            Outstanding Talents
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-base text-gray-500 font-geist">
              Standout talents making waves around the web
            </p>
            <a href="/opportunities" className="text-base text-gray-600 underline font-geist hover:text-gray-800 transition-colors">
              View more
            </a>
          </div>
        </div>
        <OpportunitiesList limit={3} />
      </div>
        
        {/* Outstanding Mentors */}
        <OutstandingMentors />
        
        {/* Recommended Learning Paths */}
        <RecommendedLearningPaths />
      </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
