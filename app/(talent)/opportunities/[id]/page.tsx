"use client";
import React from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();

  const jobData = {
    id: parseInt(id || "1"),
    company: "ConnectNigeria",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/7dfd984246e9d925bd7d844d3a2bafcb1d24e1da?width=64",
    title: "Senior- Staff Product Engineer",
    location: "Engineering, Full-time, Lagos, Nigeria 🇳🇬",
    postedDate: "Posted Sep 10, 2025",
    compensation: "₦ 800,000/m",
    tags: ["UI Designer", "UX Researcher", "Product Manager"],
    description: `We are seeking enthusiastic and reliable Dispatch Riders to join our team.

In this role, you will be responsible for delivering packages or other items to customers in a timely and efficient manner.

You will play a crucial role in ensuring customer satisfaction and representing our brand positively.`,
    keyResponsibilities: `Safely operate a motorcycle or other vehicle to deliver items to customers.

Delivery of items to customers/clients

Navigate through city streets efficiently to meet delivery deadlines.

Ensure the accuracy of deliveries by double-checking items before departure.`,
    requirements: `Must possess a valid motorcycle license and have experience riding in urban environments.

Strong time management skills and the ability to multitask under pressure are essential.`,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="p-6 border border-gray-200 rounded-2xl bg-white space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={jobData.logo}
                alt={jobData.company}
                className="w-10 h-10 rounded-md object-cover"
              />
              <div>
                <div className="text-sm font-medium text-gray-700">
                  {jobData.company}
                </div>
                <div className="text-xs text-gray-500">
                  {jobData.postedDate}
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-black">{jobData.title}</h1>
            <p className="text-base text-gray-700">{jobData.location}</p>

            <div className="flex items-center gap-3">
              <button className="px-3 py-2 border rounded-full text-sm bg-white">
                Share
              </button>
              <button className="px-3 py-2 rounded-full text-sm bg-black text-white">
                Apply
              </button>
            </div>
          </div>

          <section className="mt-6 p-6 border border-gray-200 rounded-2xl bg-white space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {jobData.description}
            </div>

            <h3 className="text-lg font-semibold mt-4">Key Responsibilities</h3>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {jobData.keyResponsibilities}
            </div>

            <h3 className="text-lg font-semibold mt-4">Requirements</h3>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {jobData.requirements}
            </div>
          </section>
        </div>

        <aside className="w-full lg:w-80 space-y-4">
          <div className="p-6 border border-gray-200 rounded-2xl bg-white">
            <h4 className="text-sm text-gray-500">Compensation</h4>
            <div className="text-xl font-bold">{jobData.compensation}</div>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl bg-white">
            <h4 className="text-sm text-gray-500">Tags</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {jobData.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
