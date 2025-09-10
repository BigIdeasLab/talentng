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
      "https://api.builder.io/api/v1/image/assets/TEMP/62a092bd6bc517738cffbf8ef4fbcb6b9763da78?width=256",
    title: "Product Designer",
    company: "ConnectNigeria",
    location: "Lagos, Nigeria 🇳🇬",
    description:
      "As a dedicated Product Designer and UX Consultant, I am deeply passionate about the intersection of human experience and technology. I believe that through innovative design and thoughtful user experiences we can build better products.",
    availableFor: [
      "Mentoring",
      "Giving resume feedback",
      "Participating in User Research",
      "Career guidance",
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
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold font-geist">
                  Mentorship
                </h1>
                <div className="text-sm text-gray-500 mt-1">
                  <button
                    onClick={() => navigate(-1)}
                    className="text-sm text-gray-600 underline"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-6">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-28 h-28 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold font-geist">
                      {mentor.name}
                    </h2>
                    {mentor.verified && (
                      <span className="text-sm text-blue-500">✔️</span>
                    )}
                  </div>

                  <div className="text-sm text-gray-700 mt-1">
                    {mentor.title}, {mentor.company}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {mentor.location}
                  </div>

                  <p className="text-sm text-gray-500 mt-4 leading-7">
                    {mentor.description}
                  </p>

                  <div className="mt-4">
                    <div className="text-sm font-semibold">Available for</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mentor.availableFor.slice(0, 3).map((a) => (
                        <div
                          key={a}
                          className="px-3 py-2 border rounded-full text-sm text-gray-800"
                        >
                          {a}
                        </div>
                      ))}
                      {mentor.availableFor.length > 3 && (
                        <div className="px-3 py-2 border rounded-full text-sm text-gray-800">
                          +{mentor.availableFor.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="px-4 py-2 rounded-full bg-black text-white"
                  >
                    Book a session
                  </button>
                </div>
              </div>

              {/* Resume / info sections (collapsed for brevity but present) */}
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-semibold">Resume</h3>
                <div className="mt-4">
                  <div className="text-sm text-gray-700 font-medium">
                    Aug 2022 - Present
                  </div>
                  <div className="text-sm text-gray-900 font-semibold">
                    Product Designer, ConnectNigeria
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-700 font-medium">
                    Aug 2021 - Sept 2021
                  </div>
                  <div className="text-sm text-gray-900 font-semibold">
                    Product Designer, Eonsfleet
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
