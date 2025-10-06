'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { StatsSection } from '@/components/dashboard/StatsSection';
import { OpportunitiesList } from '@/components/opportunities/OpportunitiesList';
import { OutstandingMentors } from '@/components/dashboard/OutstandingMentors';
import { RecommendedLearningPaths } from '@/components/dashboard/RecommendedLearningPaths';
import { Loader2 } from 'lucide-react';

function DashboardContent() {
  const searchParams = useSearchParams();
  const { user, loading } = useAuth();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      // Clean the URL by removing the token, without reloading the page.
      window.history.replaceState({}, document.title, '/talent/dashboard');
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {/* Welcome Message */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-geist">
        {loading ? 'Welcome...' : user?.fullName ? `Welcome, ${user.fullName} 👋` : 'Welcome 👋'}
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
            <a
              href="/talent/opportunities"
              className="text-base text-gray-600 underline font-geist hover:text-gray-800 transition-colors"
            >
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
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}