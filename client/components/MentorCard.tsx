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
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 text-xs">
                  ✓
                </span>
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
        <span className="text-[13px] font-medium text-white font-geist">
          Book a session
        </span>
      </button>
    </div>
  );
}
