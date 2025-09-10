import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                    Welcome back
                  </h1>
                  <p className="text-gray-500 font-geist text-base font-medium leading-[120%] text-center w-full">
                    Sign in to your Talent.ng account to continue.
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white">
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-gray-500 font-geist text-base font-medium bg-transparent border-none outline-none placeholder:text-gray-500"
                  />
                </div>

                <div className="flex items-center justify-between px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 text-gray-500 font-geist text-base font-medium bg-transparent border-none outline-none placeholder:text-gray-500"
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
                      <g clipPath="url(#clip0_106_3636)">
                        <path
                          d="M2.28747 6.9825C2.25559 6.88729 2.24315 6.78664 2.25089 6.68654C2.25863 6.58643 2.28639 6.4889 2.33253 6.39972C2.37866 6.31055 2.44224 6.23154 2.51948 6.16739C2.59672 6.10324 2.68605 6.05525 2.78218 6.02627C2.87831 5.99729 2.97929 5.98791 3.07911 5.99868C3.17894 6.00945 3.27558 6.04016 3.36332 6.08898C3.45106 6.1378 3.5281 6.20373 3.58988 6.28288C3.65166 6.36203 3.69692 6.45278 3.72297 6.54974C5.28747 11.7892 12.7095 11.79 14.2755 6.55275C14.3035 6.45829 14.3499 6.37029 14.412 6.29377C14.4741 6.21725 14.5506 6.1537 14.6373 6.10676C14.7239 6.05982 14.8189 6.03041 14.917 6.0202C15.015 6.00998 15.114 6.01917 15.2085 6.04724C15.3029 6.07531 15.3909 6.12171 15.4674 6.18379C15.544 6.24587 15.6075 6.32242 15.6544 6.40905C15.7014 6.49569 15.7308 6.59072 15.741 6.68873C15.7512 6.78673 15.742 6.88579 15.714 6.98025C15.4411 7.91864 14.9783 8.79093 14.3542 9.54299L15.3105 10.5C15.4471 10.6414 15.5227 10.8309 15.521 11.0275C15.5193 11.2242 15.4404 11.4123 15.3013 11.5514C15.1623 11.6904 14.9742 11.7693 14.7775 11.771C14.5809 11.7727 14.3914 11.6971 14.25 11.5605L13.2667 10.5772C12.7361 10.9774 12.1499 11.298 11.5267 11.529L11.7945 12.5302C11.823 12.6263 11.8321 12.7271 11.821 12.8267C11.81 12.9262 11.7791 13.0226 11.7302 13.1101C11.6813 13.1975 11.6154 13.2743 11.5363 13.3358C11.4573 13.3974 11.3667 13.4425 11.2699 13.4684C11.1731 13.4944 11.0721 13.5007 10.9729 13.487C10.8736 13.4733 10.7781 13.4398 10.692 13.3886C10.6059 13.3373 10.531 13.2693 10.4716 13.1887C10.4122 13.108 10.3696 13.0162 10.3462 12.9187L10.0732 11.901C9.36297 12.006 8.63697 12.006 7.92672 11.901L7.65372 12.9187C7.63038 13.0162 7.58776 13.108 7.52836 13.1887C7.46896 13.2693 7.394 13.3373 7.3079 13.3886C7.2218 13.4398 7.1263 13.4733 7.02705 13.487C6.9278 13.5007 6.8268 13.4944 6.73003 13.4684C6.63325 13.4425 6.54266 13.3974 6.4636 13.3358C6.38454 13.2743 6.31862 13.1975 6.26972 13.1101C6.22082 13.0226 6.18995 12.9262 6.17891 12.8267C6.16788 12.7271 6.17691 12.6263 6.20547 12.5302L6.47322 11.529C5.85001 11.2977 5.26384 10.9769 4.73322 10.5765L3.75072 11.5605C3.61009 11.7013 3.41927 11.7805 3.22025 11.7807C3.02123 11.7808 2.8303 11.7019 2.68947 11.5612C2.54864 11.4206 2.46944 11.2298 2.4693 11.0308C2.46916 10.8318 2.54809 10.6408 2.68872 10.5L3.64497 9.54375C3.05697 8.84175 2.58747 7.98824 2.28597 6.98324L2.28747 6.9825Z"
                          fill="#09244B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_3636">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <Link
                    to="/forgot-password"
                    className="text-gray-500 font-geist text-sm font-medium hover:text-gray-700 transition-colors underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl bg-black text-white font-geist text-base font-medium hover:bg-gray-800 transition-colors"
                >
                  Sign in
                </Link>
              </div>

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

            {/* Google Sign In */}
            <button className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white hover:bg-gray-50 transition-colors w-full">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1713 8.36791H17.5V8.33332H10V11.6667H14.7096C14.0225 13.6071 12.1763 15 10 15C7.23877 15 5.00002 12.7612 5.00002 9.99999C5.00002 7.23874 7.23877 4.99999 10 4.99999C11.2746 4.99999 12.4342 5.48082 13.3171 6.26624L15.6742 3.90916C14.1859 2.52207 12.195 1.66666 10 1.66666C5.39794 1.66666 1.66669 5.39791 1.66669 9.99999C1.66669 14.6021 5.39794 18.3333 10 18.3333C14.6021 18.3333 18.3334 14.6021 18.3334 9.99999C18.3334 9.44124 18.2759 8.89582 18.1713 8.36791Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M2.62744 6.12124L5.36536 8.12916C6.10619 6.29499 7.90036 4.99999 9.99994 4.99999C11.2745 4.99999 12.4341 5.48082 13.317 6.26624L15.6741 3.90916C14.1858 2.52207 12.1949 1.66666 9.99994 1.66666C6.79911 1.66666 4.02327 3.47374 2.62744 6.12124Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M10 18.3336C12.1525 18.3336 14.1084 17.5099 15.5871 16.1703L13.008 13.9878C12.1433 14.6457 11.0865 15.0015 10 15.0003C7.83255 15.0003 5.99213 13.6182 5.2988 11.6895L2.5813 13.7832C3.96047 16.482 6.7613 18.3336 10 18.3336Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M18.1712 8.36793H17.5V8.33334H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1696C15.4046 16.3354 18.3333 14.1667 18.3333 10C18.3333 9.44126 18.2758 9.39584 18.1712 8.36793Z"
                    fill="#1976D2"
                  />
                </svg>
                <span className="text-gray-950 font-geist text-base font-medium">
                  Continue with Google
                </span>
              </div>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center w-full">
            <span className="text-gray-500 font-geist text-base font-normal">
              Don't have an account?{" "}
            </span>
            <Link
              to="/signup"
              className="text-gray-950 font-geist text-base font-semibold underline hover:text-gray-700 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center w-full">
          <span className="text-gray-600 font-geist text-sm font-normal">
            By signing in, you agree to our{" "}
          </span>
          <span className="text-gray-950 font-geist text-sm font-semibold">
            Terms and Conditions.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
