"use client";
import React, { useState } from "react";
import { MentorCard } from "@/components/MentorCard";

export default function Mentorship() {
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

  const handleBookSession = (mentorId: number) => {
    // TODO: Implement book session functionality
    console.log("Booking session with mentor:", mentorId);
  };

  // Mock mentor data based on the Figma design
  const allMentors = [
    {
      id: 1,
      name: "Promise Olaifa",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/62a092bd6bc517738cffbf8ef4fbcb6b9763da78?width=128",
      title: "Product Designer",
      company: "ConnectNigeria",
      location: "Lagos,Nigeria 🇳🇬",
      description: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      availableFor: ["Mentoring", "Giving resume feedback", "Participating in User Research", "Career guidance", "Portfolio review", "Mock interviews", "Design critique"],
      verified: true,
    },
    {
      id: 2,
      name: "Desmond Awere",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3fb16dd7cc66e6d606a217c67c37ff5bb910a530?width=128",
      title: "Product Designer",
      company: "ConnectNigeria",
      location: "Frankfurt,Germany 🇩🇪",
      description: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      availableFor: ["Mentoring", "Giving resume feedback", "Participating in User Research", "Career guidance", "Portfolio review"],
      verified: true,
    },
    {
      id: 3,
      name: "Zeenie",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/e6c405f1f8a640a9e5d63adf52ea7849f582c532?width=128",
      title: "Product Designer",
      company: "ConnectNigeria",
      location: "Texas,USA 🇺🇸",
      description: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      availableFor: ["Mentoring", "Giving resume feedback", "Participating in User Research", "Design strategy", "User research"],
      verified: true,
    },
  ];

  // Filter logic
  const filteredMentors = allMentors.filter((mentor) => {
    // Search filter
    const searchTerm = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery ||
      mentor.name.toLowerCase().includes(searchTerm) ||
      mentor.title.toLowerCase().includes(searchTerm) ||
      mentor.company.toLowerCase().includes(searchTerm) ||
      mentor.location.toLowerCase().includes(searchTerm);

    return matchesSearch;
  });

  return (
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Top section with title and apply button */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-black font-geist">
                Mentorship
              </h1>
              <button className="flex px-[27px] py-2.5 items-center gap-[27px] rounded-[20px] bg-black">
                <span className="text-base font-medium text-white font-geist">
                  Apply to be a Mentor
                </span>
              </button>
            </div>

            {/* Search and Filters Section */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="flex px-3 py-3 justify-between items-center self-stretch rounded-[44px] border border-[#D0D5DD] bg-white shadow-[0px_4px_8px_0px_rgba(224,224,224,0.25)]">
                <span className="text-base font-normal text-[#344054] font-geist">
                  {searchQuery || "Looking for?"}
                </span>
                <div className="flex px-[6.4px] py-[6.4px] items-center gap-2 rounded-[19.2px] bg-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_search)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 8.79942C2.00009 7.7151 2.25949 6.64651 2.75656 5.68283C3.25362 4.71914 3.97393 3.8883 4.8574 3.25961C5.74087 2.63092 6.76188 2.22263 7.83524 2.06879C8.90859 1.91495 10.0032 2.02002 11.0277 2.37524C12.0522 2.73047 12.9768 3.32554 13.7246 4.11081C14.4723 4.89608 15.0214 5.84879 15.3261 6.88943C15.6307 7.93008 15.6821 9.02849 15.4759 10.093C15.2697 11.1576 14.812 12.1574 14.1408 13.009L17.0624 15.9306C17.2081 16.0815 17.2888 16.2836 17.2869 16.4933C17.2851 16.7031 17.201 16.9037 17.0527 17.0521C16.9043 17.2004 16.7037 17.2845 16.4939 17.2864C16.2842 17.2882 16.0821 17.2075 15.9312 17.0618L13.0096 14.1402C12.0069 14.9306 10.8019 15.4228 9.53258 15.5603C8.26324 15.6979 6.98082 15.4753 5.83207 14.918C4.68333 14.3607 3.71468 13.4913 3.03699 12.4093C2.35929 11.3272 1.99991 10.0762 2 8.79942ZM8.8 5.19942C8.58783 5.19942 8.38434 5.28371 8.23431 5.43374C8.08429 5.58377 8 5.78725 8 5.99942C8 6.21159 8.08429 6.41508 8.23431 6.56511C8.38434 6.71514 8.58783 6.79942 8.8 6.79942C9.33043 6.79942 9.83914 7.01014 10.2142 7.38521C10.5893 7.76028 10.8 8.26899 10.8 8.79942C10.8 9.01159 10.8843 9.21508 11.0343 9.36511C11.1843 9.51514 11.3878 9.59942 11.6 9.59942C11.8122 9.59942 12.0157 9.51514 12.1657 9.36511C12.3157 9.21508 12.4 9.01159 12.4 8.79942C12.4 7.84464 12.0207 6.92897 11.3456 6.25384C10.6705 5.57871 9.75478 5.19942 8.8 5.19942Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_search">
                        <rect
                          width="19.2"
                          height="19.2"
                          fill="white"
                          transform="translate(0.399902 0.399902)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleFilterChange('jobs')}
                  className={`flex px-2.5 py-2.5 justify-between items-center rounded-[20px] ${
                    selectedFilters.jobs 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-100 text-black'
                  }`}
                >
                  <span className="text-[13px] font-medium font-geist">
                    Jobs
                  </span>
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
                  className={`flex px-2.5 py-2.5 items-center gap-2 rounded-[20px] ${
                    selectedFilters.designSystem 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-100 text-black'
                  }`}
                >
                  <span className="text-[13px] font-medium font-geist">
                    Design system
                  </span>
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
                  className={`flex px-2.5 py-2.5 items-center gap-2 rounded-[20px] ${
                    selectedFilters.location 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-100 text-black'
                  }`}
                >
                  <span className="text-[13px] font-medium font-geist">
                    Location
                  </span>
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
                  className="flex px-2.5 py-2.5 items-center gap-2 rounded-[20px] border border-gray-100 bg-white text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[13px] font-medium font-geist">
                    Reset
                  </span>
                </button>
              </div>
            </div>

            {/* Outstanding Mentors Section */}
            <div className="space-y-8">
              <div className="space-y-2.5">
                <h2 className="text-2xl font-medium text-[#14171F] font-geist">
                  Outstanding Mentors
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-base font-normal text-gray-500 font-geist">
                    {filteredMentors.length === 0
                      ? "No mentors found matching your criteria"
                      : `Standout Mentors making waves around the web`
                    }
                  </p>
                  {filteredMentors.length > 0 && (
                    <button className="text-base font-medium text-[#373F51] font-geist underline hover:text-gray-800 transition-colors">
                      View more
                    </button>
                  )}
                </div>
              </div>

              {/* Mentor Cards Grid */}
              <div className="flex items-center gap-[26px] flex-wrap">
                {filteredMentors.length === 0 ? (
                  <div className="col-span-full text-center py-12 w-full">
                    <p className="text-lg text-gray-500 font-geist">
                      No mentors match your search criteria.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-4 px-6 py-2 bg-black text-white rounded-3xl font-geist text-sm font-medium hover:bg-gray-900 transition-colors"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  filteredMentors.map((mentor) => (
                    <MentorCard
                      key={mentor.id}
                      id={mentor.id}
                      name={mentor.name}
                      avatar={mentor.avatar}
                      title={mentor.title}
                      company={mentor.company}
                      location={mentor.location}
                      description={mentor.description}
                      availableFor={mentor.availableFor}
                      verified={mentor.verified}
                      onBookSession={handleBookSession}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
  );
}
