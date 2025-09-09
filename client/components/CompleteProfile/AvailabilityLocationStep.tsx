import React from "react";
import { useNavigate } from "react-router-dom";

interface AvailabilityLocationStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onSubmit: () => void;
}

export function AvailabilityLocationStep({ formData, updateFormData, onSubmit }: AvailabilityLocationStepProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    // Navigate back to dashboard after successful submission
    navigate("/dashboard");
  };

  const handleAvailabilityChange = (value: "full-time" | "part-time" | "freelance") => {
    updateFormData("availability", value);
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Location Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => updateFormData("location", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Contact Info Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Contact Info (email, phone, social links like LinkedIn, Behance, GitHub)"
            value={formData.contactInfo}
            onChange={(e) => updateFormData("contactInfo", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Availability Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-950 font-geist">Availability</h3>
          
          <div className="space-y-4">
            {/* Full Time Option */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleAvailabilityChange("full-time")}
                className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black"
              >
                {formData.availability === "full-time" && (
                  <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                )}
              </button>
              <label 
                onClick={() => handleAvailabilityChange("full-time")}
                className="text-base font-medium text-gray-500 font-geist cursor-pointer"
              >
                Full Time
              </label>
            </div>

            {/* Part Time Option */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleAvailabilityChange("part-time")}
                className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black"
              >
                {formData.availability === "part-time" && (
                  <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                )}
              </button>
              <label 
                onClick={() => handleAvailabilityChange("part-time")}
                className="text-base font-medium text-gray-500 font-geist cursor-pointer"
              >
                Part Time
              </label>
            </div>

            {/* Freelance Option */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleAvailabilityChange("freelance")}
                className="w-4.5 h-4.5 rounded-full border border-gray-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black"
              >
                {formData.availability === "freelance" && (
                  <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                )}
              </button>
              <label 
                onClick={() => handleAvailabilityChange("freelance")}
                className="text-base font-medium text-gray-500 font-geist cursor-pointer"
              >
                Freelance
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 bg-black text-white rounded-3xl font-geist text-base font-medium hover:bg-gray-900 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
