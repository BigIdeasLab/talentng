"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Briefcase, Share } from "lucide-react";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return `Posted ${date.toLocaleDateString("en-US", options)}`;
  };

  const jobData = {
    id: "9a966d06-60ed-4e54-8d06-4e3a2b4987a1",
    company: "ConnectNigeria",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/7dfd984246e9d925bd7d844d3a2bafcb1d24e1da?width=64",
    title: "Senior- Staff Product Engineer",
    location: "Lagos, Nigeria 🇳🇬",
    type: "job",
    employmentType: "Full-time",
    createdAt: "2025-09-15T21:37:47.375Z",
    compensation: "₦ 800,000/m",
    tags: ["UI Designer", "UX Researcher", "Product Manager"],
    description: `We are seeking enthusiastic and reliable Dispatch Riders to join our team.
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
    requirements: `• Must possess a valid motorcycle license and have experience riding in urban environments.
• Strong time management skills and the ability to multitask under pressure are essential.`,
    status: "active",
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
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
                    {formatDate(jobData.createdAt)}
                  </span>
                </div>

                {/* Job Title */}
                <h1 className="text-[32px] font-semibold text-black font-geist leading-[44.8px]">
                  {jobData.title}
                </h1>

                {/* Location */}
                <p className="text-base text-black font-geist">
                  {jobData.employmentType}, {jobData.type}, {jobData.location},
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 px-3.5 py-3.5 border border-gray-200 bg-white rounded-full">
                    <span className="text-sm font-medium text-black font-geist">
                      Share with friends
                    </span>
                    <Share className="w-4 h-4 text-gray-900" />
                  </button>
                  <button className="flex items-center gap-1 px-3.5 py-3.5 bg-black rounded-full">
                    <span className="text-sm font-medium text-white font-geist">
                      Apply
                    </span>
                    <Briefcase className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Budget */}
                <div className="pt-6">
                  <div className="mb-3">
                    <span className="text-sm text-black font-geist">
                      Budget
                    </span>
                  </div>
                  <div className="text-xl font-bold text-black font-geist">
                    {jobData.compensation}
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
            <h2 className="text-2xl font-semibold text-black font-geist">
              Description
            </h2>

            {/* Job Description */}
            <div className="space-y-4">
              <h3 className="text-xl text-black font-geist">
                Job Description:
              </h3>
              <div className="text-base text-black font-geist leading-[25.6px] whitespace-pre-line">
                {jobData.description}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-4">
              <h3 className="text-xl text-black font-geist">
                Key Responsibilities:
              </h3>
              <div className="text-base text-black font-geist leading-[25.6px] whitespace-pre-line">
                {jobData.keyResponsibilities}
              </div>
            </div>

            {/* Job Qualifications */}
            <div className="space-y-4">
              <h3 className="text-xl text-black font-geist">
                Job Qualifications:
              </h3>
              <div className="text-base text-black font-geist leading-[25.6px] whitespace-pre-line">
                {jobData.requirements}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
