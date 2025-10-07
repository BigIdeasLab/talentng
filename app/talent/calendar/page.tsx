"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function CalendarPage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-5 mb-6">
        {/* Visibility Toggle */}
        <div className="flex items-center gap-2 px-3 py-3 bg-gray-100 rounded-3xl border border-gray-50 w-fit">
          <span className="text-base font-medium text-black font-geist">
            Visibility
          </span>
          <Switch
            checked={isVisible}
            onCheckedChange={setIsVisible}
            className="data-[state=checked]:bg-[#00DE51]"
          />
        </div>

        {/* Title Row */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium text-black font-geist">
            Calendar
          </h1>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-100"></div>
      </div>

      {/* My Schedule Section */}
      <h2 className="text-xl font-bold text-black font-geist mb-8">
        My Schedule
      </h2>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-8 max-w-lg w-full px-4">
          {/* Calendar Icon */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
          >
            <g clipPath="url(#clip0_calendar)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.6667 8C43.3739 8 44.0522 8.28095 44.5523 8.78105C45.0524 9.28115 45.3333 9.95942 45.3333 10.6667V13.3333H50.6667C52.0812 13.3333 53.4377 13.8952 54.4379 14.8954C55.4381 15.8956 56 17.2522 56 18.6667V33.408C52.9518 30.6832 48.9761 29.2286 44.8892 29.343C40.8022 29.4574 36.9141 31.132 34.0231 34.0231C31.132 36.9141 29.4574 40.8022 29.343 44.8892C29.2286 48.9761 30.6832 52.9518 33.408 56H13.3333C11.9188 56 10.5623 55.4381 9.5621 54.4379C8.5619 53.4377 8 52.0812 8 50.6667V18.6667C8 17.2522 8.5619 15.8956 9.5621 14.8954C10.5623 13.8952 11.9188 13.3333 13.3333 13.3333H18.6667V10.6667C18.6667 9.95942 18.9476 9.28115 19.4477 8.78105C19.9478 8.28095 20.6261 8 21.3333 8C22.0406 8 22.7189 8.28095 23.219 8.78105C23.719 9.28115 24 9.95942 24 10.6667V13.3333H40V10.6667C40 9.95942 40.281 9.28115 40.7811 8.78105C41.2811 8.28095 41.9594 8 42.6667 8ZM45.3333 34.6667C48.1623 34.6667 50.8754 35.7905 52.8758 37.7909C54.8762 39.7913 56 42.5044 56 45.3333C56 48.1623 54.8762 50.8754 52.8758 52.8758C50.8754 54.8762 48.1623 56 45.3333 56C42.5044 56 39.7913 54.8762 37.7909 52.8758C35.7905 50.8754 34.6667 48.1623 34.6667 45.3333C34.6667 42.5044 35.7905 39.7913 37.7909 37.7909C39.7913 35.7905 42.5044 34.6667 45.3333 34.6667ZM45.3333 38.6667C44.6802 38.6668 44.0498 38.9065 43.5617 39.3406C43.0736 39.7746 42.7618 40.3727 42.6853 41.0213L42.6667 41.3333V45.3333C42.6668 45.9865 42.9066 46.6169 43.3406 47.105C43.7746 47.5931 44.3727 47.9049 45.0213 47.9813L45.3333 48H48C48.6797 47.9992 49.3334 47.739 49.8276 47.2724C50.3219 46.8058 50.6193 46.1681 50.6591 45.4896C50.699 44.8111 50.4782 44.143 50.042 43.6218C49.6057 43.1006 48.9869 42.7656 48.312 42.6853L48 42.6667V41.3333C48 40.6261 47.7191 39.9478 47.219 39.4477C46.7189 38.9476 46.0406 38.6667 45.3333 38.6667ZM22.6667 37.3333H21.3333C20.6261 37.3333 19.9478 37.6143 19.4477 38.1144C18.9476 38.6145 18.6667 39.2928 18.6667 40C18.6667 40.7072 18.9476 41.3855 19.4477 41.8856C19.9478 42.3857 20.6261 42.6667 21.3333 42.6667H22.6667C23.3739 42.6667 24.0522 42.3857 24.5523 41.8856C25.0524 41.3855 25.3333 40.7072 25.3333 40C25.3333 39.2928 25.0524 38.6145 24.5523 38.1144C24.0522 37.6143 23.3739 37.3333 22.6667 37.3333ZM29.3333 26.6667H21.3333C20.6537 26.6674 19.9999 26.9277 19.5057 27.3943C19.0115 27.8608 18.714 28.4985 18.6742 29.1771C18.6344 29.8556 18.8551 30.5237 19.2914 31.0449C19.7276 31.5661 20.3464 31.9011 21.0213 31.9813L21.3333 32H29.3333C30.013 31.9992 30.6668 31.739 31.161 31.2724C31.6552 30.8058 31.9526 30.1681 31.9925 29.4896C32.0323 28.8111 31.8115 28.143 31.3753 27.6218C30.9391 27.1006 30.3203 26.7656 29.6453 26.6853L29.3333 26.6667Z"
                fill="#DCDCDC"
              />
            </g>
            <defs>
              <clipPath id="clip0_calendar">
                <rect width="64" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {/* Text Content */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-2xl font-medium text-black text-center font-geist">
              You don't have any session
            </h3>
            <p className="text-base text-gray-500 text-center font-geist">
              Book a session with a mentor today to have access to this page
            </p>
          </div>

          {/* Book a Session Button */}
          <Button
            className="w-full max-w-[270px] h-auto py-3 px-3 bg-black text-white hover:bg-gray-800 rounded-[44px] font-geist text-[13px] font-medium"
            onClick={() => {
              // Navigate to mentorship page to book a session
              window.location.href = "/talent/mentorship";
            }}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </div>
  );
}
