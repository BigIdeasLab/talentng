import { useLocation, useNavigate } from "react-router-dom";

export function DashboardHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isOpportunitiesList = pathname === "/opportunities";
  const isOpportunitiesDetail = pathname.startsWith("/opportunities/") && pathname !== "/opportunities";

  const title = isOpportunitiesList
    ? ""
    : isOpportunitiesDetail
    ? "Opportunities"
    : pathname.startsWith("/complete-profile")
    ? "Complete Profile"
    : pathname.startsWith("/my-profile") || pathname.startsWith("/profile")
      ? "My Profile"
      : pathname.startsWith("/dashboard")
        ? "Dashboard"
        : pathname.startsWith("/login")
          ? "Login"
          : pathname.startsWith("/signup")
            ? "Sign Up"
            : "Dashboard";

  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-4">
            {/* Mobile menu button or back button on opportunities detail */}
            {isOpportunitiesDetail ? (
              <button onClick={() => navigate('/opportunities')} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_back)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.9399 13.0599C7.659 12.7787 7.50122 12.3974 7.50122 11.9999C7.50122 11.6024 7.659 11.2212 7.9399 10.9399L13.5959 5.2819C13.8773 5.00064 14.2589 4.84268 14.6568 4.84277C14.8538 4.84282 15.0488 4.88167 15.2308 4.9571C15.4128 5.03253 15.5781 5.14307 15.7174 5.2824C15.8567 5.42173 15.9671 5.58713 16.0425 5.76915C16.1178 5.95117 16.1566 6.14625 16.1565 6.34325C16.1565 6.54025 16.1176 6.73531 16.0422 6.9173C15.9668 7.09929 15.8562 7.26463 15.7169 7.4039L11.1219 11.9999L15.7179 16.5959C15.8612 16.7342 15.9756 16.8997 16.0543 17.0826C16.133 17.2656 16.1744 17.4624 16.1763 17.6616C16.1781 17.8607 16.1402 18.0583 16.0649 18.2427C15.9896 18.427 15.8783 18.5946 15.7375 18.7355C15.5967 18.8764 15.4293 18.9878 15.245 19.0633C15.0607 19.1389 14.8632 19.1769 14.664 19.1753C14.4648 19.1736 14.268 19.1323 14.085 19.0538C13.9019 18.9753 13.7363 18.8611 13.5979 18.7179L7.9379 13.0599H7.9399Z" fill="#09244B"/>
                  </g>
                </svg>
              </button>
            ) : (
              <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="#09244B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {title ? (
              <h2 className="text-xl sm:text-2xl font-medium text-black font-geist">
                {title}
              </h2>
            ) : null}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Notification */}
            <div className="p-2.5 bg-gray-100 rounded-3xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_106_4317)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9V12.764L20.822 16.408C20.9059 16.5757 20.9455 16.7621 20.9371 16.9494C20.9286 17.1368 20.8724 17.3188 20.7739 17.4783C20.6753 17.6379 20.5375 17.7695 20.3737 17.8608C20.2099 17.9521 20.0255 18 19.838 18H15.874C15.6516 18.8582 15.1504 19.6183 14.4493 20.1609C13.7481 20.7035 12.8866 20.9979 12 20.9979C11.1134 20.9979 10.2519 20.7035 9.55074 20.1609C8.84957 19.6183 8.34844 18.8582 8.126 18H4.162C3.97448 18 3.79006 17.9521 3.62627 17.8608C3.46247 17.7695 3.32474 17.6379 3.22614 17.4783C3.12755 17.3188 3.07137 17.1368 3.06295 16.9494C3.05452 16.7621 3.09413 16.5757 3.178 16.408L5 12.764V9ZM10.268 18C10.4435 18.304 10.696 18.5565 11 18.732C11.3041 18.9075 11.6489 18.9999 12 18.9999C12.3511 18.9999 12.6959 18.9075 13 18.732C13.304 18.5565 13.5565 18.304 13.732 18H10.268ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9V12.764C6.99998 13.0743 6.92774 13.3804 6.789 13.658L5.619 16H18.382L17.212 13.658C17.0729 13.3805 17.0004 13.0744 17 12.764V9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4Z"
                    fill="#09244B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_106_4317">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* User Avatar */}
            <div className="relative">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-black font-geist">
                  P
                </span>
              </div>

              {/* Dropdown Indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-25 border border-gray-50 rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_106_4324)">
                    <rect width="16" height="16" rx="8" fill="#FCFCFD" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.64333 6.86197C5.76835 6.73699 5.93789 6.66678 6.11467 6.66678C6.29144 6.66678 6.46098 6.73699 6.586 6.86197L8 8.27597L9.414 6.86197C9.539 6.73688 9.70858 6.66657 9.88543 6.6665C10.0623 6.66644 10.2319 6.73663 10.357 6.86164C10.4821 6.98664 10.5524 7.15622 10.5525 7.33307C10.5525 7.50992 10.4823 7.67954 10.3573 7.80464L8.47133 9.69064C8.34631 9.81562 8.17677 9.88583 8 9.88583C7.82322 9.88583 7.65368 9.81562 7.52867 9.69064L5.64333 7.80464C5.51835 7.67962 5.44814 7.51008 5.44814 7.33331C5.44814 7.15653 5.51835 6.98699 5.64333 6.86197Z"
                      fill="#09244B"
                    />
                  </g>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="15"
                    height="15"
                    rx="7.5"
                    stroke="#F9FAFB"
                  />
                  <defs>
                    <clipPath id="clip0_106_4324">
                      <rect width="16" height="16" rx="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-100"></div>
      </div>
    </header>
  );
}
