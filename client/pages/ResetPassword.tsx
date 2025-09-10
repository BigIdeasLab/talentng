import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password.length >= 8) {
      // Simulate password reset success
      navigate("/login");
    }
  };

  const isPasswordValid =
    password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-[320px] flex flex-col gap-16">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Header Section */}
          <div className="flex flex-col gap-11 w-full">
            <div className="flex flex-col items-center gap-8">
              {/* Logo and Description */}
              <div className="flex flex-col items-center gap-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/95484ffeaace17b0e40815c0aa78c80490650deb?width=168"
                  alt="Talent.ng Logo"
                  className="w-[84px] h-[64px]"
                />
                <div className="flex flex-col items-center gap-4">
                  <p className="text-[#667085] font-geist text-base font-medium leading-[120%] text-center w-[320px]">
                    We can help you reset your password using the email address
                    linked to your account.
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full"
              >
                {/* Password Input Section */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between px-[14px] py-[14px] rounded-3xl border border-[#D0D5DD] bg-white">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="flex-1 text-[#667085] font-geist text-base font-medium bg-transparent border-none outline-none placeholder:text-[#667085]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="ml-2"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_eye)">
                          <path
                            d="M2.28747 6.9825C2.25559 6.88729 2.24315 6.78664 2.25089 6.68654C2.25863 6.58643 2.28639 6.4889 2.33253 6.39972C2.37866 6.31055 2.44224 6.23154 2.51948 6.16739C2.59672 6.10324 2.68605 6.05525 2.78218 6.02627C2.87831 5.99729 2.97929 5.98791 3.07911 5.99868C3.17894 6.00945 3.27558 6.04016 3.36332 6.08898C3.45106 6.1378 3.5281 6.20373 3.58988 6.28288C3.65166 6.36203 3.69692 6.45278 3.72297 6.54974C5.28747 11.7892 12.7095 11.79 14.2755 6.55275C14.3035 6.45829 14.3499 6.37029 14.412 6.29377C14.4741 6.21725 14.5506 6.1537 14.6373 6.10676C14.7239 6.05982 14.8189 6.03041 14.917 6.0202C15.015 6.00998 15.114 6.01917 15.2085 6.04724C15.3029 6.07531 15.3909 6.12171 15.4674 6.18379C15.544 6.24587 15.6075 6.32242 15.6544 6.40905C15.7014 6.49569 15.7308 6.59072 15.741 6.68873C15.7512 6.78673 15.742 6.88579 15.714 6.98025C15.4411 7.91864 14.9783 8.79093 14.3542 9.54299L15.3105 10.5C15.4471 10.6414 15.5227 10.8309 15.521 11.0275C15.5193 11.2242 15.4404 11.4123 15.3013 11.5514C15.1623 11.6904 14.9742 11.7693 14.7775 11.771C14.5809 11.7727 14.3914 11.6971 14.25 11.5605L13.2667 10.5772C12.7361 10.9774 12.1499 11.298 11.5267 11.529L11.7945 12.5302C11.823 12.6263 11.8321 12.7271 11.821 12.8267C11.81 12.9262 11.7791 13.0226 11.7302 13.1101C11.6813 13.1975 11.6154 13.2743 11.5363 13.3358C11.4573 13.3974 11.3667 13.4425 11.2699 13.4684C11.1731 13.4944 11.0721 13.5007 10.9729 13.487C10.8736 13.4733 10.7781 13.4398 10.692 13.3886C10.6059 13.3373 10.531 13.2693 10.4716 13.188"
                            fill="#09244B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_eye">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>

                  {/* Password Requirements */}
                  <p className="text-black font-geist text-[13px] font-normal leading-[120%] text-center w-[320px]">
                    8 characters minimum, at least 1 uppercase letter and 1
                    number
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={!isPasswordValid}
                    className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Change password
                  </button>

                  <div className="text-center">
                    <span className="text-[#667085] font-geist text-base font-normal">
                      Already have an account?{" "}
                    </span>
                    <Link
                      to="/login"
                      className="text-[#0C111D] font-geist text-base font-bold underline hover:text-gray-700 transition-colors"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
