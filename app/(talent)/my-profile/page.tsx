"use client";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import api from "@/lib/api";
import { TalentProfile } from "@/lib/types/profile";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, ProfileFormValues } from "@/lib/validations/profile";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ProfileData = Omit<Partial<TalentProfile>, "skills"> & { skills?: string };

export default function MyProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const { data: profile, isLoading } = useQuery<TalentProfile>({
    queryKey: ["talent-profile", user?.id],
    queryFn: () => api("/talent-profiles/me"),
    enabled: !!user,
  });

  const [profileData, setProfileData] = useState<ProfileData>({});

  useEffect(() => {
    if (profile) {
      setProfileData({
        ...profile,
        skills: Array.isArray(profile.skills) ? profile.skills.join(", ") : "",
      });
    }
  }, [profile]);

  const mutation = useMutation({
    mutationFn: (updatedProfile: ProfileData) => {
      const payload = {
        ...updatedProfile,
        skills:
          typeof updatedProfile.skills === "string"
            ? updatedProfile.skills.split(",").map((s) => s.trim())
            : profile?.skills,
      };
      return api("/talent-profiles/me", {
        method: "PATCH",
        body: payload,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["talent-profile", user?.id] });
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      setIsEditing(false);
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setProfileData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      links: { ...prev.links, [id]: value },
    }));
  };

  const handleAvailabilityChange = (
    value: "full_time" | "part_time" | "freelance",
  ) => {
    if (isEditing) {
      setProfileData((prev) => ({ ...prev, availability: value }));
    }
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(profileData);
  };

  if (authLoading || isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-8">
      <form onSubmit={handleSaveChanges}>
        {/* Basic Info Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl font-medium text-black font-geist">
              Basic Info
            </h2>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={!isEditing || mutation.isPending}
                className="px-3.5 py-3.5 border border-gray-200 rounded-3xl bg-white text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                {mutation.isPending ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2.5 px-3.5 py-3.5 rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-900 transition-colors"
              >
                {isEditing ? "Cancel" : "Edit"}
                {!isEditing && (
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
                )}
              </button>
            </div>
          </div>

          <p className="text-base font-medium text-gray-500 font-geist">
            Setup your profile for this workspace
          </p>

          <div className="max-w-2xl space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-16 h-16">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  {profileData.profileImageUrl ? (
                    <img
                      src={profileData.profileImageUrl}
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
                      <path
                        d="M20 3C20.5304 3 21.0392 3.71071 21.4142 4.08579C21.7893 4.46086 22 4.96957 22 5.5V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0392 21.2893 20.5304 21.5 20 21.5H4C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21073 20.5391 2.00001 20.0304 2.00001 19.5V13.5C2.00001 13.2348 2.10537 12.9804 2.29291 12.7929C2.48044 12.6054 2.7348 12.5 3.00001 12.5C3.26523 12.5 3.51958 12.6054 3.70712 12.7929C3.89466 12.9804 4.00001 13.2348 4.00001 13.5V15.6L8.99501 10.606C9.11109 10.4899 9.2489 10.3978 9.40058 10.335C9.55226 10.2721 9.71483 10.2398 9.87901 10.2398C10.0432 10.2398 10.2058 10.2721 10.3574 10.335C10.5091 10.3978 10.6469 10.4899 10.763 10.606L14.828 14.672L16.066 13.434C16.1821 13.3179 16.3199 13.2258 16.4716 13.1629C16.6233 13.1001 16.7858 13.0678 16.95 13.0678C17.1142 13.0678 17.2768 13.1001 17.4284 13.1629C17.5801 13.2258 17.7179 13.3179 17.834 13.434L20 15.601V5.5H12C11.7348 5.5 11.4804 5.39464 11.2929 5.20711C11.1054 5.01957 11 4.76522 11 4.5C11 4.23478 11.1054 3.98043 11.2929 3.79289C11.4804 3.60536 11.7348 3.5 12 3.5H20Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Full Name */}
            <input
              id="fullname"
              type="text"
              placeholder="Full Name"
              value={profileData.fullname || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Talent */}
            <input
              id="talent"
              type="text"
              placeholder="Talent"
              value={profileData.talent || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Short Bio */}
            <textarea
              id="bio"
              placeholder="Short Bio"
              value={profileData.bio || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={4}
              className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />
          </div>
        </div>

        {/* Skills & Experience Section */}
        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-medium text-black font-geist">
            Skills & Experience
          </h2>
          <p className="text-base font-medium text-gray-500 font-geist">
            Showcase your expertise and work history.
          </p>

          <div className="max-w-2xl space-y-6">
            {/* Skills */}
            <input
              id="skills"
              type="text"
              placeholder="Skills (comma-separated)"
              value={profileData.skills || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Job Title */}
            <input
              id="headline"
              type="text"
              placeholder="Job Title / Headline"
              value={profileData.headline || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Company */}
            <input
              id="company"
              type="text"
              placeholder="Company"
              value={profileData.company || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Duration */}
            <input
              id="duration"
              type="text"
              placeholder="Duration (e.g., 2023 - Present)"
              value={profileData.duration || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Work Experience Dropdown */}
            <div className="relative">
              <select
                id="workExperience"
                value={profileData.workExperience || ""}
                onChange={handleInputChange}
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
            </div>

            {/* Description */}
            <textarea
              id="description"
              placeholder="Description of your experience"
              value={profileData.description || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={4}
              className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Portfolio Upload */}
            <input
              id="resumeUrl"
              type="text"
              placeholder="Portfolio/Resume URL"
              value={profileData.resumeUrl || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />
          </div>
        </div>

        {/* Availability & Location Section */}
        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-medium text-black font-geist">
            Availability & Location
          </h2>
          <p className="text-base font-medium text-gray-500 font-geist">
            Let others know where you are and your availability.
          </p>

          <div className="max-w-2xl space-y-6">
            {/* Location */}
            <input
              id="location"
              type="text"
              placeholder="Location (e.g., Lagos, Nigeria)"
              value={profileData.location || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* GitHub Link */}
            <input
              id="github"
              type="text"
              placeholder="GitHub URL"
              value={profileData.links?.github || ""}
              onChange={handleLinksChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* LinkedIn Link */}
            <input
              id="linkedin"
              type="text"
              placeholder="LinkedIn URL"
              value={profileData.links?.linkedin || ""}
              onChange={handleLinksChange}
              disabled={!isEditing}
              className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />

            {/* Availability */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-950 font-geist">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleAvailabilityChange("full_time")}
                    disabled={!isEditing}
                    className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  >
                    {profileData.availability === "full_time" && (
                      <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                    )}
                  </button>
                  <label
                    onClick={() => handleAvailabilityChange("full_time")}
                    className={`text-base font-medium text-gray-500 font-geist ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                  >
                    Full Time
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleAvailabilityChange("part_time")}
                    disabled={!isEditing}
                    className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  >
                    {profileData.availability === "part_time" && (
                      <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                    )}
                  </button>
                  <label
                    onClick={() => handleAvailabilityChange("part_time")}
                    className={`text-base font-medium text-gray-500 font-geist ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                  >
                    Part Time
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleAvailabilityChange("freelance")}
                    disabled={!isEditing}
                    className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  >
                    {profileData.availability === "freelance" && (
                      <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                    )}
                  </button>
                  <label
                    onClick={() => handleAvailabilityChange("freelance")}
                    className={`text-base font-medium text-gray-500 font-geist ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                  >
                    Contract
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="max-w-2xl mt-8">
          <button
            type="submit"
            disabled={!isEditing || mutation.isPending}
            className="w-full py-3.5 bg-black text-white rounded-3xl font-geist text-base font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
          >
            {mutation.isPending ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
