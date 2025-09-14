import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1008px] mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Toggle Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-black font-geist text-lg md:text-xl font-medium">
              For Recruiting
            </span>
            <div className="relative">
              <svg
                width="48"
                height="48"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 md:w-16 md:h-16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.666 16C14.4226 16 10.3529 17.6857 7.35231 20.6863C4.35172 23.6869 2.66602 27.7565 2.66602 32C2.66602 36.2435 4.35172 40.3131 7.35231 43.3137C10.3529 46.3143 14.4226 48 18.666 48H45.3327C49.5761 48 53.6458 46.3143 56.6464 43.3137C59.647 40.3131 61.3327 36.2435 61.3327 32C61.3327 27.7565 59.647 23.6869 56.6464 20.6863C53.6458 17.6857 49.5761 16 45.3327 16H18.666ZM18.666 42.6667C21.495 42.6667 24.2081 41.5429 26.2085 39.5425C28.2089 37.5421 29.3327 34.829 29.3327 32C29.3327 29.171 28.2089 26.4579 26.2085 24.4575C24.2081 22.4571 21.495 21.3333 18.666 21.3333C15.837 21.3333 13.1239 22.4571 11.1235 24.4575C9.12315 26.4579 7.99935 29.171 7.99935 32C7.99935 34.829 9.12315 37.5421 11.1235 39.5425C13.1239 41.5429 15.837 42.6667 18.666 42.6667Z"
                  fill="#FF563D"
                />
              </svg>
            </div>
          </div>
          <span className="text-gray-400 font-geist text-lg md:text-xl font-normal">
            For Freelancers
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-black text-center font-geist text-3xl md:text-4xl lg:text-[54px] font-medium leading-[120%] max-w-full">
              Unlock Your Potential with Talent.ng
            </h1>
            <p className="text-gray-500 text-center font-geist text-lg md:text-xl font-light leading-[160%] tracking-[0.2px] max-w-full">
              At Talent.ng 🇳🇬, we connect individuals with opportunities,
              helping you showcase your skills and collaborate with top
              independent creatives and clients.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center justify-between w-full max-w-[900px] p-3 md:p-4 rounded-[44px] border border-gray-300 bg-white shadow-[0_4px_8px_0_rgba(224,224,224,0.25)]">
            <input
              type="text"
              placeholder="How can I assist you today?"
              className="flex-1 text-gray-700 font-geist text-lg md:text-xl font-normal bg-transparent border-none outline-none placeholder:text-gray-700"
            />
            <button className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-3xl bg-brand-primary hover:bg-brand-primary/90 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 10.5003C2.00012 9.14485 2.32436 7.80912 2.94569 6.60451C3.56702 5.3999 4.46742 4.36135 5.57175 3.57549C6.67609 2.78963 7.95235 2.27926 9.29404 2.08696C10.6357 1.89466 12.004 2.026 13.2846 2.47003C14.5652 2.91406 15.7211 3.6579 16.6557 4.63949C17.5904 5.62108 18.2768 6.81196 18.6576 8.11277C19.0384 9.41358 19.1026 10.7866 18.8449 12.1173C18.5872 13.448 18.015 14.6977 17.176 15.7623L20.828 19.4143C21.0102 19.6029 21.111 19.8555 21.1087 20.1177C21.1064 20.3799 21.0012 20.6307 20.8158 20.8161C20.6304 21.0015 20.3796 21.1066 20.1174 21.1089C19.8552 21.1112 19.6026 21.0104 19.414 20.8283L15.762 17.1763C14.5086 18.1642 13.0024 18.7794 11.4157 18.9514C9.82905 19.1233 8.22602 18.8451 6.79009 18.1485C5.35417 17.4519 4.14336 16.3651 3.29623 15.0126C2.44911 13.66 1.99989 12.0962 2 10.5003ZM10.5 6.00025C10.2348 6.00025 9.98043 6.10561 9.79289 6.29315C9.60536 6.48068 9.5 6.73504 9.5 7.00025C9.5 7.26547 9.60536 7.51982 9.79289 7.70736C9.98043 7.8949 10.2348 8.00025 10.5 8.00025C11.163 8.00025 11.7989 8.26365 12.2678 8.73249C12.7366 9.20133 13 9.83721 13 10.5003C13 10.7655 13.1054 11.0198 13.2929 11.2074C13.4804 11.3949 13.7348 11.5003 14 11.5003C14.2652 11.5003 14.5196 11.3949 14.7071 11.2074C14.8946 11.0198 15 10.7655 15 10.5003C15 9.30678 14.5259 8.16219 13.682 7.31827C12.8381 6.47436 11.6935 6.00025 10.5 6.00025Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Suggested Tags */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-black text-center font-geist text-base font-normal">
            Suggested:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="px-2 py-2 rounded-2xl border border-gray-300 bg-gray-50 text-black text-center font-geist text-sm md:text-base font-normal">
              Product Designer
            </span>
            <span className="px-2 py-2 rounded-2xl border border-gray-300 bg-gray-50 text-black text-center font-geist text-sm md:text-base font-normal">
              Website Designs
            </span>
            <span className="px-2 py-2 rounded-2xl border border-gray-300 bg-gray-50 text-black text-center font-geist text-sm md:text-base font-normal">
              Brand Designers
            </span>
            <span className="px-2 py-2 rounded-2xl border border-gray-300 bg-gray-50 text-black text-center font-geist text-sm md:text-base font-normal">
              Website Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
