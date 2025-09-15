"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Bell, Briefcase, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const jobData = {
    id: parseInt(id || "1"),
    company: "ConnectNigeria",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/7dfd984246e9d925bd7d844d3a2bafcb1d24e1da?width=64",
    title: "Senior- Staff Product Engineer",
    location: "Engineering, Full-time, Lagos, Nigeria 🇳🇬",
    postedDate: "Posted Sep 10, 2025",
    budget: "₦ 800,000/m",
    tags: ["UI Designer", "UX Researcher", "Product Manager"],
    jobDescription: `We are seeking enthusiastic and reliable Dispatch Riders to join our team.
• In this role, you will be responsible for delivering packages or other items to customers in a timely and efficient manner.
• You will play a crucial role in ensuring customer satisfaction and representing our brand positively.`,
    keyResponsibilities: `Safely operate a motorcycle or other vehicle to deliver items to customers.
• Delivery of items to customers/clients
• Navigate through city streets efficiently to meet delivery deadlines.
• Ensure the accuracy of deliveries by double-checking items before departure.
• Maintain a professional demeanor and provide excellent customer service during interactions.
• Follow safety regulations and traffic laws at all times.
• Keep the delivery vehicle clean and in good working condition.
• Handle cash or digital payment transactions as required.
• Report any issues or delays to management promptly.`,
    jobQualifications: `• Must possess a valid motorcycle license and have experience riding in urban environments.
• Strong time management skills and the ability to multitask under pressure are essential.`,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex flex-col px-4 sm:px-8 lg:px-10 py-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => router.back()}
              className="p-0 bg-transparent border-none cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-2xl font-medium text-black font-geist">Opportunities</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gray-100 rounded-full">
              <Bell className="w-6 h-6 text-gray-900" />
            </div>
            <div className="relative">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl font-semibold text-black">P</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-25 border border-gray-50 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.64343 6.86148C5.76845 6.7365 5.93799 6.66629 6.11477 6.66629C6.29154 6.66629 6.46108 6.7365 6.5861 6.86148L8.0001 8.27548L9.4141 6.86148C9.53911 6.73639 9.70868 6.66608 9.88553 6.66602C10.0624 6.66595 10.232 6.73614 10.3571 6.86115C10.4822 6.98616 10.5525 7.15573 10.5526 7.33258C10.5526 7.50943 10.4824 7.67906 10.3574 7.80415L8.47143 9.69015C8.34641 9.81513 8.17688 9.88534 8.0001 9.88534C7.82332 9.88534 7.65379 9.81513 7.52877 9.69015L5.64343 7.80415C5.51845 7.67913 5.44824 7.50959 5.44824 7.33282C5.44824 7.15604 5.51845 6.9865 5.64343 6.86148Z" fill="#09244B"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-8"></div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Job Card */}
          <div className="flex-none">
            <div className="p-8 border border-gray-200 rounded-[44px] bg-white max-w-md">
              <div className="space-y-4">
                {/* Company Info */}
                <div className="flex items-center gap-4.5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <img
                        src={jobData.logo}
                        alt={jobData.company}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <span className="text-base font-medium text-black font-geist">
                        {jobData.company}
                      </span>
                    </div>
                    <div className="w-px h-6 bg-gray-300"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 font-geist">
                    {jobData.postedDate}
                  </span>
                </div>

                {/* Job Title */}
                <h1 className="text-[32px] font-semibold text-black font-geist leading-[44.8px]">
                  {jobData.title}
                </h1>

                {/* Location */}
                <p className="text-base text-black font-geist">
                  {jobData.location}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 px-3.5 py-3.5 border border-gray-200 bg-white rounded-full">
                    <span className="text-sm font-medium text-black font-geist">Share with friends</span>
                    <Share className="w-4 h-4 text-gray-900" />
                  </button>
                  <button className="flex items-center gap-1 px-3.5 py-3.5 bg-black rounded-full">
                    <span className="text-sm font-medium text-white font-geist">Apply</span>
                    <Briefcase className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Budget */}
                <div className="pt-6">
                  <div className="mb-3">
                    <span className="text-sm text-black font-geist">Budget</span>
                  </div>
                  <div className="text-xl font-bold text-black font-geist">
                    {jobData.budget}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-6">
                  <div className="mb-3">
                    <span className="text-sm text-black font-geist">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {jobData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-2 bg-gray-100 rounded-2xl text-sm text-black font-geist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex-1 max-w-[649px] space-y-10">
            <h2 className="text-2xl font-semibold text-black font-geist">Description</h2>
            
            {/* Job Description */}
            <div className="space-y-4">
              <h3 className="text-xl text-black font-geist">Job Description:</h3>
              <div className="text-base text-black font-geist leading-[25.6px] whitespace-pre-line">
                {jobData.jobDescription}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-4">
              <h3 className="text-xl text-black font-geist">Key Responsibilities:</h3>
              <div className="text-base text-black font-geist leading-[25.6px] whitespace-pre-line">
                {jobData.keyResponsibilities}
              </div>
            </div>

            {/* Job Qualifications */}
            <div className="space-y-4">
              <h3 className="text-xl text-black font-geist">Job Qualifications:</h3>
              <div className="text-base text-black font-geist leading-[25.6px] whitespace-pre-line">
                {jobData.jobQualifications}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
