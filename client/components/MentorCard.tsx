import React from "react";
import { useNavigate } from "react-router-dom";

interface MentorCardProps {
  id: number;
  name: string;
  avatar: string;
  title: string;
  company: string;
  location: string;
  description: string;
  availableFor: string[];
  verified: boolean;
  onBookSession: (id: number) => void;
}

export function MentorCard({
  id,
  name,
  avatar,
  title,
  company,
  location,
  description,
  availableFor,
  verified,
  onBookSession,
}: MentorCardProps) {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      onClick={() => navigate(`/mentorship/${id}`)}
      className="flex w-full max-w-[374px] p-4 flex-col items-start gap-4 border border-gray-200 rounded-[32px] bg-white cursor-pointer"
    >
      <div className="flex flex-col items-start gap-5 self-stretch">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-black font-geist">
                {name}
              </h3>
              {verified && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_verification)">
                    <path
                      d="M13.4291 0.760641C13.2504 0.475024 12.9871 0.252243 12.6758 0.12331C12.3645 -0.00562305 12.0208 -0.0342933 11.6924 0.0412909L9.36216 0.576591C9.12335 0.631484 8.87519 0.631484 8.63638 0.576591L6.3061 0.0412909C5.97776 -0.0342933 5.63403 -0.00562305 5.32276 0.12331C5.01148 0.252243 4.74814 0.475024 4.5694 0.760641L3.29928 2.78778C3.16967 2.99516 2.99471 3.17014 2.78734 3.30105L0.760332 4.57125C0.475225 4.74985 0.252786 5.01277 0.123889 5.32354C-0.00500796 5.63431 -0.0339682 5.97749 0.0410279 6.30547L0.576293 8.63849C0.630984 8.87691 0.630984 9.12461 0.576293 9.36303L0.0410279 11.6948C-0.0342597 12.0229 -0.00544518 12.3664 0.123466 12.6774C0.252376 12.9885 0.474979 13.2516 0.760332 13.4303L2.78734 14.7005C2.99471 14.8301 3.16967 15.0051 3.30057 15.2124L4.5707 17.2396C4.93618 17.8241 5.63345 18.1132 6.3061 17.9589L8.63638 17.4236C8.87519 17.3687 9.12335 17.3687 9.36216 17.4236L11.6937 17.9589C12.0219 18.0342 12.3653 18.0054 12.6763 17.8765C12.9874 17.7476 13.2505 17.525 13.4291 17.2396L14.6993 15.2124C14.8289 15.0051 15.0038 14.8301 15.2112 14.7005L17.2395 13.4303C17.5249 13.2513 17.7474 12.9879 17.8761 12.6766C18.0047 12.3653 18.0332 12.0217 17.9575 11.6935L17.4235 9.36303C17.3687 9.1242 17.3687 8.87603 17.4235 8.6372L17.9588 6.30547C18.0342 5.97744 18.0056 5.63406 17.8769 5.32305C17.7483 5.01203 17.5259 4.74881 17.2408 4.56995L15.2125 3.29975C15.0054 3.1699 14.8304 2.99487 14.7006 2.78778L13.4291 0.760641ZM12.7772 6.10975C12.8574 5.96234 12.8773 5.7895 12.8122 5.64209C12.7472 5.49468 12.6053 5.3791 12.442 5.32149C12.2787 5.26388 12.0992 5.26838 11.9398 5.33352C11.7804 5.39866 11.6526 5.52014 11.5785 5.67542L8.936 10.0369L7.13502 8.2345C7.04141 8.14071 6.92381 8.07784 6.7986 8.05513C6.67339 8.03241 6.54742 8.05114 6.43374 8.1082C6.32007 8.16526 6.22411 8.25842 6.15303 8.37404C6.08195 8.48966 6.03849 8.62337 6.02782 8.76051C6.01716 8.89764 6.03945 9.03497 6.09217 9.16246C6.14488 9.28995 6.22645 9.40336 6.33148 9.49378L9.04169 12.8007C9.14856 12.9018 9.27917 12.973 9.42201 13.0067C9.56485 13.0404 9.71324 13.0359 9.85061 12.9932C9.98798 12.9505 10.1082 12.8717 10.2002 12.7651C10.2922 12.6585 10.3528 12.5285 10.3778 12.3909L12.7772 6.10975Z"
                      fill="#0095EC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_verification">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
            <div className="text-base font-normal text-black font-geist self-stretch">
              {title}, {company}
            </div>
            <div className="text-base font-normal text-black font-geist">
              {location}
            </div>
          </div>

          <div className="text-base font-normal text-gray-500 font-geist self-stretch">
            {description}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="text-base font-semibold text-[#0C111D] font-geist self-stretch">
            Available for
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch">
            <div className="flex items-center gap-3 self-stretch flex-wrap">
              {availableFor.slice(0, 2).map((service, index) => (
                <div
                  key={index}
                  className="flex px-2.5 py-2.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-200"
                >
                  <div className="text-[13px] font-normal text-[#0C111D] font-geist">
                    {service}
                  </div>
                </div>
              ))}
            </div>
            {availableFor.length > 2 && (
              <div className="flex items-center gap-3">
                {availableFor.slice(2, 3).map((service, index) => (
                  <div
                    key={index}
                    className="flex px-2.5 py-2.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-200"
                  >
                    <div className="text-[13px] font-normal text-[#0C111D] font-geist">
                      {service}
                    </div>
                  </div>
                ))}
                {availableFor.length > 3 && (
                  <div className="flex px-2.5 py-2.5 justify-center items-center gap-2.5 rounded-3xl border border-gray-200 bg-gray-50">
                    <div className="text-[13px] font-normal text-[#0C111D] font-geist">
                      +{availableFor.length - 3}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onBookSession(id);
          }}
          className="flex px-2.5 py-2.5 justify-center items-center gap-2.5 self-stretch rounded-3xl bg-black"
        >
          <span className="text-[13px] font-medium text-white font-geist">Book a session</span>
        </button>
      </div>
  );
}