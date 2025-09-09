import React from "react";
import TalentCard from "./TalentCard";

const TalentShowcase = () => {
  const talentSections = [
    [
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/9d8baa0bd558d3282042599890d5cfcae36e3d5c?width=748",
        coverAlt: "Daylight Health Brand Identity & Web Design",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/b7a14a0aa489cb96b364bfa56de3bb04acfc0e08?width=64",
        name: "Promise Olaifa",
        isOnline: true,
        isVerified: true,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/076beef786898c438df9c52256dd894037d34338?width=748",
        coverAlt: "Wack•A•Doo Hot Sauce Branding & Packaging",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/187de602f27fe4361036da4edd6ff448b436f4d5?width=64",
        name: "Ebele Okafor",
        isOnline: false,
        isVerified: false,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/88824e4331ec3cc75d48205a2928968e96bab1c2?width=748",
        coverAlt: "Okrika Social Media",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/8c82ca4b3d3616469ab02084bfa2fd4e1e2c0980?width=64",
        name: "Zeenie Ejike",
        isOnline: true,
        isVerified: true,
      },
    ],
    [
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/b591a0261fd1a62b8288ee238977947abf907b37?width=748",
        coverAlt: "Voila - Branding",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/18300d9d8a241e397277a5928a04523f93eafedf?width=64",
        name: "Jacob Mattew",
        isOnline: true,
        isVerified: false,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/6ae67bc5dffa6e85b6c04ed91c177545cca95edf?width=748",
        coverAlt: "Interactive Landing Page for Megadeth",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/9f1d0a17526a22019ed1704b3396902f7ca41943?width=64",
        name: "Apex Dang",
        isOnline: false,
        isVerified: true,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/0ac8e26fbd5f0b7559597ccaa2479aed99839026?width=748",
        coverAlt: "Brand Identity Design for Cordelia's Restaurant",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/927dd13cab6eb91b469067de3c88f49f11a0901a?width=64",
        name: "Paul Wesley",
        isOnline: true,
        isVerified: true,
      },
    ],
    [
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/7a7d06d2171bb91f364bf0e0d5ec52c05746b91c?width=748",
        coverAlt: "SpokesPup Repositioned: Redefining Pet Culture",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/b7a14a0aa489cb96b364bfa56de3bb04acfc0e08?width=64",
        name: "Promise Olaifa",
        isOnline: true,
        isVerified: true,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/81a84f91e96e10ab18642d5f40839a2152540580?width=748",
        coverAlt: "Franco Eatery Visual Branding Project",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/187de602f27fe4361036da4edd6ff448b436f4d5?width=64",
        name: "Ebele Okafor",
        isOnline: false,
        isVerified: true,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/2a3607311420aa86f0588b26f12fdbe95fc1a23c?width=748",
        coverAlt: "Brewery Branding",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/8c82ca4b3d3616469ab02084bfa2fd4e1e2c0980?width=64",
        name: "Zeenie Ejike",
        isOnline: true,
        isVerified: true,
      },
    ],
    [
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/06c459e381e587618b006e88e4aabbc9f0241632?width=748",
        coverAlt: "LiveMoar Logo Design and Branding Guideline",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/b7a14a0aa489cb96b364bfa56de3bb04acfc0e08?width=64",
        name: "Promise Olaifa",
        isOnline: true,
        isVerified: true,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/25d84f16e3419a3033b7198bea46b7603b653980?width=748",
        coverAlt: "Juicebox - Figma to Framer build",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/187de602f27fe4361036da4edd6ff448b436f4d5?width=64",
        name: "Ebele Okafor",
        isOnline: false,
        isVerified: true,
      },
      {
        coverImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/99dc26436d73244ddba8162da470feb8fd4e8901?width=748",
        coverAlt: "Maestro",
        profileImage:
          "https://api.builder.io/api/v1/image/assets/TEMP/8c82ca4b3d3616469ab02084bfa2fd4e1e2c0980?width=64",
        name: "Zeenie Ejike",
        isOnline: true,
        isVerified: true,
      },
    ],
  ];

  return (
    <div className="w-full max-w-[1216px] mx-auto px-4 py-8 md:py-11">
      <div className="flex flex-col gap-8 md:gap-11">
        {/* Featured Filter */}
        <div className="flex justify-start">
          <button className="flex items-center gap-1 px-3 py-3 rounded-3xl border border-gray-300 bg-gray-200">
            <span className="text-black text-center font-geist text-lg md:text-xl font-normal">
              Featured
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0609 16.0604C12.7796 16.3413 12.3984 16.4991 12.0009 16.4991C11.6034 16.4991 11.2221 16.3413 10.9409 16.0604L5.28288 10.4044C5.00161 10.123 4.84366 9.74138 4.84375 9.34352C4.84384 8.94567 5.00198 8.56414 5.28338 8.28288C5.56477 8.00162 5.94637 7.84366 6.34423 7.84375C6.74209 7.84384 7.12361 8.00198 7.40488 8.28338L12.0009 12.8794L16.5969 8.28338C16.8797 8.01 17.2585 7.85863 17.6518 7.86186C18.0451 7.86509 18.4214 8.02267 18.6996 8.30065C18.9779 8.57863 19.1358 8.95478 19.1394 9.34807C19.143 9.74137 18.992 10.1203 18.7189 10.4034L13.0619 16.0614L13.0609 16.0604Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {/* Talent Sections */}
        {talentSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-4 md:gap-6">
            {/* Section Header */}
            <div className="flex flex-col gap-2.5">
              <h2 className="text-gray-900 font-geist text-xl md:text-2xl font-medium">
                Outstanding Talents
              </h2>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <p className="text-gray-500 font-geist text-sm md:text-base font-normal">
                  Standout talents making waves around the web
                </p>
                <a
                  href="#"
                  className="text-gray-600 font-geist text-sm md:text-base font-medium underline hover:text-gray-800 transition-colors"
                >
                  View more
                </a>
              </div>
            </div>

            {/* Talent Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
              {section.map((talent, index) => (
                <TalentCard key={index} {...talent} />
              ))}
            </div>
          </div>
        ))}

        {/* Explore More Button */}
        <div className="flex justify-center pt-8">
          <button className="flex items-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 hover:bg-gray-50 transition-colors">
            <span className="text-black text-center font-inter text-xl font-medium">
              Explore more
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4993 2C9.14387 2.00012 7.80814 2.32436 6.60353 2.94569C5.39893 3.56702 4.36037 4.46742 3.57451 5.57175C2.78866 6.67609 2.27829 7.95235 2.08599 9.29404C1.89368 10.6357 2.02503 12.004 2.46906 13.2846C2.91308 14.5652 3.65692 15.7211 4.63851 16.6557C5.6201 17.5904 6.81098 18.2768 8.11179 18.6576C9.4126 19.0384 10.7856 19.1026 12.1163 18.8449C13.447 18.5872 14.6967 18.015 15.7613 17.176L19.4133 20.828C19.6019 21.0102 19.8545 21.111 20.1167 21.1087C20.3789 21.1064 20.6297 21.0012 20.8151 20.8158C21.0005 20.6304 21.1057 20.3796 21.108 20.1174C21.1102 19.8552 21.0094 19.6026 20.8273 19.414L17.1753 15.762C18.1633 14.5086 18.7784 13.0024 18.9504 11.4157C19.1223 9.82905 18.8441 8.22602 18.1475 6.79009C17.4509 5.35417 16.3642 4.14336 15.0116 3.29623C13.659 2.44911 12.0952 1.99989 10.4993 2ZM3.99928 10.5C3.99928 8.77609 4.6841 7.12279 5.90308 5.90381C7.12207 4.68482 8.77537 4 10.4993 4C12.2232 4 13.8765 4.68482 15.0955 5.90381C16.3145 7.12279 16.9993 8.77609 16.9993 10.5C16.9993 12.2239 16.3145 13.8772 15.0955 15.0962C13.8765 16.3152 12.2232 17 10.4993 17C8.77537 17 7.12207 16.3152 5.90308 15.0962C4.6841 13.8772 3.99928 12.2239 3.99928 10.5Z"
                fill="#09244B"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalentShowcase;
