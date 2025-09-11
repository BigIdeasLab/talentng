export function OutstandingMentors() {
  const mentors = [
    {
      id: 1,
      name: "Promise Olaifa",
      title: "Product Designer, ConnectNigeria",
      location: "Lagos,Nigeria 🇳🇬",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/62a092bd6bc517738cffbf8ef4fbcb6b9763da78?width=128",
      description: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      skills: ["Mentoring", "Giving resume feedback", "Participating in User Research", "+4"],
      isVerified: true,
    },
    {
      id: 2,
      name: "Desmond Awere",
      title: "Product Designer, ConnectNigeria",
      location: "Frankfurt,Germany 🇩🇪",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3fb16dd7cc66e6d606a217c67c37ff5bb910a530?width=128",
      description: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      skills: ["Mentoring", "Giving resume feedback", "Participating in User Research", "+4"],
      isVerified: true,
    },
    {
      id: 3,
      name: "Zeenie",
      title: "Product Designer, ConnectNigeria",
      location: "Texas,USA 🇺🇸",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/e6c405f1f8a640a9e5d63adf52ea7849f582c532?width=128",
      description: "Product Designer & Ux Consultant Product Designer Passionate about how people and technology can create a new and a better world",
      skills: ["Mentoring", "Giving resume feedback", "Participating in User Research", "+4"],
      isVerified: true,
    },
  ];

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2.5">
        <h2 className="text-2xl font-medium text-gray-800 font-geist">
          Outstanding Mentors
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-base text-gray-500 font-geist">
            Standout Mentors making waves around the web
          </p>
          <button className="text-base text-gray-600 underline font-geist hover:text-gray-800 transition-colors">
            View more
          </button>
        </div>
      </div>
      
      {/* Mentor Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white border border-gray-200 rounded-[2rem] p-4">
            <div className="space-y-4">
              {/* Profile Header */}
              <div className="space-y-4.5">
                <img 
                  src={mentor.avatar} 
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full"
                />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-black font-geist">
                        {mentor.name}
                      </h3>
                      {mentor.isVerified && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_117_3153)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.4291 0.760641C13.2504 0.475024 12.9871 0.252243 12.6758 0.12331C12.3645 -0.00562305 12.0208 -0.0342933 11.6924 0.0412909L9.36216 0.576591C9.12335 0.631484 8.87519 0.631484 8.63638 0.576591L6.3061 0.0412909C5.97776 -0.0342933 5.63403 -0.00562305 5.32276 0.12331C5.01148 0.252243 4.74814 0.475024 4.5694 0.760641L3.29928 2.78778C3.16967 2.99516 2.99471 3.17014 2.78734 3.30105L0.760332 4.57125C0.475225 4.74985 0.252786 5.01277 0.123889 5.32354C-0.00500796 5.63431 -0.0339682 5.97749 0.0410279 6.30547L0.576293 8.63849C0.630984 8.87691 0.630984 9.12461 0.576293 9.36303L0.0410279 11.6948C-0.0342597 12.0229 -0.00544518 12.3664 0.123466 12.6774C0.252376 12.9885 0.474979 13.2516 0.760332 13.4303L2.78734 14.7005C2.99471 14.8301 3.16967 15.0051 3.30057 15.2124L4.5707 17.2396C4.93618 17.8241 5.63345 18.1132 6.3061 17.9589L8.63638 17.4236C8.87519 17.3687 9.12335 17.3687 9.36216 17.4236L11.6937 17.9589C12.0219 18.0342 12.3653 18.0054 12.6763 17.8765C12.9874 17.7476 13.2505 17.525 13.4291 17.2396L14.6993 15.2124C14.8289 15.0051 15.0038 14.8301 15.2112 14.7005L17.2395 13.4303C17.5249 13.2513 17.7474 12.9879 17.8761 12.6766C18.0047 12.3653 18.0332 12.0217 17.9575 11.6935L17.4235 9.36303C17.3687 9.1242 17.3687 8.87603 17.4235 8.6372L17.9588 6.30547C18.0342 5.97744 18.0056 5.63406 17.8769 5.32305C17.7483 5.01203 17.5259 4.74881 17.2408 4.56995L15.2125 3.29975C15.0054 3.1699 14.8304 2.99487 14.7006 2.78778L13.4291 0.760641ZM12.7772 6.10975C12.8574 5.96234 12.8773 5.78958 12.8326 5.62782C12.788 5.46606 12.6824 5.32791 12.538 5.24244C12.3936 5.15697 12.2217 5.13085 12.0584 5.16957C11.8952 5.20828 11.7533 5.30882 11.6626 5.45002L8.27349 11.1867L6.22704 9.22693C6.16633 9.16459 6.09368 9.11512 6.01344 9.08146C5.93319 9.0478 5.84699 9.03065 5.75998 9.03103C5.67296 9.03141 5.58691 9.04931 5.50696 9.08367C5.42702 9.11802 5.35481 9.16813 5.29464 9.231C5.23448 9.29387 5.18759 9.36821 5.15677 9.44959C5.12596 9.53098 5.11185 9.61773 5.11529 9.70469C5.11872 9.79164 5.13964 9.87701 5.17678 9.95571C5.21392 10.0344 5.26653 10.1048 5.33147 10.1627L7.96762 12.6889C8.03818 12.7564 8.12306 12.807 8.21594 12.8371C8.30881 12.8671 8.40728 12.8758 8.50398 12.8625C8.60068 12.8491 8.69312 12.8141 8.7744 12.7601C8.85568 12.706 8.92369 12.6342 8.97335 12.5502L12.7772 6.10975Z" fill="#0095EC"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_117_3153">
                              <rect width="18" height="18" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <p className="text-base text-black text-center font-geist">
                      {mentor.title}
                    </p>
                    <p className="text-base text-black text-center font-geist">
                      {mentor.location}
                    </p>
                  </div>
                  
                  <p className="text-base text-gray-500 font-geist">
                    {mentor.description}
                  </p>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-gray-900 font-geist">
                  Available for
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 flex-wrap">
                    {mentor.skills.slice(0, 2).map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-2.5 border border-gray-200 rounded-3xl text-sm text-gray-900 font-geist"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {mentor.skills.slice(2).map((skill, index) => (
                      <span 
                        key={index}
                        className={`px-2.5 py-2.5 border border-gray-200 rounded-3xl text-sm text-gray-900 font-geist ${
                          skill.startsWith('+') ? 'bg-gray-50' : ''
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full bg-black text-white py-2.5 px-4 rounded-3xl text-sm font-medium font-geist hover:bg-gray-900 transition-colors">
                Book a session
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
