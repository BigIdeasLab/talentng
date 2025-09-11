import React, { useState } from "react";

interface SkillsExperienceStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

export function SkillsExperienceStep({ formData, updateFormData, onNext }: SkillsExperienceStepProps) {
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPortfolioFile(file);
      updateFormData("portfolio", file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Skills Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Skills"
            value={formData.skills}
            onChange={(e) => updateFormData("skills", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Job Title Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={(e) => updateFormData("jobTitle", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Company Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={(e) => updateFormData("company", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Duration Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Duration"
            value={formData.duration}
            onChange={(e) => updateFormData("duration", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Work Experience Dropdown */}
        <div className="relative">
          <select
            value={formData.workExperience}
            onChange={(e) => updateFormData("workExperience", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
          >
            <option value="">Work Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
          <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_dropdown)">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.53026 12.2803C9.38962 12.4209 9.19889 12.4999 9.00001 12.4999C8.80114 12.4999 8.61041 12.4209 8.46976 12.2803L4.22701 8.03751C4.15538 7.96833 4.09824 7.88557 4.05894 7.79407C4.01963 7.70256 3.99894 7.60415 3.99808 7.50456C3.99721 7.40498 4.01619 7.30622 4.0539 7.21405C4.09161 7.12188 4.1473 7.03814 4.21772 6.96772C4.28814 6.8973 4.37188 6.84161 4.46405 6.8039C4.55622 6.76619 4.65498 6.74721 4.75456 6.74808C4.85415 6.74894 4.95256 6.76963 5.04407 6.80894C5.13557 6.84824 5.21833 6.90538 5.28751 6.97701L9.00001 10.6895L12.7125 6.97701C12.854 6.84039 13.0434 6.7648 13.2401 6.76651C13.4367 6.76822 13.6248 6.84709 13.7639 6.98615C13.9029 7.1252 13.9818 7.31331 13.9835 7.50996C13.9852 7.70661 13.9096 7.89606 13.773 8.03751L9.53026 12.2803Z" fill="#09244B"/>
              </g>
              <defs>
                <clipPath id="clip0_dropdown">
                  <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Description Textarea */}
        <div className="relative">
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
            rows={4}
            className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Portfolio Upload */}
        <div className="space-y-6">
          <div className="relative">
            <input
              type="file"
              id="portfolio-upload"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <div className="flex items-center justify-center py-9 border-2 border-dashed border-black rounded-[2rem] bg-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_upload)">
                    <path d="M20 3.5C20.5304 3.5 21.0392 3.71071 21.4142 4.08579C21.7893 4.46086 22 4.96957 22 5.5V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0392 21.2893 20.5304 21.5 20 21.5H4.00001C3.46958 21.5 2.96087 21.2893 2.5858 20.9142C2.21073 20.5391 2.00001 20.0304 2.00001 19.5V13.5C2.00001 13.2348 2.10537 12.9804 2.29291 12.7929C2.48044 12.6054 2.7348 12.5 3.00001 12.5C3.26523 12.5 3.51958 12.6054 3.70712 12.7929C3.89466 12.9804 4.00001 13.2348 4.00001 13.5V15.6L8.99501 10.606C9.11109 10.4899 9.2489 10.3978 9.40058 10.335C9.55226 10.2721 9.71483 10.2398 9.87901 10.2398C10.0432 10.2398 10.2058 10.2721 10.3574 10.335C10.5091 10.3978 10.6469 10.4899 10.763 10.606L14.828 14.672L16.066 13.434C16.1821 13.3179 16.3199 13.2258 16.4716 13.1629C16.6233 13.1001 16.7858 13.0678 16.95 13.0678C17.1142 13.0678 17.2768 13.1001 17.4284 13.1629C17.5801 13.2258 17.7179 13.3179 17.834 13.434L20 15.601V5.5H12C11.7348 5.5 11.4804 5.39464 11.2929 5.20711C11.1054 5.01957 11 4.76522 11 4.5C11 4.23478 11.1054 3.98043 11.2929 3.79289C11.4804 3.60536 11.7348 3.5 12 3.5H20Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_upload">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-sm font-medium text-black font-geist">
                  {portfolioFile ? portfolioFile.name : "Click to upload Portfolio"}
                </span>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-black text-white rounded-3xl font-geist text-base font-medium hover:bg-gray-900 transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
