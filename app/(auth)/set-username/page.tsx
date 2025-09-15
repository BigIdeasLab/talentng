"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import apiClient from "@/lib/api";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const setUsernameSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(50, "Username must not exceed 50 characters.")
    .regex(
      /^[a-z0-9_.-]+$/,
      "Username can only contain lowercase letters, numbers, underscores, hyphens, and periods.",
    )
    .refine((username) => {
      const letterCount = (username.match(/[a-z]/g) || []).length;
      return letterCount >= 3;
    }, "Username must contain at least 3 letters.")
    .refine((username) => {
      const reservedUsernames = [
        "admin",
        "root",
        "talentng",
        "support",
        "moderator",
      ]; // Example reserved words
      return !reservedUsernames.includes(username.toLowerCase());
    }, "This username is reserved. Please choose another."),
});

type SetUsernameFormValues = z.infer<typeof setUsernameSchema>;

const SetUsernamePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userId, setUserId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // State for username availability check
  const [usernameInput, setUsernameInput] = useState("");
  const debouncedUsername = useDebounce(usernameInput, 500);
  const [usernameStatus, setUsernameStatus] = useState<
    "idle" | "checking" | "available" | "taken"
  >("idle");

  const form = useForm<SetUsernameFormValues>({
    resolver: zodResolver(setUsernameSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    const urlUserId = searchParams.get("userId");
    const urlAccessToken = searchParams.get("accessToken");

    if (urlUserId && urlAccessToken) {
      setUserId(urlUserId);
      setAccessToken(urlAccessToken);
    } else {
      // If parameters are missing, redirect to login or an error page
      toast.error("Missing user information. Please try logging in again.");
      router.push("/login");
    }
  }, [searchParams, router]);

  // Watch for username changes for availability check
  useEffect(() => {
    const checkUsername = async () => {
      // Get current validation state from react-hook-form
      if (debouncedUsername.length > 0) { // Only proceed if usernameInput is not empty
        const isValid = await form.trigger("username"); // Manually trigger validation

        if (debouncedUsername.length >= 2 && isValid) {
        // Only proceed if valid
        setUsernameStatus("checking");
        try {
          const isTaken = await apiClient<boolean>(
            `/users/username-taken/${debouncedUsername}`,
          );
          setUsernameStatus(isTaken ? "taken" : "available");
        } catch (error) {
          setUsernameStatus("idle"); // Or handle error state
          toast.error("Failed to check username availability.");
        }
      } else {
        setUsernameStatus("idle");
      }
    };

    checkUsername();
  }, [debouncedUsername, form]);

  const setUsernameMutation = useMutation({
    mutationFn: (data: SetUsernameFormValues) => {
      if (!userId || !accessToken) {
        throw new Error("User ID or Access Token is missing.");
      }
      return apiClient("/users/me/set-username", {
        method: "PATCH",
        body: { userId, username: data.username },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Username set successfully!");
      router.push(`/select-role?accessToken=${accessToken}`); // Redirect to select-role page after setting username
    },
    onError: (error) => {
      toast.error(error.message || "Failed to set username. Please try again.");
    },
  });

  const onSubmit = (data: SetUsernameFormValues) => {
    if (usernameStatus !== "available") {
      toast.error("Please choose an available username.");
      return;
    }
    setUsernameMutation.mutate(data);
  };

  if (!userId || !accessToken) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[320px] flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/95484ffeaace17b0e40815c0aa78c80490650deb?width=168"
            alt="Talent.ng Logo"
            className="w-[84px] h-[64px]"
          />
          <h1 className="text-black font-geist text-[32px] font-semibold leading-[120%]">
            Choose a Username
          </h1>
          <p className="text-gray-500 font-geist text-base font-medium leading-[120%] text-center">
            You're almost there! Please choose a unique username to complete
            your account setup.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter username"
                      {...field}
                      onChange={(e) => {
                        const lowercasedValue = e.target.value.toLowerCase(); // Convert to lowercase
                        field.onChange(lowercasedValue);
                        setUsernameInput(lowercasedValue);
                      }}
                      className="h-12 rounded-3xl border-gray-300 text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                  {usernameStatus === "checking" && (
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Checking...
                    </p>
                  )}
                  {usernameStatus === "taken" && (
                    <p className="text-xs text-red-500">
                      Username is already taken.
                    </p>
                  )}
                  {usernameStatus === "available" && (
                    <p className="text-xs text-green-500">
                      Username is available.
                    </p>
                  )}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={
                setUsernameMutation.isPending || usernameStatus !== "available"
              }
              className="w-full rounded-3xl"
            >
              {setUsernameMutation.isPending
                ? "Setting username..."
                : "Set Username"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

const SetUsernamePageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SetUsernamePage />
  </Suspense>
);

export default SetUsernamePageWithSuspense;
