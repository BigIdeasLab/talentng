"use client";

import { LearningPath } from "@/lib/types/learning";

interface LearningPathCardProps {
  path: LearningPath;
}

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <div className="relative group cursor-pointer">
      {/* Course Image */}
      <div 
        className="w-full h-[300px] rounded-[2rem] bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${path.backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black rounded-b-[2rem] p-4">
          <div className="space-y-11">
            <h3 className="text-base font-bold text-white font-geist">
              {path.title}
            </h3>
            <div className="text-sm text-white font-geist">
              <span className="font-bold">5 classes </span>
              <span className="font-normal">{path.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}