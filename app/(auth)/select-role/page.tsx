"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import * as z from "zod";

import apiClient from "@/lib/api";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { getCookie } from "@/lib/utils";

const roleSchema = z.object({
  role: z.enum(["talent", "mentor"], {
    required_error: "Please select a role.",
  }),
});

type RoleFormValues = z.infer<typeof roleSchema>;

const SelectRolePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading, refetchUser } = useAuth();
  const [selectedRole, setSelectedRole] = useState<"talent" | "mentor" | null>(
    null,
  );

  useEffect(() => {
    const urlAccessToken = searchParams.get("accessToken");
    if (urlAccessToken) {
      const existingToken = getCookie("accessToken");
      if (urlAccessToken !== existingToken) {
        document.cookie = `accessToken=${urlAccessToken}; path=/; max-age=604800; samesite=lax`;
        refetchUser();
        return;
      }
    }

    if (!loading && user && user.role !== "general") {
      if (user.role === "talent") {
        router.push("/create-profile");
      } else if (user.role === "mentor") {
        router.push("/mentor/create-profile");
      } else {
        router.push("/dashboard");
      }
    }
  }, [user, loading, router, searchParams, refetchUser]);

  const setRoleMutation = useMutation({
    mutationFn: (role: "talent" | "mentor") => {
      return apiClient("/users/me/role", {
        method: "PATCH",
        body: { role },
      });
    },
    onSuccess: () => {
      toast.success("Role set successfully!");
      if (selectedRole === "talent") {
        router.push("/create-profile");
      } else if (selectedRole === "mentor") {
        router.push("/mentor/create-profile"); // Placeholder for mentor profile creation
      } else {
        router.push("/dashboard"); // Fallback, though ideally all roles handled
      }
    },
    onError: (error) => {
      toast.error(error.message || "Failed to set role. Please try again.");
    },
  });

  const handleRoleSelection = (role: "talent" | "mentor") => {
    setSelectedRole(role);
    setRoleMutation.mutate(role);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[320px] flex flex-col gap-16">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Header Section */}
          <div className="flex flex-col gap-11 w-full">
            <div className="flex flex-col items-center gap-8">
              {/* Logo and Title */}
              <div className="flex flex-col items-center gap-6 w-full max-w-[297px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/95484ffeaace17b0e40815c0aa78c80490650deb?width=168"
                  alt="Talent.ng Logo"
                  className="w-[84px] h-[64px]"
                />
                <div className="flex flex-col items-center gap-4 w-full">
                  <h1 className="text-black font-geist text-[32px] font-semibold leading-[120%]">
                    Select Your Role
                  </h1>
                  <p className="text-gray-500 font-geist text-base font-medium leading-[120%] text-center w-full">
                    Please choose the role that best describes you.
                  </p>
                </div>
              </div>

              {/* Role Selection Buttons */}
              <div className="flex flex-col gap-4 w-full">
                <Button
                  onClick={() => handleRoleSelection("talent")}
                  disabled={setRoleMutation.isPending}
                  className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white text-gray-950 font-geist text-base font-medium hover:bg-gray-50 transition-colors w-full"
                >
                  {setRoleMutation.isPending && selectedRole === "talent" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : null}
                  I am a Talent
                </Button>
                <Button
                  onClick={() => handleRoleSelection("mentor")}
                  disabled={setRoleMutation.isPending}
                  className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white text-gray-950 font-geist text-base font-medium hover:bg-gray-50 transition-colors w-full"
                >
                  {setRoleMutation.isPending && selectedRole === "mentor" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : null}
                  I am a Mentor
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center w-full">
          <span className="text-gray-600 font-geist text-sm font-normal">
            By selecting your role, you agree to our{" "}
          </span>
          <span className="text-gray-950 font-geist text-sm font-semibold">
            Terms and Conditions.
          </span>
        </div>
      </div>
    </div>
  );
};

const SelectRolePageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SelectRolePage />
  </Suspense>
);

export default SelectRolePageWithSuspense;
