"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { FormProvider } from "react-hook-form";
import { BasicInfoStep } from "@/components/CompleteProfile/BasicInfoStep";
import { SkillsExperienceStep } from "@/components/CompleteProfile/SkillsExperienceStep";
import { AvailabilityLocationStep } from "@/components/CompleteProfile/AvailabilityLocationStep";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, ProfileFormValues } from "@/lib/validations/profile";
import { toast } from "sonner";

export default function CompleteProfile() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullname: "",
      headline: "",
      bio: "",
      skills: [],
      workExperience: "",
      company: "",
      duration: "",
      description: "",
      talent: "",
      availability: undefined,
      location: "",
      links: "",
      portfolioItems: [],
      resumeUrl: "",
      visibility: undefined,
    },
  });

  const handleNext = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await form.trigger(["fullname", "bio"]);
    } else if (currentStep === 2) {
      isValid = await form.trigger([
        "skills",
        "workExperience",
        "company",
        "duration",
        "description",
      ]);
    } else if (currentStep === 3) {
      isValid = await form.trigger([
        "availability",
        "location",
        "links",
        "portfolioItems",
        "resumeUrl",
        "visibility",
      ]);
    }

    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (!isValid) {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    // Handle final submission
    console.log("Final form data:", data);
    toast.success("Profile updated successfully!");
    // Here you would typically make an API call to update the profile
    // Navigate back to dashboard or show success message
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-8">
      {/* Step Content */}
      <div className="max-w-2xl">
        {/* Dynamic Step Header */}
        <div className="space-y-4 mb-8">
          <div className="text-base font-medium text-black font-geist">
            Steps {currentStep.toString().padStart(2, "0")}/03
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

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 1 && (
              <BasicInfoStep form={form} onNext={handleNext} />
            )}

            {currentStep === 2 && (
              <SkillsExperienceStep form={form} onNext={handleNext} />
            )}

            {currentStep === 3 && (
              <AvailabilityLocationStep form={form} onNext={handleNext} />
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
