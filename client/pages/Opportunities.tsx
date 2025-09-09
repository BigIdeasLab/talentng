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

  const handleShare = (jobId: number) => {
    // TODO: Implement share functionality
    console.log("Sharing job:", jobId);
  };

  const handleApply = (jobId: number) => {
    // TODO: Implement apply functionality or navigation to application
    console.log("Applying to job:", jobId);
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
                  <JobCard
                    key={job.id}
                    id={job.id}
                    company={job.company}
                    logo={job.logo}
                    title={job.title}
                    location={job.location}
                    talent={job.talent}
                    onShare={handleShare}
                    onApply={handleApply}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
