"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export function StatsSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: getDashboardStats,
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    if (data?.profileCompletion === 100) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setShowCard(false);
      }, 5000); // Confetti will show for 5 seconds
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Skeleton className="h-[200px] rounded-[2.75rem]" />
        <Skeleton className="h-[200px] rounded-[2.75rem]" />
        <Skeleton className="h-[200px] rounded-[2.75rem]" />
        <Skeleton className="h-[200px] rounded-[2.75rem]" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading stats</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {showConfetti && <Confetti />}
      {showCard && (
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-[2.75rem] p-6 text-white">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-geist">
                  Complete profile
                </h3>
                <p className="text-base opacity-90 font-geist">
                  Attract attention from clients.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium font-geist">
                  {data.profileCompletion}%
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className="bg-pink-800 h-2.5 rounded-full"
                    style={{ width: `${data.profileCompletion}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {data.profileCompletion === 100 ? (
              <div className="w-full bg-black text-white py-2.5 px-4 rounded-3xl text-sm font-medium font-geist text-center">
                Profile Completed
              </div>
            ) : (
              <Link
                href="/talent/dashboard/complete-profile"
                className="w-full bg-black text-white py-2.5 px-4 rounded-3xl text-sm font-medium font-geist hover:bg-gray-900 transition-colors flex items-center justify-center"
              >
                Complete Profile
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Applications Submitted */}
      <div className="bg-white border border-gray-300 rounded-[2.75rem] p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-black font-geist">
              <img src="/Frame 1171280926.png" alt="Brifcase Icon" />
              Applications Submitted
            </h3>
            <div className="text-[3.5rem] font-bold text-black font-geist leading-none">
              {data.applicationsSubmitted}
            </div>
          </div>
        </div>
      </div>

      {/* Interviews Scheduled */}
      <div className="bg-white border border-gray-300 rounded-[2.75rem] p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-black font-geist">
              <img src="/Frame 1171280926 (1).png" alt="Brifcase Icon" />{" "}
              Interviews Scheduled
            </h3>
            <div className="text-[3.5rem] font-bold text-black font-geist leading-none">
              {data.interviewsScheduled}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Views */}
      <div className="bg-white border border-gray-300 rounded-[2.75rem] p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-black font-geist">
              <img src="/Frame 1171280926 (2).png" alt="Brifcase Icon" />
              Profile Views
            </h3>
            <div className="text-[3.5rem] font-bold text-black font-geist leading-none">
              {data.profileViews}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
