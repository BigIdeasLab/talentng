import React from "react";
import { Link, useLocation } from "react-router-dom";

const ForgotPasswordConfirmation = () => {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[320px] flex flex-col gap-16">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Header Section */}
          <div className="flex flex-col gap-11 w-full">
            <div className="flex flex-col items-center gap-8">
              {/* Logo and Confirmation Message */}
              <div className="flex flex-col items-center gap-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/95484ffeaace17b0e40815c0aa78c80490650deb?width=168"
                  alt="Talent.ng Logo"
                  className="w-[84px] h-[64px]"
                />
                <div className="flex flex-col items-center gap-4">
                  <p className="text-[#667085] font-geist text-base font-semibold leading-[120%] text-center w-[320px]">
                    If the email{" "}
                    <span className="text-[#101828] font-bold">{email}</span>{" "}
                    exists, you will receive a password recovery link within a few minutes.
                  </p>
                </div>
              </div>

              {/* Back to Login Button */}
              <div className="flex flex-col gap-4 w-full">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-800 transition-colors"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordConfirmation;
