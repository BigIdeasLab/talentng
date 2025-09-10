import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import BookingModal from "@/components/BookingModal";

type Mentor = {
  id: number;
  name: string;
  avatar: string;
  title: string;
  company: string;
  location: string;
  description: string;
  availableFor: string[];
  verified: boolean;
};

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Promise Olaifa",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/52c24c20593f581ab8cf4ece4cf50020375bc67c?width=256",
    title: "Product Designer",
    company: "ConnectNigeria",
    location: "Lagos, Nigeria 🇳🇬",
    description:
      "As a dedicated Product Designer and UX Consultant, I am deeply passionate about the intersection of human experience and technology. I believe that through innovative design and thoughtful user experiences, we can forge a new path toward a better world. My journey in this field has been driven by a desire to understand how people interact with technology, and how we can leverage that understanding to create products that not only meet user needs but also inspire and uplift. I envision a future where technology seamlessly integrates into our lives, enhancing our daily experiences and fostering connections among individuals and communities. By focusing on empathy and user-centered design principles, I strive to contribute to a landscape where technology serves as a catalyst for positive change, ultimately leading to a more inclusive and sustainable world.",
    availableFor: [
      "Mentoring",
      "Giving resume feedback",
      "Participating in User Research",
      "Career guidance",
      "Mock interviews",
      "Portfolio review",
      "Product critique",
      "Design systems",
    ],
    verified: true,
  },
  {
    id: 2,
    name: "Desmond Awere",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/3fb16dd7cc66e6d606a217c67c37ff5bb910a530?width=256",
    title: "Product Designer",
    company: "ConnectNigeria",
    location: "Frankfurt, Germany 🇩🇪",
    description: "Product Designer & UX",
    availableFor: ["Mentoring", "Portfolio review"],
    verified: true,
  },
];

