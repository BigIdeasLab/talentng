import React from "react";
import { ChevronDown, Share2, Briefcase, Building, Search } from "lucide-react";

const VerificationBadge = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4291 0.760641C13.2504 0.475024 12.9871 0.252243 12.6758 0.12331C12.3645 -0.00562305 12.0208 -0.0342933 11.6924 0.0412909L9.36216 0.576591C9.12335 0.631484 8.87519 0.631484 8.63638 0.576591L6.3061 0.0412909C5.97776 -0.0342933 5.63403 -0.00562305 5.32276 0.12331C5.01148 0.252243 4.74814 0.475024 4.5694 0.760641L3.29928 2.78778C3.16967 2.99516 2.99471 3.17014 2.78734 3.30105L0.760332 4.57125C0.475225 4.74985 0.252786 5.01277 0.123889 5.32354C-0.00500796 5.63431 -0.0339682 5.97749 0.0410279 6.30547L0.576293 8.63849C0.630984 8.87691 0.630984 9.12461 0.576293 9.36303L0.0410279 11.6948C-0.0342597 12.0229 -0.00544518 12.3664 0.123466 12.6774C0.252376 12.9885 0.474979 13.2516 0.760332 13.4303L2.78734 14.7005C2.99471 14.8301 3.16967 15.0051 3.30057 15.2124L4.5707 17.2396C4.93618 17.8241 5.63345 18.1132 6.3061 17.9589L8.63638 17.4236C8.87519 17.3687 9.12335 17.3687 9.36216 17.4236L11.6937 17.9589C12.0219 18.0342 12.3653 18.0054 12.6763 17.8765C12.9874 17.7476 13.2505 17.525 13.4291 17.2396L14.6993 15.2124C14.8289 15.0051 15.0038 14.8301 15.2112 14.7005L17.2395 13.4303C17.5249 13.2513 17.7474 12.9879 17.8761 12.6766C18.0047 12.3653 18.0332 12.0217 17.9575 11.6935L17.4235 9.36303C17.3687 9.1242 17.3687 8.87603 17.4235 8.6372L17.9588 6.30547C18.0342 5.97744 18.0056 5.63406 17.8769 5.32305C17.7483 5.01203 17.5259 4.74881 17.2408 4.56995L15.2125 3.29975C15.0054 3.1699 14.8304 2.99487 14.7006 2.78778L13.4291 0.760641ZM12.7772 6.10975C12.8574 5.96234 12.8773 5.78958 12.8326 5.62782C12.788 5.46606 12.6824 5.32791 12.538 5.24244C12.3936 5.15697 12.2217 5.13085 12.0584 5.16957C11.8952 5.20828 11.7533 5.30882 11.6626 5.45002L8.27349 11.1867L6.22704 9.22693C6.16633 9.16459 6.09368 9.11512 6.01344 9.08146C5.93319 9.0478 5.84699 9.03065 5.75998 9.03103C5.67296 9.03141 5.58691 9.04931 5.50696 9.08367C5.42702 9.11802 5.35481 9.16813 5.29464 9.231C5.23448 9.29387 5.18759 9.36821 5.15677 9.44959C5.12596 9.53098 5.11185 9.61773 5.11529 9.70469C5.11872 9.79164 5.13964 9.87701 5.17678 9.95571C5.21392 10.0344 5.26653 10.1048 5.33147 10.1627L7.96762 12.6889C8.03818 12.7564 8.12306 12.807 8.21594 12.8371C8.30881 12.8671 8.40728 12.8758 8.50398 12.8625C8.60068 12.8491 8.69312 12.8141 8.7744 12.7601C8.85568 12.706 8.92369 12.6342 8.97335 12.5502L12.7772 6.10975Z"
      fill="#0095EC"
    />
  </svg>
);

