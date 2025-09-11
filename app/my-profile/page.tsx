"use client";
import React, { useState } from "react";

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    profileImage: null as string | null,
    fullName: "",
    shortBio: "",
    skills: "",
    jobTitle: "",
    company: "",
    duration: "",
    workExperience: "",
    description: "",
    portfolio: null as File | null,
    location: "",
    contactInfo: "",
    availability: "" as "full-time" | "part-time" | "freelance" | "",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePortfolioUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileData((prev) => ({ ...prev, portfolio: file }));
    }
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
  };

  const handleAvailabilityChange = (
    value: "full-time" | "part-time" | "freelance",
  ) => {
    setProfileData((prev) => ({ ...prev, availability: value }));
  };

  return (
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Basic Info Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-2xl font-medium text-black font-geist">
                  Basic Info
                </h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSaveChanges}
                    className="px-3.5 py-3.5 border border-gray-200 rounded-3xl bg-white text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2.5 px-3.5 py-3.5 rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-900 transition-colors"
                  >
                    Edit
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_edit)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4207 2.60608C13.0456 2.23114 12.537 2.02051 12.0067 2.02051C11.4764 2.02051 10.9677 2.23114 10.5927 2.60608L10.1214 3.07808L13.4214 6.37808L13.892 5.90675C14.0778 5.72103 14.2251 5.50053 14.3256 5.25786C14.4262 5.01519 14.4779 4.75509 14.4779 4.49241C14.4779 4.22974 14.4262 3.96964 14.3256 3.72697C14.2251 3.4843 14.0778 3.2638 13.892 3.07808L13.4207 2.60608ZM12.478 7.32075L9.17802 4.02075L3.11802 10.0814C2.98541 10.214 2.89277 10.3813 2.85068 10.5641L2.16468 13.5341C2.13912 13.6443 2.14206 13.7593 2.1732 13.8681C2.20435 13.9769 2.26269 14.076 2.34272 14.156C2.42276 14.2361 2.52185 14.2944 2.63066 14.3256C2.73947 14.3567 2.85442 14.3596 2.96468 14.3341L5.93535 13.6487C6.11789 13.6065 6.2849 13.5139 6.41735 13.3814L12.478 7.32075Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_edit">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <p className="text-base font-medium text-gray-500 font-geist">
                Setup your profile for this workspace
              </p>

              <div className="max-w-2xl space-y-6">
                {/* Profile Image */}
                <div className="relative">
                  <input
                    type="file"
                    id="profile-image"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                    disabled={!isEditing}
                  />
                  <div className="relative w-16 h-16">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {profileData.profileImage ? (
                        <img
                          src={profileData.profileImage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_profile_image)">
                            <path
                              d="M20 3C20.5304 3 21.0392 3.71071 21.4142 4.08579C21.7893 4.46086 22 4.96957 22 5.5V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0392 21.2893 20.5304 21.5 20 21.5H4C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21073 20.5391 2.00001 20.0304 2.00001 19.5V13.5C2.00001 13.2348 2.10537 12.9804 2.29291 12.7929C2.48044 12.6054 2.7348 12.5 3.00001 12.5C3.26523 12.5 3.51958 12.6054 3.70712 12.7929C3.89466 12.9804 4.00001 13.2348 4.00001 13.5V15.6L8.99501 10.606C9.11109 10.4899 9.2489 10.3978 9.40058 10.335C9.55226 10.2721 9.71483 10.2398 9.87901 10.2398C10.0432 10.2398 10.2058 10.2721 10.3574 10.335C10.5091 10.3978 10.6469 10.4899 10.763 10.606L14.828 14.672L16.066 13.434C16.1821 13.3179 16.3199 13.2258 16.4716 13.1629C16.6233 13.1001 16.7858 13.0678 16.95 13.0678C17.1142 13.0678 17.2768 13.1001 17.4284 13.1629C17.5801 13.2258 17.7179 13.3179 17.834 13.434L20 15.601V5.5H12C11.7348 5.5 11.4804 5.39464 11.2929 5.20711C11.1054 5.01957 11 4.76522 11 4.5C11 4.23478 11.1054 3.98043 11.2929 3.79289C11.4804 3.60536 11.7348 3.5 12 3.5H20Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_upload_portfolio">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>

                    {isEditing && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center cursor-pointer">
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_edit_icon)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.88682 1.70801C9.63678 1.45805 9.29771 1.31763 8.94415 1.31763C8.5906 1.31763 8.25152 1.45805 8.00149 1.70801L7.68726 2.02268L9.88726 4.22268L10.201 3.90845C10.3249 3.78464 10.4231 3.63764 10.4901 3.47586C10.5572 3.31408 10.5916 3.14068 10.5916 2.96556C10.5916 2.79045 10.5572 2.61705 10.4901 2.45527C10.4231 2.29349 10.3249 2.14649 10.201 2.02268L9.88682 1.70801ZM9.25838 4.85112L7.05838 2.65112L3.01838 6.69156C2.92997 6.77999 2.86821 6.89149 2.84015 7.01334L2.38282 8.99334C2.36578 9.06685 2.36773 9.14348 2.3885 9.21602C2.40926 9.28857 2.44816 9.35463 2.50151 9.40798C2.55487 9.46134 2.62093 9.50023 2.69347 9.521C2.76601 9.54176 2.84265 9.54372 2.91615 9.52668L4.8966 9.06979C5.01829 9.04165 5.12963 8.9799 5.21793 8.89156L9.25838 4.85112Z"
                              fill="#09244B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_edit_icon">
                              <rect
                                width="10.6667"
                                height="10.6667"
                                fill="white"
                                transform="translate(0.939697 0.303467)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={profileData.fullName}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Short Bio */}
                <textarea
                  placeholder="Short Bio"
                  value={profileData.shortBio}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      shortBio: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  rows={4}
                  className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />
              </div>
            </div>

            {/* Skills & Experience Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-black font-geist">
                Skills & Experience
              </h2>
              <p className="text-base font-medium text-gray-500 font-geist">
                Setup your profile for this workspace
              </p>

              <div className="max-w-2xl space-y-6">
                {/* Skills */}
                <input
                  type="text"
                  placeholder="Skills"
                  value={profileData.skills}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      skills: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Job Title */}
                <input
                  type="text"
                  placeholder="Job Title"
                  value={profileData.jobTitle}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      jobTitle: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Company */}
                <input
                  type="text"
                  placeholder="Company"
                  value={profileData.company}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Duration */}
                <input
                  type="text"
                  placeholder="Duration"
                  value={profileData.duration}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      duration: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Work Experience Dropdown */}
                <div className="relative">
                  <select
                    value={profileData.workExperience}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        workExperience: e.target.value,
                      }))
                    }
                    disabled={!isEditing}
                    className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none disabled:opacity-50"
                  >
                    <option value="">Work Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {isEditing && (
                    <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_dropdown)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.53026 12.2803C9.38962 12.4209 9.19889 12.4999 9.00001 12.4999C8.80114 12.4999 8.61041 12.4209 8.46976 12.2803L4.22701 8.03751C4.15538 7.96833 4.09824 7.88557 4.05894 7.79407C4.01963 7.70256 3.99894 7.60415 3.99808 7.50456C3.99721 7.40498 4.01619 7.30622 4.0539 7.21405C4.09161 7.12188 4.1473 7.03814 4.21772 6.96772C4.28814 6.8973 4.37188 6.84161 4.46405 6.8039C4.55622 6.76619 4.65498 6.74721 4.75456 6.74808C4.85415 6.74894 4.95256 6.76963 5.04407 6.80894C5.13557 6.84824 5.21833 6.90538 5.28751 6.97701L9.00001 10.6895L12.7125 6.97701C12.854 6.84039 13.0434 6.7648 13.2401 6.76651C13.4367 6.76822 13.6248 6.84709 13.7639 6.98615C13.9029 7.1252 13.9818 7.31331 13.9835 7.50996C13.9852 7.70661 13.9096 7.89606 13.773 8.03751L9.53026 12.2803Z"
                            fill="#09244B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_dropdown">
                            <rect
                              width="18"
                              height="18"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Description */}
                <textarea
                  placeholder="Description"
                  value={profileData.description}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  rows={4}
                  className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Portfolio Upload */}
                <div className="relative">
                  <input
                    type="file"
                    id="portfolio-upload"
                    onChange={handlePortfolioUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    disabled={!isEditing}
                  />
                  <div className="flex items-center justify-center py-9 border-2 border-dashed border-black rounded-[2rem] bg-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_upload_portfolio)">
                          <path
                            d="M20 3.5C20.5304 3.5 21.0392 3.71071 21.4142 4.08579C21.7893 4.46086 22 4.96957 22 5.5V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0392 21.2893 20.5304 21.5 20 21.5H4.00001C3.46958 21.5 2.96087 21.2893 2.5858 20.9142C2.21073 20.5391 2.00001 20.0304 2.00001 19.5V13.5C2.00001 13.2348 2.10537 12.9804 2.29291 12.7929C2.48044 12.6054 2.7348 12.5 3.00001 12.5C3.26523 12.5 3.51958 12.6054 3.70712 12.7929C3.89466 12.9804 4.00001 13.2348 4.00001 13.5V15.6L8.99501 10.606C9.11109 10.4899 9.2489 10.3978 9.40058 10.335C9.55226 10.2721 9.71483 10.2398 9.87901 10.2398C10.0432 10.2398 10.2058 10.2721 10.3574 10.335C10.5091 10.3978 10.6469 10.4899 10.763 10.606L14.828 14.672L16.066 13.434C16.1821 13.3179 16.3199 13.2258 16.4716 13.1629C16.6233 13.1001 16.7858 13.0678 16.95 13.0678C17.1142 13.0678 17.2768 13.1001 17.4284 13.1629C17.5801 13.2258 17.7179 13.3179 17.834 13.434L20 15.601V5.5H12C11.7348 5.5 11.4804 5.39464 11.2929 5.20711C11.1054 5.01957 11 4.76522 11 4.5C11 4.23478 11.1054 3.98043 11.2929 3.79289C11.4804 3.60536 11.7348 3.5 12 3.5H20Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_upload_portfolio">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      <span className="text-sm font-medium text-black font-geist">
                        {profileData.portfolio
                          ? profileData.portfolio.name
                          : "Click to upload Portfolio"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability & Location Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-black font-geist">
                Availability & Location
              </h2>
              <p className="text-base font-medium text-gray-500 font-geist">
                Setup your profile for this workspace
              </p>

              <div className="max-w-2xl space-y-6">
                {/* Location */}
                <input
                  type="text"
                  placeholder="Location"
                  value={profileData.location}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Contact Info */}
                <input
                  type="text"
                  placeholder="Contact Info (email, phone, social links like LinkedIn, Behance, GitHub)"
                  value={profileData.contactInfo}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      contactInfo: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                />

                {/* Availability */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-gray-950 font-geist">
                    Availability
                  </h3>

                  <div className="space-y-4">
                    {/* Full Time Option */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          isEditing && handleAvailabilityChange("full-time")
                        }
                        disabled={!isEditing}
                        className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                      >
                        {profileData.availability === "full-time" && (
                          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                        )}
                      </button>
                      <label
                        onClick={() =>
                          isEditing && handleAvailabilityChange("full-time")
                        }
                        className={`text-base font-medium text-gray-500 font-geist ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                      >
                        Full Time
                      </label>
                    </div>

                    {/* Part Time Option */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          isEditing && handleAvailabilityChange("part-time")
                        }
                        disabled={!isEditing}
                        className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                      >
                        {profileData.availability === "part-time" && (
                          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                        )}
                      </button>
                      <label
                        onClick={() =>
                          isEditing && handleAvailabilityChange("part-time")
                        }
                        className={`text-base font-medium text-gray-500 font-geist ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                      >
                        Part Time
                      </label>
                    </div>

                    {/* Freelance Option */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          isEditing && handleAvailabilityChange("freelance")
                        }
                        disabled={!isEditing}
                        className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                      >
                        {profileData.availability === "freelance" && (
                          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                        )}
                      </button>
                      <label
                        onClick={() =>
                          isEditing && handleAvailabilityChange("freelance")
                        }
                        className={`text-base font-medium text-gray-500 font-geist ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                      >
                        Freelance
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="max-w-2xl">
              <button
                onClick={handleSaveChanges}
                className="w-full py-3.5 bg-black text-white rounded-3xl font-geist text-base font-medium hover:bg-gray-900 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
  );
}