export default function MentorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mentorId = Number(id || 0);
  const mentor = mentors.find((m) => m.id === mentorId) || mentors[0];

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="max-w-[1118px] mx-auto space-y-6">
            {/* Top bar with back and CTA */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold font-geist">Mentorship</h1>
                <div className="text-sm text-gray-500 mt-1">
                  <button
                    onClick={() => navigate(-1)}
                    className="text-sm text-gray-600 underline"
                  >
                    Back
                  </button>
                </div>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center rounded-3xl bg-black text-white h-11 px-4 text-sm font-medium"
              >
                Book a session
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-32 h-32 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-semibold font-geist text-black">
                      {mentor.name}
                    </h2>
                    {mentor.verified && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_verify)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.9055 1.01419C17.6672 0.633365 17.3161 0.336324 16.901 0.164413C16.486 -0.0074974 16.0277 -0.0457244 15.5899 0.0550546L12.4829 0.768788C12.1645 0.841978 11.8336 0.841978 11.5152 0.768788L8.40813 0.0550546C7.97035 -0.0457244 7.51204 -0.0074974 7.09701 0.164413C6.68197 0.336324 6.33085 0.633365 6.09253 1.01419L4.39904 3.71704C4.22623 3.99355 3.99294 4.22685 3.71645 4.4014L1.01378 6.095C0.633634 6.33313 0.337048 6.6837 0.165185 7.09805C-0.00667728 7.51241 -0.045291 7.96999 0.0547039 8.40729L0.768391 11.518C0.841312 11.8359 0.841312 12.1662 0.768391 12.484L0.0547039 15.593C-0.0456796 16.0306 -0.00726024 16.4885 0.164621 16.9032C0.336502 17.3179 0.633305 17.6688 1.01378 17.907L3.71645 19.6006C3.99294 19.7735 4.22623 20.0068 4.40077 20.2833L6.09426 22.9861C6.58157 23.7655 7.51127 24.1509 8.40813 23.9452L11.5152 23.2315C11.8336 23.1583 12.1645 23.1583 12.4829 23.2315L15.5917 23.9452C16.0292 24.0456 16.4871 24.0072 16.9018 23.8353C17.3165 23.6634 17.6673 23.3666 17.9055 22.9861L19.599 20.2833C19.7718 20.0068 20.0051 19.7735 20.2816 19.6006L22.986 17.907C23.3665 17.6685 23.6632 17.3172 23.8347 16.9022C24.0063 16.4871 24.0443 16.0289 23.9434 15.5913L23.2314 12.484C23.1582 12.1656 23.1582 11.8347 23.2314 11.5163L23.9451 8.40729C24.0456 7.96992 24.0075 7.51209 23.8359 7.09739C23.6643 6.6827 23.3679 6.33174 22.9877 6.09327L20.2833 4.39967C20.0072 4.22653 19.7739 3.99317 19.6007 3.71704L17.9055 1.01419ZM17.0363 8.14634C17.1432 7.94979 17.1697 7.71944 17.1102 7.50376C17.0507 7.28807 16.9099 7.10388 16.7173 6.98992C16.5248 6.87596 16.2956 6.84113 16.0779 6.89275C15.8602 6.94438 15.6711 7.07842 15.5502 7.2667L11.0313 14.9156L8.30272 12.3026C8.22177 12.2195 8.12491 12.1535 8.01792 12.1086C7.91092 12.0637 7.79599 12.0409 7.67997 12.0414C7.56395 12.0419 7.44922 12.0658 7.34262 12.1116C7.23602 12.1574 7.13974 12.2242 7.05952 12.308C6.9793 12.3918 6.91678 12.4909 6.8757 12.5995C6.83461 12.708 6.8158 12.8236 6.82038 12.9396C6.82496 13.0555 6.85285 13.1694 6.90237 13.2743C6.95189 13.3792 7.02204 13.4731 7.10863 13.5503L10.6235 16.9185C10.7176 17.0085 10.8307 17.076 10.9546 17.1161C11.0784 17.1562 11.2097 17.1678 11.3386 17.15C11.4676 17.1322 11.5908 17.0855 11.6992 17.0134C11.8076 16.9413 11.8982 16.8457 11.9645 16.7336L17.0363 8.14634Z"
                            fill="#0095EC"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_verify">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div>

                  <div className="text-base text-black mt-1">
                    {mentor.title}, {mentor.company}
                  </div>
                  <div className="text-base text-black mt-1">{mentor.location}</div>

                  <p className="text-base text-gray-500 mt-4 leading-7">
                    {mentor.description}
                  </p>

                  <div className="mt-6 max-w-xl">
                    <div className="text-base font-semibold text-[#0C111D]">
                      Available for
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {mentor.availableFor.slice(0, 3).map((a) => (
                        <div
                          key={a}
                          className="px-3 py-2 border border-gray-200 rounded-full text-[13px] text-[#0C111D] bg-white"
                        >
                          {a}
                        </div>
                      ))}
                      {mentor.availableFor.length > 3 && (
                        <div className="px-3 py-2 border border-gray-200 rounded-full text-[13px] text-[#0C111D] bg-gray-50">
                          +{mentor.availableFor.length - 3}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="mt-6 flex items-center gap-8 text-gray-500">
                    {/* Twitter */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_tw)">
                        <path d="M4.59404 4.98439C4.7751 4.96335 4.95846 4.99219 5.12431 5.0678C5.29016 5.14342 5.43219 5.26292 5.53504 5.41339C7.01104 7.57239 8.78304 8.47039 10.75 8.67439C10.846 7.83339 11.073 7.00239 11.5 6.27039C12.126 5.19639 13.144 4.40639 14.598 4.11439C16.608 3.71039 18.138 4.43839 19.025 5.32939L20.817 4.99439C21.0046 4.95926 21.1982 4.9785 21.3752 5.04984C21.5521 5.12119 21.7049 5.24166 21.8157 5.39704C21.9264 5.55242 21.9903 5.73623 21.9999 5.92677C22.0096 6.11731 21.9645 6.30663 21.87 6.47239L20.15 9.49439C20.307 13.8554 19.095 16.8994 16.511 18.9964C15.141 20.1084 13.179 20.7394 11.026 20.9344C8.85604 21.1304 6.40304 20.8934 3.96504 20.1814C3.75674 20.1206 3.57384 19.9938 3.44397 19.8199C3.31409 19.6461 3.24428 19.4347 3.24507 19.2178C3.24587 19.0008 3.31721 18.7899 3.44835 18.617C3.57949 18.4442 3.7633 18.3186 3.97204 18.2594C5.19804 17.9104 6.13204 17.6094 6.97504 17.0824C5.77604 16.4464 4.89304 15.6144 4.26804 14.6664C3.40004 13.3484 3.07804 11.8784 3.01404 10.5534C2.95004 9.22839 3.14104 8.00039 3.34304 7.11539C3.45804 6.61039 3.59204 6.10439 3.77704 5.62039C3.8423 5.44978 3.95304 5.3003 4.09725 5.18818C4.24145 5.07606 4.41261 5.00558 4.59404 4.98439Z" fill="#475467"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_tw"><rect width="24" height="24" fill="white"/></clipPath>
                      </defs>
                    </svg>

                    {/* Instagram */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_ig)">
                        <path d="M16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM16.5 6.5C16.2348 6.5 15.9804 6.60536 15.7929 6.79289C15.6054 6.98043 15.5 7.23478 15.5 7.5C15.5 7.76522 15.6054 8.01957 15.7929 8.20711C15.9804 8.39464 16.2348 8.5 16.5 8.5C16.7652 8.5 17.0196 8.39464 17.2071 8.20711C17.3946 8.01957 17.5 7.76522 17.5 7.5C17.5 7.23478 17.3946 6.98043 17.2071 6.79289C17.0196 6.60536 16.7652 6.5 16.5 6.5Z" fill="#475467"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_ig"><rect width="24" height="24" fill="white"/></clipPath>
                      </defs>
                    </svg>

                    {/* LinkedIn */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_in)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18ZM8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17C8.26522 17 8.51957 16.8946 8.70711 16.7071C8.89464 16.5196 9 16.2652 9 16V11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10ZM11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17C11.2652 17 11.5196 16.8946 11.7071 16.7071C11.8946 16.5196 12 16.2652 12 16V12.34C12.305 11.996 12.82 11.592 13.393 11.347C13.726 11.205 14.227 11.147 14.575 11.257C14.6904 11.2863 14.7933 11.3523 14.868 11.445C14.92 11.515 15 11.671 15 12V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V12C17 11.33 16.83 10.734 16.476 10.256C16.1503 9.82256 15.6944 9.50472 15.175 9.349C14.273 9.066 13.274 9.223 12.607 9.509C12.3933 9.60046 12.1852 9.70465 11.984 9.821C11.9421 9.59059 11.8206 9.3822 11.6408 9.23216C11.461 9.08213 11.2342 8.99996 11 9ZM8 7C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7Z" fill="#475467"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_in"><rect width="24" height="24" fill="white"/></clipPath>
                      </defs>
                    </svg>

                    {/* Dribbble */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_db)">
                        <path d="M13.7742 14.439C14.5402 16.7093 15.0552 19.0566 15.3102 21.439C14.2464 21.8114 13.1272 22.0011 12.0002 22C10.0174 22.003 8.07888 21.4139 6.43315 20.308C7.2 18.887 8.2451 17.635 9.50613 16.6265C10.7672 15.618 12.2183 14.8737 13.7732 14.438L13.7742 14.439ZM21.5732 14.902C20.8591 17.2482 19.3097 19.2513 17.2182 20.532C16.9385 18.3344 16.4496 16.1686 15.7582 14.064C17.7359 13.8596 19.7336 14.1475 21.5732 14.902ZM12.1452 10.485C12.4772 11.163 12.7882 11.855 13.0752 12.558C9.61176 13.5731 6.67256 15.8834 4.86815 19.009C3.85421 17.97 3.07668 16.7243 2.58876 15.357C2.10084 13.9897 1.91404 12.5332 2.04115 11.087C5.38415 11.795 8.91115 11.589 12.1452 10.485ZM19.7201 5.644C21.3862 7.67864 22.1902 10.2843 21.9601 12.904C19.7603 12.076 17.3884 11.8113 15.0602 12.134C14.7387 11.3217 14.3868 10.5218 14.0052 9.736C16.1475 8.7383 18.0855 7.35068 19.7201 5.644ZM7.26615 3.19C8.76054 4.88504 10.0774 6.72865 11.1962 8.692C8.35797 9.59595 5.33311 9.74416 2.42015 9.122C3.18682 6.58128 4.92945 4.44812 7.26615 3.19ZM12.0002 2C14.3882 2 16.5811 2.837 18.3001 4.234C16.8116 5.79515 15.0403 7.05953 13.0802 7.96C11.9762 5.9838 10.6835 4.1191 9.22015 2.392C10.1238 2.13132 11.0597 1.99936 12.0002 2Z" fill="#475467"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_db"><rect width="24" height="24" fill="white"/></clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Resume */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-black font-geist">Resume</h3>
                <div className="mt-6 space-y-6">
                  <div className="pb-4 border-b border-gray-200">
                    <div className="text-[13px] text-black">Aug 2022 - Present</div>
                    <div className="text-base font-semibold text-black">Product Designer, ConnectNigeria</div>
                  </div>
                  <div className="pb-4">
                    <div className="text-[13px] text-black">Aug 2021 - Sept 2021</div>
                    <div className="text-base font-semibold text-black">Product Designer, Eonsfleet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <BookingModal
        open={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        mentor={mentor}
      />
    </div>
  );
}
