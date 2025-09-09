import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { JobCard } from "@/components/JobCard";

export default function Opportunities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    jobs: true,
    designSystem: true,
    location: false,
  });

  const handleFilterChange = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const handleReset = () => {
    setSelectedFilters({
      jobs: false,
      designSystem: false,
      location: false,
    });
    setSearchQuery("");
  };

  // Mock job data based on the Figma design
  const jobListings = [
    {
      id: 1,
      company: "ConnectNigeria",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/3acc0fa377039f5a419a459da563621ed9ec35b1?width=64",
      title: "Senior- Staff Product Engineer",
      location: "Full-time, Lagos, Nigeria 🇳🇬",
      talent: {
        name: "Promise Olaifa",
        avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b7a14a0aa489cb96b364bfa56de3bb04acfc0e08?width=64",
        verified: true
      }
    },
    {
      id: 2,
      company: "Dano Milk",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/b77895e271e6e3c18732c723ced620aefd9347f5?width=64",
      title: "Senior- Staff Product Engineer",
      location: "Full-time, Lagos, Nigeria 🇳🇬",
      talent: {
        name: "Desmond Awere",
        avatar: "https://api.builder.io/api/v1/image/assets/TEMP/0764040b7d3fa40fc56c1df4358f3de87596efe6?width=64",
        verified: true
      }
    },
    {
      id: 3,
      company: "Lush Hair",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/2b5a993e6b90f30bb7b3eda09a7ef3daa36d1d08?width=64",
      title: "Senior- Staff Product Engineer",
      location: "Full-time, Lagos, Nigeria 🇳🇬",
      talent: {
        name: "Zeenie Ejike",
        avatar: "https://api.builder.io/api/v1/image/assets/TEMP/8c82ca4b3d3616469ab02084bfa2fd4e1e2c0980?width=64",
        verified: true
      }
    },
  ];

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
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Title */}
            <div className="space-y-5">
              <h1 className="text-xl sm:text-2xl font-medium text-black font-geist">
                Opportunities
              </h1>
              <div className="w-full h-px bg-gray-100"></div>
            </div>

            {/* Search and Filters Section */}
            <div className="space-y-8">
              <h2 className="text-lg sm:text-xl font-bold text-black font-geist">
                Opportunities
              </h2>

              {/* Search Bar */}
              <div className="relative">
                <div className="flex items-center justify-between p-3 border border-gray-300 rounded-[44px] bg-white shadow-sm">
                  <input
                    type="text"
                    placeholder="Looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-gray-700 font-geist text-base bg-transparent border-none outline-none placeholder-gray-700"
                  />
                  <button className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_search)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 8.79942C2.00009 7.7151 2.25949 6.64651 2.75656 5.68283C3.25362 4.71914 3.97393 3.8883 4.8574 3.25961C5.74087 2.63092 6.76188 2.22263 7.83524 2.06879C8.90859 1.91495 10.0032 2.02002 11.0277 2.37524C12.0522 2.73047 12.9768 3.32554 13.7246 4.11081C14.4723 4.89608 15.0214 5.84879 15.3261 6.88943C15.6307 7.93008 15.6821 9.02849 15.4759 10.093C15.2697 11.1576 14.812 12.1574 14.1408 13.009L17.0624 15.9306C17.2081 16.0815 17.2888 16.2836 17.2869 16.4933C17.2851 16.7031 17.201 16.9037 17.0527 17.0521C16.9043 17.2004 16.7037 17.2845 16.4939 17.2864C16.2842 17.2882 16.0821 17.2075 15.9312 17.0618L13.0096 14.1402C12.0069 14.9306 10.8019 15.4228 9.53258 15.5603C8.26324 15.6979 6.98082 15.4753 5.83207 14.918C4.68333 14.3607 3.71468 13.4913 3.03699 12.4093C2.35929 11.3272 1.99991 10.0762 2 8.79942ZM8.8 5.19942C8.58783 5.19942 8.38434 5.28371 8.23431 5.43374C8.08429 5.58377 8 5.78725 8 5.99942C8 6.21159 8.08429 6.41508 8.23431 6.56511C8.38434 6.71514 8.58783 6.79942 8.8 6.79942C9.33043 6.79942 9.83914 7.01014 10.2142 7.38521C10.5893 7.76028 10.8 8.26899 10.8 8.79942C10.8 9.01159 10.8843 9.21508 11.0343 9.36511C11.1843 9.51514 11.3878 9.59942 11.6 9.59942C11.8122 9.59942 12.0157 9.51514 12.1657 9.36511C12.3157 9.21508 12.4 9.01159 12.4 8.79942C12.4 7.84464 12.0207 6.92897 11.3456 6.25384C10.6705 5.57871 9.75478 5.19942 8.8 5.19942Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_search">
                          <rect width="19.2" height="19.2" fill="white" transform="translate(0.399902 0.399902)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleFilterChange('jobs')}
                  className={`flex items-center gap-2 px-2.5 py-2.5 rounded-[20px] text-sm font-medium font-geist transition-colors ${
                    selectedFilters.jobs 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-100 text-black'
                  }`}
                >
                  Jobs
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_down)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.79493 12.0448C9.58399 12.2555 9.29805 12.3738 8.99993 12.3738C8.7018 12.3738 8.41586 12.2555 8.20493 12.0448L3.96143 7.80279C3.75048 7.59175 3.63201 7.30555 3.63208 7.00715C3.63215 6.70876 3.75075 6.42262 3.9618 6.21167C4.17285 6.00072 4.45905 5.88225 4.75744 5.88232C5.05583 5.88239 5.34198 6.001 5.55293 6.21204L8.99993 9.65904L12.4469 6.21204C12.659 6.00701 12.9431 5.89349 13.2381 5.89591C13.5331 5.89833 13.8153 6.01651 14.024 6.225C14.2327 6.43349 14.3511 6.7156 14.3538 7.01057C14.3565 7.30554 14.2433 7.58977 14.0384 7.80204L9.79568 12.0455L9.79493 12.0448Z" fill={selectedFilters.jobs ? "white" : "black"}/>
                    </g>
                    <defs>
                      <clipPath id="clip0_down">
                        <rect width="18" height="18" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <button
                  onClick={() => handleFilterChange('designSystem')}
                  className={`flex items-center gap-2 px-2.5 py-2.5 rounded-[20px] text-sm font-medium font-geist transition-colors ${
                    selectedFilters.designSystem 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-100 text-black'
                  }`}
                >
                  Design system
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_down2)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.79493 12.0448C9.58399 12.2555 9.29805 12.3738 8.99993 12.3738C8.7018 12.3738 8.41586 12.2555 8.20493 12.0448L3.96143 7.80279C3.75048 7.59175 3.63201 7.30555 3.63208 7.00715C3.63215 6.70876 3.75075 6.42262 3.9618 6.21167C4.17285 6.00072 4.45905 5.88225 4.75744 5.88232C5.05583 5.88239 5.34198 6.001 5.55293 6.21204L8.99993 9.65904L12.4469 6.21204C12.659 6.00701 12.9431 5.89349 13.2381 5.89591C13.5331 5.89833 13.8153 6.01651 14.024 6.225C14.2327 6.43349 14.3511 6.7156 14.3538 7.01057C14.3565 7.30554 14.2433 7.58977 14.0384 7.80204L9.79568 12.0455L9.79493 12.0448Z" fill={selectedFilters.designSystem ? "white" : "black"}/>
                    </g>
                    <defs>
                      <clipPath id="clip0_down2">
                        <rect width="18" height="18" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <button
                  onClick={() => handleFilterChange('location')}
                  className={`flex items-center gap-2 px-2.5 py-2.5 rounded-[20px] text-sm font-medium font-geist transition-colors ${
                    selectedFilters.location 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-100 text-black'
                  }`}
                >
                  Location
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_down3)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.79493 12.0448C9.58399 12.2555 9.29805 12.3738 8.99993 12.3738C8.7018 12.3738 8.41586 12.2555 8.20493 12.0448L3.96143 7.80279C3.75048 7.59175 3.63201 7.30555 3.63208 7.00715C3.63215 6.70876 3.75075 6.42262 3.9618 6.21167C4.17285 6.00072 4.45905 5.88225 4.75744 5.88232C5.05583 5.88239 5.34198 6.001 5.55293 6.21204L8.99993 9.65904L12.4469 6.21204C12.659 6.00701 12.9431 5.89349 13.2381 5.89591C13.5331 5.89833 13.8153 6.01651 14.024 6.225C14.2327 6.43349 14.3511 6.7156 14.3538 7.01057C14.3565 7.30554 14.2433 7.58977 14.0384 7.80204L9.79568 12.0455L9.79493 12.0448Z" fill={selectedFilters.location ? "white" : "black"}/>
                    </g>
                    <defs>
                      <clipPath id="clip0_down3">
                        <rect width="18" height="18" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <button
                  onClick={handleReset}
                  className="px-2.5 py-2.5 border border-gray-100 rounded-[20px] bg-white text-gray-500 text-sm font-medium font-geist hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Outstanding Talents Section */}
            <div className="space-y-6">
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-medium text-black font-geist">
                  Outstanding Talents
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 font-geist">
                    Standout talents making waves around the web
                  </p>
                  <button className="text-base font-medium text-gray-600 font-geist underline hover:text-gray-800 transition-colors">
                    View more
                  </button>
                </div>
              </div>

              {/* Job Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {jobListings.map((job) => (
                  <div key={job.id} className="space-y-4">
                    {/* Job Card */}
                    <div className="p-6 border border-gray-200 rounded-[32px] bg-white space-y-4">
                      <div className="flex items-start gap-4">
                        <img 
                          src={job.logo} 
                          alt={job.company}
                          className="w-8 h-8 rounded-3xl object-cover"
                        />
                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <div className="space-y-2">
                              <h4 className="text-base font-geist text-black">
                                {job.company}
                              </h4>
                              <h5 className="text-lg font-bold text-black font-geist">
                                {job.title}
                              </h5>
                            </div>
                            <p className="text-base text-black font-geist">
                              {job.location}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2.5 px-3.5 py-3.5 border border-gray-200 rounded-3xl bg-white text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors">
                              Share 
                              <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_share)">
                                  <path d="M7.44667 2.5C7.32238 2.85493 7.30023 3.23761 7.38274 3.60451C7.46524 3.97141 7.64908 4.30777 7.91333 4.57533C6.92267 5.6 5.976 6.91533 5.436 8.534C5.26953 9.02809 5.30259 9.56765 5.52813 10.0377C5.75366 10.5078 6.15385 10.8712 6.64342 11.0505C7.13298 11.2299 7.67323 11.2109 8.14904 10.9978C8.62484 10.7846 8.9986 10.394 9.19067 9.90933L9.23067 9.79933C9.638 8.576 10.514 7.526 11.512 6.68133C11.9996 6.27158 12.5185 5.90067 13.064 5.572L13.3247 5.41867L13.558 5.288L13.7593 5.18133L14 5.06V13.1667C14.0001 13.5031 13.8731 13.827 13.6443 14.0737C13.4156 14.3204 13.1021 14.4714 12.7667 14.4967L12.6667 14.5H3.33333C2.99695 14.5001 2.67296 14.3731 2.4263 14.1443C2.17965 13.9156 2.02856 13.6021 2.00333 13.2667L2 13.1667V3.83333C1.99989 3.49695 2.12694 3.17296 2.35566 2.9263C2.58439 2.67965 2.8979 2.52856 3.23333 2.50333L3.33333 2.5H7.44667ZM13.0087 2.5C13.4233 2.5 13.6647 2.812 13.7253 3.07067C13.786 3.33 13.7087 3.718 13.3353 3.902L13.0593 4.04267L12.95 4.10133L12.708 4.23533L12.438 4.39267L12.1453 4.57267C11.6907 4.85933 11.172 5.22333 10.6507 5.664C9.548 6.59667 8.47867 7.838 7.966 9.37733C7.91013 9.54513 7.78989 9.68385 7.63173 9.76299C7.47358 9.84213 7.29046 9.85521 7.12267 9.79933C6.95487 9.74346 6.81615 9.62322 6.73701 9.46507C6.65787 9.30691 6.64479 9.12379 6.70067 8.956C7.31933 7.1 8.58267 5.66733 9.79 4.646C10.0773 4.40267 10.3647 4.18067 10.642 3.97933L10.8487 3.83333H9.33333C9.16341 3.83314 8.99998 3.76808 8.87642 3.65143C8.75286 3.53479 8.67851 3.37536 8.66855 3.20574C8.65859 3.03611 8.71378 2.86908 8.82284 2.73878C8.9319 2.60848 9.0866 2.52474 9.25533 2.50467L9.33333 2.5H13.0087Z" fill="#09244B"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_share">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                            <button className="flex items-center gap-2.5 px-3.5 py-3.5 rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-900 transition-colors">
                              Apply
                              <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_briefcase)">
                                  <path d="M9.33325 2.5C9.86368 2.5 10.3724 2.71071 10.7475 3.08579C11.1225 3.46086 11.3333 3.96957 11.3333 4.5H13.3333C13.6869 4.5 14.026 4.64048 14.2761 4.89052C14.5261 5.14057 14.6666 5.47971 14.6666 5.83333V13.1667C14.6666 13.5203 14.5261 13.8594 14.2761 14.1095C14.026 14.3595 13.6869 14.5 13.3333 14.5H2.66659C2.31296 14.5 1.97382 14.3595 1.72378 14.1095C1.47373 13.8594 1.33325 13.5203 1.33325 13.1667V5.83333C1.33325 5.47971 1.47373 5.14057 1.72378 4.89052C1.97382 4.64048 2.31296 4.5 2.66659 4.5H4.66658C4.66658 3.96957 4.8773 3.46086 5.25237 3.08579C5.62744 2.71071 6.13615 2.5 6.66658 2.5H9.33325ZM12.6666 7.16667H3.33325C3.16333 7.16686 2.9999 7.23192 2.87634 7.34857C2.75278 7.46521 2.67843 7.62464 2.66847 7.79426C2.65851 7.96389 2.7137 8.13092 2.82276 8.26122C2.93182 8.39152 3.08652 8.47526 3.25525 8.49533L3.33325 8.5H7.33325V9.16667C7.33344 9.33659 7.3985 9.50002 7.51515 9.62358C7.6318 9.74714 7.79122 9.82149 7.96085 9.83145C8.13048 9.84141 8.2975 9.78622 8.42781 9.67716C8.55811 9.5681 8.64185 9.4134 8.66192 9.24467L8.66658 9.16667V8.5H12.6666C12.8365 8.49981 12.9999 8.43475 13.1235 8.3181C13.2471 8.20146 13.3214 8.04203 13.3314 7.8724C13.3413 7.70278 13.2861 7.53575 13.1771 7.40545C13.068 7.27514 12.9133 7.1914 12.7446 7.17133L12.6666 7.16667ZM9.33325 3.83333H6.66658C6.5033 3.83335 6.34569 3.8933 6.22367 4.00181C6.10165 4.11032 6.02369 4.25983 6.00458 4.422L5.99992 4.5H9.99992C9.9999 4.33671 9.93995 4.17911 9.83144 4.05709C9.72294 3.93506 9.57342 3.8571 9.41125 3.838L9.33325 3.83333Z" fill="white"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_briefcase">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Talent Info */}
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img 
                          src={job.talent.avatar} 
                          alt={job.talent.name}
                          className="w-8 h-8 rounded-2xl object-cover"
                        />
                        {job.talent.verified && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-gray-500 font-geist">
                          {job.talent.name}
                        </span>
                        {job.talent.verified && (
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_verified)">
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.4291 0.760641C13.2504 0.475024 12.9871 0.252243 12.6758 0.12331C12.3645 -0.00562305 12.0208 -0.0342933 11.6924 0.0412909L9.36216 0.576591C9.12335 0.631484 8.87519 0.631484 8.63638 0.576591L6.3061 0.0412909C5.97776 -0.0342933 5.63403 -0.00562305 5.32276 0.12331C5.01148 0.252243 4.74814 0.475024 4.5694 0.760641L3.29928 2.78778C3.16967 2.99516 2.99471 3.17014 2.78734 3.30105L0.760332 4.57125C0.475225 4.74985 0.252786 5.01277 0.123889 5.32354C-0.00500796 5.63431 -0.0339682 5.97749 0.0410279 6.30547L0.576293 8.63849C0.630984 8.87691 0.630984 9.12461 0.576293 9.36303L0.0410279 11.6948C-0.0342597 12.0229 -0.00544518 12.3664 0.123466 12.6774C0.252376 12.9885 0.474979 13.2516 0.760332 13.4303L2.78734 14.7005C2.99471 14.8301 3.16967 15.0051 3.30057 15.2124L4.5707 17.2396C4.93618 17.8241 5.63345 18.1132 6.3061 17.9589L8.63638 17.4236C8.87519 17.3687 9.12335 17.3687 9.36216 17.4236L11.6937 17.9589C12.0219 18.0342 12.3653 18.0054 12.6763 17.8765C12.9874 17.7476 13.2505 17.525 13.4291 17.2396L14.6993 15.2124C14.8289 15.0051 15.0038 14.8301 15.2112 14.7005L17.2395 13.4303C17.5249 13.2513 17.7474 12.9879 17.8761 12.6766C18.0047 12.3653 18.0332 12.0217 17.9575 11.6935L17.4235 9.36303C17.3687 9.1242 17.3687 8.87603 17.4235 8.6372L17.9588 6.30547C18.0342 5.97744 18.0056 5.63406 17.8769 5.32305C17.7483 5.01203 17.5259 4.74881 17.2408 4.56995L15.2125 3.29975C15.0054 3.1699 14.8304 2.99487 14.7006 2.78778L13.4291 0.760641ZM12.7772 6.10975C12.8574 5.96234 12.8773 5.78958 12.8326 5.62782C12.788 5.46606 12.6824 5.32791 12.538 5.24244C12.3936 5.15697 12.2217 5.13085 12.0584 5.16957C11.8952 5.20828 11.7533 5.30882 11.6626 5.45002L8.27349 11.1867L6.22704 9.22693C6.16633 9.16459 6.09368 9.11512 6.01344 9.08146C5.93319 9.0478 5.84699 9.03065 5.75998 9.03103C5.67296 9.03141 5.58691 9.04931 5.50696 9.08367C5.42702 9.11802 5.35481 9.16813 5.29464 9.231C5.23448 9.29387 5.18759 9.36821 5.15677 9.44959C5.12596 9.53098 5.11185 9.61773 5.11529 9.70469C5.11872 9.79164 5.13964 9.87701 5.17678 9.95571C5.21392 10.0344 5.26653 10.1048 5.33147 10.1627L7.96762 12.6889C8.03818 12.7564 8.12306 12.807 8.21594 12.8371C8.30881 12.8671 8.40728 12.8758 8.50398 12.8625C8.60068 12.8491 8.69312 12.8141 8.7744 12.7601C8.85568 12.706 8.92369 12.6342 8.97335 12.5502L12.7772 6.10975Z" fill="#0095EC"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_verified">
                                <rect width="18" height="18" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
