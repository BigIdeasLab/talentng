"use client";
import React from "react";

export default function LearningHub() {
  return (
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Learning Hub Section */}
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-black font-geist">
              Learning Hub
            </h1>
          </div>

          {/* Recommended Learning Paths Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-2xl font-medium text-[#14171F] font-geist">
                Recommended Learning Paths
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-base text-[#667085] font-geist">
                  Reach your learning goals with hand picked sequential
                  classes
                </p>
                <button className="text-base text-[#373F51] font-geist underline hover:no-underline">
                  View more
                </button>
              </div>
            </div>

            {/* Learning Path Cards */}
            <div className="flex gap-6 overflow-x-auto">
              {/* Card 1 - Voila */}
              <div className="relative flex-shrink-0 w-[374px] h-[300px] rounded-[32px] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4bf01fda474c8d498e63c2e0cb4bc008dca99e0a?width=748"
                  alt="Voila - Branding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[114px] bg-black rounded-b-[32px] p-4 flex flex-col justify-between">
                  <h3 className="text-base font-semibold text-white font-geist">
                    Whatever the Title
                  </h3>
                  <p className="text-[13px] text-white font-geist">
                    <span className="font-bold">5 classes </span>
                    <span className="font-normal">(4h 56m)</span>
                  </p>
                </div>
              </div>

              {/* Card 2 - Interactive Landing Page */}
              <div className="relative flex-shrink-0 w-[374px] h-[300px] rounded-[32px] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d380f60a4797c398d705e893eacfb868043112f3?width=748"
                  alt="Interactive Landing Page for Megadeth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[114px] bg-black rounded-b-[32px] p-4 flex flex-col justify-between">
                  <h3 className="text-base font-semibold text-white font-geist">
                    Whatever the Title
                  </h3>
                  <p className="text-[13px] font-bold text-white font-geist">
                    5 classes (Docs)
                  </p>
                </div>
              </div>

              {/* Card 3 - Cordelia's Restaurant */}
              <div className="relative flex-shrink-0 w-[374px] h-[300px] rounded-[32px] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/96ff905aeec3c249a3dc7d41243aadaabdf0a0aa?width=748"
                  alt="Brand Identity Design for Cordelia's Restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[114px] bg-black rounded-b-[32px] p-4 flex flex-col justify-between">
                  <h3 className="text-base font-semibold text-white font-geist">
                    Whatever the Title
                  </h3>
                  <p className="text-[13px] text-white font-geist">
                    <span className="font-bold">5 classes </span>
                    <span className="font-normal">(4h 56m)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