const TalentShowcase = () => {
  const outstandingTalents = [
    {
      company: "ConnectNigeria",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/3acc0fa377039f5a419a459da563621ed9ec35b1?width=64",
      title: "Senior- Staff Product Engineer",
      location: "Full-time, Lagos, Nigeria 🇳🇬",
      profile: {
        name: "Promise Olaifa",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/b7a14a0aa489cb96b364bfa56de3bb04acfc0e08?width=64",
        isOnline: true,
        isVerified: true,
      },
    },
    {
      company: "Dano Milk",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/b77895e271e6e3c18732c723ced620aefd9347f5?width=64",
      title: "Senior- Staff Product Engineer",
      location: "Full-time, Lagos, Nigeria 🇳🇬",
      profile: {
        name: "Desmond Awere",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/0764040b7d3fa40fc56c1df4358f3de87596efe6?width=64",
        isOnline: true,
        isVerified: true,
      },
    },
    {
      company: "Lush Hair",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/2b5a993e6b90f30bb7b3eda09a7ef3daa36d1d08?width=64",
      title: "Senior- Staff Product Engineer",
      location: "Full-time, Lagos, Nigeria 🇳🇬",
      profile: {
        name: "Zeenie Ejike",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/8c82ca4b3d3616469ab02084bfa2fd4e1e2c0980?width=64",
        isOnline: true,
        isVerified: true,
      },
    },
  ];

  const outstandingMentors = [
    {
      name: "Promise Olaifa",
      title: "Product Designer, ConnectNigeria",
      location: "Lagos,Nigeria 🇳🇬",
      bio: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/62a092bd6bc517738cffbf8ef4fbcb6b9763da78?width=128",
      isVerified: true,
      services: [
        "Mentoring",
        "Giving resume feedback",
        "Participating in User Research",
        "+4",
      ],
    },
    {
      name: "Desmond Awere",
      title: "Product Designer, ConnectNigeria",
      location: "Frankfurt,Germany 🇩🇪",
      bio: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3fb16dd7cc66e6d606a217c67c37ff5bb910a530?width=128",
      isVerified: true,
      services: [
        "Mentoring",
        "Giving resume feedback",
        "Participating in User Research",
        "+4",
      ],
    },
    {
      name: "Zeenie",
      title: "Product Designer, ConnectNigeria",
      location: "Texas,USA 🇺🇸",
      bio: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e6c405f1f8a640a9e5d63adf52ea7849f582c532?width=128",
      isVerified: true,
      services: [
        "Mentoring",
        "Giving resume feedback",
        "Participating in User Research",
        "+4",
      ],
    },
  ];

  const learningPaths = [
    {
      title: "Whatever the Title",
      classes: "5 classes (4h 56m)",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4bf01fda474c8d498e63c2e0cb4bc008dca99e0a?width=748",
    },
    {
      title: "Whatever the Title",
      classes: "5 classes (4h 56m)",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d380f60a4797c398d705e893eacfb868043112f3?width=748",
    },
    {
      title: "Whatever the Title",
      classes: "5 classes (4h 56m)",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/96ff905aeec3c249a3dc7d41243aadaabdf0a0aa?width=748",
    },
  ];

  const findTalents = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7a7d06d2171bb91f364bf0e0d5ec52c05746b91c?width=748",
      profile: {
        name: "Promise Olaifa",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/b7a14a0aa489cb96b364bfa56de3bb04acfc0e08?width=64",
        isOnline: true,
        isVerified: true,
      },
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/81a84f91e96e10ab18642d5f40839a2152540580?width=748",
      profile: {
        name: "Ebele Okafor",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/187de602f27fe4361036da4edd6ff448b436f4d5?width=64",
        isOnline: false,
        isVerified: true,
      },
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2a3607311420aa86f0588b26f12fdbe95fc1a23c?width=748",
      profile: {
        name: "Zeenie Ejike",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/8c82ca4b3d3616469ab02084bfa2fd4e1e2c0980?width=64",
        isOnline: true,
        isVerified: true,
      },
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-11 py-8 md:py-12 px-4">
      <div className="w-full max-w-[1216px] flex flex-col items-start gap-8">
        <button className="flex px-3 py-3 justify-center items-center gap-1 rounded-3xl border border-gray-300 bg-black hover:bg-gray-900 transition-colors">
          <span className="text-white text-center font-geist text-xl leading-[120%]">
            Featured
          </span>
          <ChevronDown className="w-6 h-6 text-white" />
        </button>

        <div className="w-full flex flex-col items-start gap-8 md:gap-11">
          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full flex flex-col items-start gap-2.5">
              <h2 className="text-gray-900 font-geist text-2xl font-medium leading-[120%]">
                Outstanding Talents
              </h2>
              <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <p className="text-gray-500 font-geist text-base leading-[120%]">
                  Standout talents making waves around the web
                </p>
                <a
                  href="#"
                  className="text-gray-600 font-geist text-base font-medium leading-[120%] underline hover:text-gray-800"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {outstandingTalents.map((talent, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 w-full max-w-[374px]"
                >
                  <div className="flex p-6 items-start gap-4 self-stretch rounded-[32px] border border-gray-200 bg-white">
                    <img
                      src={talent.logo}
                      alt={talent.company}
                      className="w-8 h-8 rounded-3xl flex-shrink-0"
                    />
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <div className="flex flex-col items-start gap-2 self-stretch">
                        <div className="flex flex-col items-start gap-2">
                          <div className="text-black font-geist text-base leading-[120%]">
                            {talent.company}
                          </div>
                          <div className="text-black font-geist text-lg font-semibold leading-[120%]">
                            {talent.title}
                          </div>
                        </div>
                        <div className="text-black font-geist text-base leading-[120%]">
                          {talent.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="flex py-3.5 px-3.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                          <span className="text-black font-geist text-base font-medium leading-[120%]">
                            Share{" "}
                          </span>
                          <Share2 className="w-4 h-4 text-[#09244B]" />
                        </button>
                        <button className="flex py-3.5 px-3.5 justify-center items-center gap-2.5 rounded-3xl bg-black hover:bg-gray-900 transition-colors">
                          <span className="text-white font-geist text-base font-medium leading-[120%]">
                            Apply
                          </span>
                          <Briefcase className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img
                        src={talent.profile.image}
                        alt={talent.profile.name}
                        className="w-8 h-8 rounded-2xl"
                      />
                      <div
                        className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-lg border-[2.682px] border-white ${talent.profile.isOnline ? "bg-[#3AB266]" : "bg-[#B1B1B1]"}`}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#677084] text-center font-geist text-xl font-medium leading-[120%]">
                        {talent.profile.name}
                      </span>
                      {talent.profile.isVerified && <VerificationBadge />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full flex flex-col items-start gap-2.5">
              <h2 className="text-gray-900 font-geist text-2xl font-medium leading-[120%]">
                Outstanding Mentors
              </h2>
              <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <p className="text-gray-500 font-geist text-base leading-[120%]">
                  Standout Mentors making waves around the web
                </p>
                <a
                  href="#"
                  className="text-gray-600 font-geist text-base font-medium leading-[120%] underline hover:text-gray-800"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {outstandingMentors.map((mentor, index) => (
                <div
                  key={index}
                  className="flex w-full max-w-[374px] p-4 flex-col items-start gap-4 rounded-[32px] border border-gray-200 bg-white"
                >
                  <div className="flex flex-col items-start gap-5 self-stretch">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col items-start gap-4 self-stretch">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                          <div className="text-black text-center font-geist text-xl font-semibold leading-[120%]">
                            {mentor.name}
                          </div>
                          {mentor.isVerified && <VerificationBadge />}
                        </div>
                        <div className="self-stretch text-black text-center font-geist text-base leading-[120%]">
                          {mentor.title}
                        </div>
                        <div className="text-black text-center font-geist text-base leading-[120%]">
                          {mentor.location}
                        </div>
                      </div>
                      <div className="self-stretch text-gray-500 font-geist text-base leading-[120%]">
                        {mentor.bio}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="self-stretch text-gray-950 font-geist text-base font-semibold leading-[120%]">
                      Available for
                    </div>
                    <div className="flex flex-col items-start gap-3 self-stretch">
                      <div className="flex items-center gap-3 self-stretch flex-wrap">
                        {mentor.services.slice(0, 2).map((service, idx) => (
                          <div
                            key={idx}
                            className="flex py-2.5 px-2.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-200"
                          >
                            <span className="text-gray-950 font-geist text-[13px] leading-[120%]">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        {mentor.services.slice(2).map((service, idx) => (
                          <div
                            key={idx}
                            className={`flex py-2.5 px-2.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-200 ${service === "+4" ? "bg-gray-50" : ""}`}
                          >
                            <span className="text-gray-950 font-geist text-[13px] leading-[120%]">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="flex py-2.5 px-2.5 justify-center items-center gap-2.5 self-stretch rounded-3xl bg-black hover:bg-gray-900 transition-colors">
                    <span className="text-white font-geist text-[13px] font-medium leading-[120%]">
                      Book a session
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full flex flex-col items-start gap-2.5">
              <h2 className="text-gray-900 font-geist text-2xl font-medium leading-[120%]">
                Recommended Learning Paths
              </h2>
              <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <p className="text-gray-500 font-geist text-base leading-[120%]">
                  Reach your learning goals with hand picked sequesntial classes
                </p>
                <a
                  href="#"
                  className="text-gray-600 font-geist text-base font-medium leading-[120%] underline hover:text-gray-800"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-[374px] h-[300px] rounded-[32px] overflow-hidden"
                >
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[114px] flex items-center rounded-b-[32px] bg-black px-4 py-[18px]">
                    <div className="flex flex-col items-start gap-11">
                      <div className="text-white font-geist text-base font-semibold leading-[120%]">
                        {path.title}
                      </div>
                      <div className="text-white font-geist text-[13px] leading-[120%]">
                        <span className="font-bold">
                          {path.classes.split(" ")[0]}{" "}
                          {path.classes.split(" ")[1]}{" "}
                        </span>
                        <span>
                          {path.classes.split(" ").slice(2).join(" ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full flex flex-col items-start gap-2.5">
              <h2 className="text-gray-900 font-geist text-2xl font-medium leading-[120%]">
                Find Talents
              </h2>
              <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <p className="text-gray-500 font-geist text-base leading-[120%]">
                  Standout talents making waves around the web
                </p>
                <a
                  href="#"
                  className="text-gray-600 font-geist text-base font-medium leading-[120%] underline hover:text-gray-800"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {findTalents.map((talent, index) => (
                <div key={index} className="flex flex-col items-start gap-4">
                  <img
                    src={talent.image}
                    alt="Talent work"
                    className="w-full max-w-[374px] h-[280px] rounded-[32px] object-cover"
                  />
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img
                        src={talent.profile.image}
                        alt={talent.profile.name}
                        className="w-8 h-8 rounded-2xl"
                      />
                      <div
                        className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-lg border-[2.682px] border-white ${talent.profile.isOnline ? "bg-[#3AB266]" : "bg-[#B1B1B1]"}`}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#677084] text-center font-geist text-xl font-medium leading-[120%]">
                        {talent.profile.name}
                      </span>
                      {talent.profile.isVerified && <VerificationBadge />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="flex py-3.5 px-3.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-300 hover:bg-gray-50 transition-colors">
          <span className="text-black text-center font-inter text-xl font-medium leading-[120%]">
            Explore more
          </span>
          <Search className="w-6 h-6 text-[#09244B]" />
        </button>
      </div>
    </div>
  );
};

export default TalentShowcase;
