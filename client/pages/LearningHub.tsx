import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

export default function LearningHub() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="p-6 border border-gray-200 rounded-2xl bg-white">
              <h1 className="text-2xl font-bold text-black">Learning Hub</h1>
              <p className="mt-2 text-sm text-gray-600">Explore courses, articles, and resources to grow your skills.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 border border-gray-200 rounded-2xl bg-white">
                <h2 className="text-lg font-semibold">No resources yet</h2>
                <p className="mt-2 text-sm text-gray-700">We don't have learning resources available right now. Check back later.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
