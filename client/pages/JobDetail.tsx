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
            {/* Header with Back Button */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_back)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.9399 13.0599C7.659 12.7787 7.50122 12.3974 7.50122 11.9999C7.50122 11.6024 7.659 11.2212 7.9399 10.9399L13.5959 5.2819C13.8773 5.00064 14.2589 4.84268 14.6568 4.84277C14.8538 4.84282 15.0488 4.88167 15.2308 4.9571C15.4128 5.03253 15.5781 5.14307 15.7174 5.2824C15.8567 5.42173 15.9671 5.58713 16.0425 5.76915C16.1178 5.95117 16.1566 6.14625 16.1565 6.34325C16.1565 6.54025 16.1176 6.73531 16.0422 6.9173C15.9668 7.09929 15.8562 7.26463 15.7169 7.4039L11.1219 11.9999L15.7179 16.5959C15.8612 16.7342 15.9756 16.8997 16.0543 17.0826C16.133 17.2656 16.1744 17.4624 16.1763 17.6616C16.1781 17.8607 16.1402 18.0583 16.0649 18.2427C15.9896 18.427 15.8783 18.5946 15.7375 18.7355C15.5967 18.8764 15.4293 18.9878 15.245 19.0633C15.0607 19.1389 14.8632 19.1769 14.664 19.1753C14.4648 19.1736 14.268 19.1323 14.085 19.0538C13.9019 18.9753 13.7363 18.8611 13.5979 18.7179L7.9379 13.0599H7.9399Z" fill="#09244B"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_back">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-2xl font-medium font-geist">Opportunities</span>
                </button>

                {/* Profile Actions (from original design) */}
                <div className="flex items-center gap-4">
                  <button className="p-2.5 bg-gray-100 rounded-3xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_notification)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.99993 9C4.99993 7.14348 5.73743 5.36301 7.05018 4.05025C8.36294 2.7375 10.1434 2 11.9999 2C13.8564 2 15.6369 2.7375 16.9497 4.05025C18.2624 5.36301 18.9999 7.14348 18.9999 9V12.764L20.8219 16.408C20.9058 16.5757 20.9454 16.7621 20.937 16.9494C20.9286 17.1368 20.8724 17.3188 20.7738 17.4783C20.6752 17.6379 20.5375 17.7695 20.3737 17.8608C20.2099 17.9521 20.0255 18 19.8379 18H15.8739C15.6515 18.8582 15.1504 19.6183 14.4492 20.1609C13.748 20.7035 12.8865 20.9979 11.9999 20.9979C11.1133 20.9979 10.2518 20.7035 9.55067 20.1609C8.8495 19.6183 8.34837 18.8582 8.12593 18H4.16193C3.97441 18 3.78999 17.9521 3.6262 17.8608C3.4624 17.7695 3.32467 17.6379 3.22608 17.4783C3.12748 17.3188 3.07131 17.1368 3.06288 16.9494C3.05445 16.7621 3.09406 16.5757 3.17793 16.408L4.99993 12.764V9ZM10.2679 18C10.4435 18.304 10.6959 18.5565 11 18.732C11.304 18.9075 11.6489 18.9999 11.9999 18.9999C12.351 18.9999 12.6959 18.9075 12.9999 18.732C13.3039 18.5565 13.5564 18.304 13.7319 18H10.2679ZM11.9999 4C10.6738 4 9.40208 4.52678 8.4644 5.46447C7.52671 6.40215 6.99993 7.67392 6.99993 9V12.764C6.99991 13.0743 6.92767 13.3804 6.78893 13.658L5.61893 16H18.3819L17.2119 13.658C17.0729 13.3805 17.0003 13.0744 16.9999 12.764V9C16.9999 7.67392 16.4731 6.40215 15.5355 5.46447C14.5978 4.52678 13.326 4 11.9999 4Z" fill="#09244B"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_notification">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div className="relative">
                    <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-black font-geist">P</span>
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_dropdown_profile)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.64343 6.86197C5.76845 6.73699 5.93799 6.66678 6.11477 6.66678C6.29154 6.66678 6.46108 6.73699 6.5861 6.86197L8.0001 8.27597L9.4141 6.86197C9.53911 6.73688 9.70868 6.66657 9.88553 6.6665C10.0624 6.66644 10.232 6.73663 10.3571 6.86164C10.4822 6.98664 10.5525 7.15622 10.5526 7.33307C10.5526 7.50992 10.4824 7.67954 10.3574 7.80464L8.47143 9.69064C8.34641 9.81562 8.17688 9.88583 8.0001 9.88583C7.82332 9.88583 7.65379 9.81562 7.52877 9.69064L5.64343 7.80464C5.51845 7.67962 5.44824 7.51008 5.44824 7.33331C5.44824 7.15653 5.51845 6.98699 5.64343 6.86197Z" fill="#09244B"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_dropdown_profile">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
            </div>

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
                          <path d="M7.44667 2C7.32238 2.35493 7.30023 2.73761 7.38274 3.10451C7.46524 3.47141 7.64908 3.30777 7.91333 4.07533C6.92267 5.1 5.976 6.41533 5.436 8.034C5.26953 8.52809 5.30259 9.06765 5.52813 9.53772C5.75366 10.0078 6.15385 10.3712 6.64342 10.5505C7.13298 10.7299 7.67323 10.7109 8.14904 10.4978C8.62484 10.2846 8.9986 9.89405 9.19067 9.40933L9.23067 9.29933C9.638 8.076 10.514 7.026 11.512 6.18133C11.9996 5.77158 12.5185 5.40067 13.064 5.072L13.3247 4.91867L13.558 4.788L13.7593 4.68133L14 4.56V12.6667C14.0001 13.0031 13.8731 13.327 13.6443 13.5737C13.4156 13.8204 13.1021 13.9714 12.7667 13.9967L12.6667 14H3.33333C2.99695 14.0001 2.67296 13.8731 2.4263 13.6443C2.17965 13.4156 2.02856 13.1021 2.00333 12.7667L2 12.6667V3.33333C1.99989 2.99695 2.12694 2.67296 2.35566 2.4263C2.58439 2.17965 2.8979 2.02856 3.23333 2.00333L3.33333 2H7.44667ZM13.0087 2C13.4233 2 13.6647 2.312 13.7253 2.57067C13.786 2.83 13.7087 3.218 13.3353 3.402L13.0593 3.54267L12.95 3.60133L12.708 3.73533L12.438 3.89267L12.1453 4.07267C11.6907 4.35933 11.172 4.72333 10.6507 5.164C9.548 6.09667 8.47867 7.338 7.966 8.87733C7.91013 9.04513 7.78989 9.18385 7.63173 9.26299C7.47358 9.34213 7.29046 9.35521 7.12267 9.29933C6.95487 9.24346 6.81615 9.12322 6.73701 8.96507C6.65787 8.80691 6.64479 8.62379 6.70067 8.456C7.31933 6.6 8.58267 5.16733 9.79 4.146C10.0773 3.90267 10.3647 3.68067 10.642 3.47933L10.8487 3.33333H9.33333C9.16341 3.33314 8.99998 3.26808 8.87642 3.15143C8.75286 3.03479 8.67851 2.87536 8.66855 2.70574C8.65859 2.53611 8.71378 2.36908 8.82284 2.23878C8.9319 2.10848 9.0866 2.02474 9.25533 2.00467L9.33333 2H13.0087Z" fill="#09244B"/>
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
                          <path d="M9.33337 2C9.86381 2 10.3725 2.21071 10.7476 2.58579C11.1227 2.96086 11.3334 3.46957 11.3334 4H13.3334C13.687 4 14.0261 4.14048 14.2762 4.39052C14.5262 4.64057 14.6667 4.97971 14.6667 5.33333V12.6667C14.6667 13.0203 14.5262 13.3594 14.2762 13.6095C14.0261 13.8595 13.687 14 13.3334 14H2.66671C2.31309 14 1.97395 13.8595 1.7239 13.6095C1.47385 13.3594 1.33337 13.0203 1.33337 12.6667V5.33333C1.33337 4.97971 1.47385 4.64057 1.7239 4.39052C1.97395 4.14048 2.31309 4 2.66671 4H4.66671C4.66671 3.46957 4.87742 2.96086 5.25249 2.58579C5.62757 2.21071 6.13627 2 6.66671 2H9.33337ZM12.6667 6.66667H3.33337C3.16345 6.66686 3.00002 6.73192 2.87646 6.84857C2.7529 6.96521 2.67855 7.12464 2.66859 7.29426C2.65863 7.46389 2.71382 7.63092 2.82288 7.76122C2.93194 7.89152 3.08664 7.97526 3.25537 7.99533L3.33337 8H7.33337V8.66667C7.33356 8.83659 7.39863 9.00002 7.51527 9.12358C7.63192 9.24714 7.79134 9.32149 7.96097 9.33145C8.1306 9.34141 8.29763 9.28622 8.42793 9.17716C8.55823 9.0681 8.64197 8.9134 8.66204 8.74467L8.66671 8.66667V8H12.6667C12.8366 7.99981 13.0001 7.93475 13.1236 7.8181C13.2472 7.70146 13.3215 7.54203 13.3315 7.3724C13.3414 7.20278 13.2863 7.03575 13.1772 6.90545C13.0681 6.77514 12.9134 6.6914 12.7447 6.67133L12.6667 6.66667ZM9.33337 3.33333H6.66671C6.50342 3.33335 6.34582 3.3933 6.22379 3.50181C6.10177 3.61032 6.02381 3.75983 6.00471 3.922L6.00004 4H10C10 3.83671 9.94007 3.67911 9.83156 3.55709C9.72306 3.43506 9.57354 3.3571 9.41137 3.338L9.33337 3.33333Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_briefcase_detail">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Budget and Tags */}
              <div className="w-full lg:w-[329px] space-y-7">
                {/* Budget */}
                <div className="space-y-3">
                  <h3 className="text-sm text-black font-geist">Budget</h3>
                  <p className="text-xl font-bold text-black font-geist">{jobData.budget}</p>
                </div>

                {/* Tags */}
                <div className="space-y-3">
                  <h3 className="text-sm text-black font-geist">Tags</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {jobData.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-2 bg-gray-100 rounded-2xl text-sm text-black font-geist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description Section */}
            <div className="max-w-4xl space-y-10">
              <h2 className="text-2xl font-bold text-black font-geist">Description</h2>
              
              <div className="space-y-10">
                {/* Job Description */}
                <div className="space-y-4">
                  <h3 className="text-xl text-black font-geist">Job Description:</h3>
                  <div className="text-base text-black font-geist leading-relaxed whitespace-pre-line">
                    {jobData.jobDescription}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-4">
                  <h3 className="text-xl text-black font-geist">Key Responsibilities:</h3>
                  <div className="text-base text-black font-geist leading-relaxed whitespace-pre-line">
                    {jobData.keyResponsibilities}
                  </div>
                </div>

                {/* Job Qualifications */}
                <div className="space-y-4">
                  <h3 className="text-xl text-black font-geist">Job Qualifications:</h3>
                  <div className="text-base text-black font-geist leading-relaxed whitespace-pre-line">
                    {jobData.jobQualifications}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
