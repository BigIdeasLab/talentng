"use client";
import React from "react";
import { BasicInfoStep } from "@/components/CompleteProfile/BasicInfoStep";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, ProfileFormValues } from "@/lib/validations/profile";
import { Form } from "@/components/ui/form";

export default function CreateProfile() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullname: "",
      talent: "",
      bio: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (newProfile: ProfileFormValues) => {
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

  const onSubmit = (values: ProfileFormValues) => {
    console.log("Submitting form data:", values);
    mutation.mutate(values);
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <BasicInfoStep form={form} onNext={form.handleSubmit(onSubmit)} />
          </form>
        </Form>
      </div>
    </div>
  );
}
