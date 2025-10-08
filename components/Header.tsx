"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="w-full bg-white border-b border-gray-100 border">
      <div className="mx-auto px-4 md:px-8 lg:px-28 py-4 flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="w-full grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img
              src="/logo.png"
              alt="Talent.ng Logo"
              className="w-[58px] h-[44px]"
            />
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center justify-center">
            <a
              href="#"
              className="px-[14px] py-[14px] rounded-3xl text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors"
            >
              About us
            </a>
            <a
              href="#"
              className="px-[14px] py-[14px] rounded-3xl text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors"
            >
              Premium
            </a>
            <a
              href="#"
              className="px-[14px] py-[14px] rounded-3xl text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors"
            >
              Recruit Talent
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center justify-end gap-2">
            {user ? (
              <Link
                href="/talent/dashboard"
                className="px-[14px] py-[14px] rounded-3xl bg-brand-primary text-white font-geist text-base font-medium hover:bg-brand-primary/90 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-[14px] py-[14px] rounded-3xl text-black font-geist text-base font-medium hover:bg-gray-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-[14px] py-[14px] rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
