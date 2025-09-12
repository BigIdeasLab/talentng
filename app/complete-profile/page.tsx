"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { BasicInfoStep } from "@/components/CompleteProfile/BasicInfoStep";
import { SkillsExperienceStep } from "@/components/CompleteProfile/SkillsExperienceStep";
import { AvailabilityLocationStep } from "@/components/CompleteProfile/AvailabilityLocationStep";

export default function CompleteProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    shortBio: "",
    profileImage: null as File | null,
    // Skills & Experience
    skills: "",
    jobTitle: "",
    company: "",
    duration: "",
    workExperience: "",
    description: "",
    portfolio: null as File | null,
    // Availability & Location
    location: "",
    contactInfo: "",
    availability: "" as "full-time" | "part-time" | "freelance" | "",
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    // Handle final submission
    console.log("Final form data:", formData);
    // Navigate back to dashboard or show success message
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        {/* Step Content */}
        <div className="max-w-2xl">
          {/* Dynamic Step Header */}
          <div className="space-y-4 mb-8">
            <div className="text-base font-medium text-black font-geist">
              Steps {currentStep.toString().padStart(2, '0')}/03
            </div>
            <h2 className="text-2xl font-medium text-black font-geist">
              {currentStep === 1 && "Basic Info"}
              {currentStep === 2 && "Skills & Experience"}
              {currentStep === 3 && "Availability & Location"}
            </h2>
            <p className="text-base font-medium text-gray-500 font-geist">
              Setup your profile for this workspace
            </p>
          </div>

          {currentStep === 1 && (
            <BasicInfoStep
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <SkillsExperienceStep
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === 3 && (
            <AvailabilityLocationStep
              formData={formData}
              updateFormData={updateFormData}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
