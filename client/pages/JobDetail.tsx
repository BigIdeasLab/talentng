import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock job data - in a real app, this would fetch from an API
  const jobData = {
    id: parseInt(id || "1"),
    company: "ConnectNigeria",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/7dfd984246e9d925bd7d844d3a2bafcb1d24e1da?width=64",
    title: "Senior- Staff Product Engineer",
    details: "Engineering, Full-time, Lagos, Nigeria 🇳🇬",
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
• Strong time management skills and the ability to multitask under pressure are essential.`
  };

  const handleBack = () => {
    navigate("/opportunities");
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log("Sharing job:", jobData.id);
  };

  const handleApply = () => {
    // TODO: Implement apply functionality
    console.log("Applying to job:", jobData.id);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />
        
        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* Job Details Layout */}
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column - Job Details */}
              <div className="flex-1 max-w-3xl">
                <div className="p-8 border border-gray-200 rounded-[44px] bg-white space-y-4">
                  {/* Company Info */}
                  <div className="flex items-center gap-4.5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={jobData.logo} 
                        alt={jobData.company}
                        className="w-8 h-8 rounded-3xl object-cover"
                      />
                      <span className="text-base font-geist text-black">{jobData.company}</span>
                    </div>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <span className="text-sm font-medium text-gray-500 font-geist">{jobData.postedDate}</span>
                  </div>

                  {/* Job Title */}
                  <h1 className="text-3xl font-bold text-black font-geist leading-tight">
                    {jobData.title}
                  </h1>

                  {/* Job Details */}
                  <p className="text-base text-black font-geist">
                    {jobData.details}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-1 px-3.5 py-3.5 border border-gray-200 rounded-3xl bg-white text-black font-geist text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                      Share with friends
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_share_detail)">
                          <path d="M7.44667 2C7.32238 2.35493 7.30023 2.73761 7.38274 3.10451C7.46524 3.47141 7.64908 3.30777 7.91333 4.07533C6.92267 5.1 5.976 6.41533 5.436 8.034C5.26953 8.52809 5.30259 9.06765 5.52813 9.53772C5.75366 10.0078 6.15385 10.3712 6.64342 10.5505C7.13298 10.7299 7.67323 10.7109 8.14904 10.4978C8.62484 10.2846 8.9986 9.89405 9.19067 9.40933L9.23067 9.29933C9.638 8.076 10.514 7.026 11.512 6.18133C11.9996 5.77158 12.5185 5.40067 13.064 5.072L13.3247 4.91867L13.558 4.788L13.7593 4.68133L14 4.56V12.6667C14.0001 13.0031 13.8731 13.327 13.6443 13.5737C13.4156 13.8204 13.1021 13.9714 12.7667 13.9967L12.6667 14H3.33333C2.99695 14.0001 2.67296 13.8731 2.4263 13.6443C2.17965 13.4156 2.02856 13.1021 2.00333 12.7667L2 12.6667V3.33333C1.99989 2.99695 2.12694 2.67296 2.35566 2.9263C2.58439 2.67965 2.8979 2.52856 3.23333 2.50333L3.33333 2H7.44667ZM13.0087 2C13.4233 2 13.6647 2.312 13.7253 2.57067C13.786 2.83 13.7087 3.218 13.3353 3.402L13.0593 3.54267L12.95 3.60133L12.708 3.73533L12.438 3.89267L12.1453 4.07267C11.6907 4.35933 11.172 4.72333 10.6507 5.164C9.548 6.09667 8.47867 7.338 7.966 8.87733C7.91013 9.04513 7.78989 9.18385 7.63173 9.26299C7.47358 9.34213 7.29046 9.35521 7.12267 9.29933C6.95487 9.24346 6.81615 9.12322 6.73701 8.96507C6.65787 8.80691 6.64479 8.62379 6.70067 8.456C7.31933 6.6 8.58267 5.16733 9.79 4.146C10.0773 3.90267 10.3647 3.68067 10.642 3.47933L10.8487 3.33333H9.33333C9.16341 3.33314 8.99998 3.26808 8.87642 3.15143C8.75286 3.03479 8.67851 2.87536 8.66855 2.70574C8.65859 2.53611 8.71378 2.36908 8.82284 2.23878C8.9319 2.10848 9.0866 2.02474 9.25533 2.00467L9.33333 2H13.0087Z" fill="#09244B"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_share_detail">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <button 
                      onClick={handleApply}
                      className="flex items-center gap-1 px-3.5 py-3.5 rounded-3xl bg-black text-white font-geist text-sm font-medium hover:bg-gray-900 transition-colors"
                    >
                      Apply
                      <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_briefcase_detail)">
                          <path d="M9.33337 2C9.86381 2 10.3725 2.21071 10.7476 2.58579C11.1227 2.96086 11.3334 3.46957 11.3334 4H13.3334C13.687 4 14.0261 4.14048 14.2762 4.39052C14.5262 4.64057 14.6667 4.97971 14.6667 5.33333V12.6667C14.6667 13.0203 14.5262 13.3594 14.2762 13.6095C14.0261 13.8595 13.687 14 13.3334 14H2.66671C2.31309 14 1.97395 13.8595 1.7239 13.6095C1.47385 13.3594 1.33337 13.0203 1.33337 12.6667V5.33333C1.33337 4.97971 1.47385 4.64057 1.7239 4.39052C1.97395 4.14048 2.31309 4 2.66671 4H4.66671C4.66671 3.46957 4.87742 2.96086 5.25249 2.58579C5.62757 2.21071 6.13627 2 6.66671 2H9.33337ZM12.6667 6.66667H3.33337C3.16345 6.66686 3.00002 6.73192 2.87646 6.84857C2.7529 6.96521 2.67855 7.12464 2.66859 7.29426C2.65863 7.46389 2.71382 7.63092 2.82288 7.76122C2.93194 7.89152 3.08664 7.97526 3.25537 7.99533L3.33337 8H7.33337V9.16667C7.33344 9.33659 7.39863 9.00002 7.51527 9.12358C7.63192 9.24714 7.79134 9.32149 7.96097 9.33145C8.1306 9.34141 8.29763 9.28622 8.42793 9.17716C8.55823 9.0681 8.64197 8.9134 8.66204 8.74467L8.66671 8.66667V8H12.6667C12.8366 7.99981 13.0001 7.93475 13.1236 7.8181C13.2472 7.70146 13.3215 7.54203 13.3315 7.3724C13.3414 7.20278 13.2863 7.03575 13.1772 6.90545C13.0681 6.77514 12.9134 6.6914 12.7447 6.67133L12.6667 6.66667ZM9.33337 3.33333H6.66671C6.50342 3.33335 6.34582 3.8933 6.22379 4.00181C6.10177 4.11032 6.02381 4.25983 6.00471 4.422L6.00004 4H10C10 3.83671 9.94007 3.67911 9.83156 3.55709C9.72306 3.43506 9.57354 3.3571 9.41137 3.338L9.33337 3....