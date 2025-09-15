'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2 } from "lucide-react";

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

import { signUpSchema } from "@/lib/validations/auth";

type SignUpFormValues = z.infer<typeof signUpSchema>;

const Signup = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1 = email only, 2 = username + password

  // State for username availability check
  const [usernameInput, setUsernameInput] = useState("");
  const debouncedUsername = useDebounce(usernameInput, 500);
  const [usernameStatus, setUsernameStatus] = useState<
    "idle" | "checking" | "available" | "taken"
  >("idle");

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    },
  });

  // Watch for username changes for availability check
  useEffect(() => {
    const checkUsername = async () => {
      if (step === 2 && debouncedUsername.length >= 2) {
        setUsernameStatus("checking");
        try {
          const isTaken = await apiClient<boolean>(
            `/users/username-taken/${debouncedUsername}`,
          );
          setUsernameStatus(isTaken ? "taken" : "available");
        } catch (error) {
          setUsernameStatus("idle"); // Or handle error state
        }
      } else {
        setUsernameStatus("idle");
      }
    };

    checkUsername();
  }, [debouncedUsername, step]);

  const mutation = useMutation({
    mutationFn: (data: SignUpFormValues) => {
      return apiClient("/auth/register", {
        method: "POST",
        body: data,
      });
    },
    onSuccess: () => {
      toast.success("Account created successfully!");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred. Please try again.");
    },
  });

  const handleContinueWithEmail = async () => {
    const isValid = await form.trigger("email");
    if (isValid) {
      setStep(2);
    }
  };

  const onSubmit = (data: SignUpFormValues) => {
    if (usernameStatus !== "available") {
      toast.error("Please choose an available username.");
      return;
    }
    mutation.mutate(data);
  };

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
                    Create an account
                  </h1>
                  <p className="text-gray-500 font-geist text-base font-medium leading-[120%] text-center w-full">
                    Signing up for Talent.ng is fast and free.
                  </p>
                </div>
              </div>

              {/* Form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 w-full"
                >
                  {step === 1 && (
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter email"
                              {...field}
                              className="h-12 rounded-3xl border-gray-300 text-gray-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {step === 2 && (
                    <>
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
                                  field.onChange(e);
                                  setUsernameInput(e.target.value);
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
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Create a password"
                                  {...field}
                                  className="h-12 rounded-3xl border-gray-300 text-gray-600 pr-10"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                >
                                  {showPassword ? (
                                    <EyeOff size={18} />
                                  ) : (
                                    <Eye size={18} />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {step === 1 && (
                    <Button
                      type="button"
                      onClick={handleContinueWithEmail}
                      className="w-full rounded-3xl"
                    >
                      Continue with Email
                    </Button>
                  )}

                  {step === 2 && (
                    <Button
                      type="submit"
                      disabled={
                        mutation.isPending || usernameStatus !== "available"
                      }
                      className="w-full rounded-3xl"
                    >
                      {mutation.isPending ? "Signing up..." : "Sign up"}
                    </Button>
                  )}
                </form>
              </Form>

              {/* Divider */}
              <svg
                width="320"
                height="1"
                viewBox="0 0 320 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path d="M0 0.5H320" stroke="#EAECF0" />
              </svg>
            </div>

            {/* Google Sign Up */}
            <button
              onClick={() => {
                window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`;
              }}
              className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white hover:bg-gray-50 transition-colors w-full"
            >
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Google Icon SVG */}
                </svg>
                <span className="text-gray-950 font-geist text-base font-medium">
                  Continue with Google
                </span>
              </div>
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center w-full">
            <span className="text-gray-500 font-geist text-base font-normal">
              Already have an account?{" "}
            </span>
            <Link
              href="/login"
              className="text-gray-950 font-geist text-base font-semibold underline hover:text-gray-700 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center w-full">
          <span className="text-gray-600 font-geist text-sm font-normal">
            By creating an account, you agree to our{" "}
          </span>
          <span className="text-gray-950 font-geist text-sm font-semibold">
            Terms and Conditions.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;