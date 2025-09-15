"use client";
import React, { useState } from "react";
import { BasicInfoStep } from "@/components/CompleteProfile/BasicInfoStep";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function CreateProfile() {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullname: "",
    talent: "",
    bio: "",
  });

  const mutation = useMutation({
    mutationFn: (newProfile: typeof formData) => {
      return api("/talent-profiles/me", {
        method: "POST",
        body: newProfile,
      });
    },
    onSuccess: () => {
      toast({
        title: "Profile Created",
        description: "Your profile has been successfully created.",
      });
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Error creating profile:", error);
      toast({
        title: "Error",
        description: "Failed to create profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = () => {
    console.log("Submitting form data:", formData);

    // Validate fullname
    if (!formData.fullname || formData.fullname.length < 2 || formData.fullname.length > 100) {
      toast({
        title: "Validation Error",
        description: "Full name must be between 2 and 100 characters.",
        variant: "destructive",
      });
      return;
    }

    // Validate bio
    if (formData.bio && (formData.bio.length < 10 || formData.bio.length > 100)) {
      toast({
        title: "Validation Error",
        description: "Bio must be between 10 and 100 characters if provided.",
        variant: "destructive",
      });
      return;
    }

    // Validate talent
    if (!formData.talent || formData.talent.length < 2 || formData.talent.length > 100) {
      toast({
        title: "Validation Error",
        description: "Talent must be between 2 and 100 characters.",
        variant: "destructive",
      });
      return;
    }

    mutation.mutate(formData);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-medium text-black font-geist">
            Create Your Profile
          </h2>
          <p className="text-base font-medium text-gray-500 font-geist">
            Let's get your basic information set up.
          </p>
        </div>

        <BasicInfoStep
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleSubmit}
          isLoading={mutation.isPending}
        />
      </div>
    </div>
  );
}
