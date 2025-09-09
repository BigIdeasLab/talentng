import React, { useState } from "react";

interface BasicInfoStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

export function BasicInfoStep({ formData, updateFormData, onNext }: BasicInfoStepProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
        updateFormData("profileImage", file);
      };
      reader.readAsDataURL(file);
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
        {/* Profile Image Upload */}
        <div className="relative">
          <input
            type="file"
            id="profile-image-upload"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
          />
          <div className="relative w-16 h-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_profile_upload)">
                    <path d="M20 3C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20ZM20 5H4V19H4.929L14.237 9.692C14.3531 9.57589 14.4909 9.48379 14.6426 9.42095C14.7942 9.35811 14.9568 9.32577 15.121 9.32577C15.2852 9.32577 15.4478 9.35811 15.5994 9.42095C15.7511 9.48379 15.8889 9.57589 16.005 9.692L20 13.686V5ZM7.5 7C7.89782 7 8.27936 7.15804 8.56066 7.43934C8.84196 7.72064 9 8.10218 9 8.5C9 8.89782 8.84196 9.27936 8.56066 9.56066C8.27936 9.84196 7.89782 10 7.5 10C7.10218 10 6.72064 9.84196 6.43934 9.56066C6.15804 9.27936 6 8.89782 6 8.5C6 8.10218 6.15804 7.72064 6.43934 7.43934C6.72064 7.15804 7.10218 7 7.5 7Z" fill="#09244B"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_profile_upload">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
            
            {/* Edit Button */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center cursor-pointer">
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_edit)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.88682 1.70813C9.63678 1.45817 9.29771 1.31775 8.94415 1.31775C8.5906 1.31775 8.25152 1.45817 8.00149 1.70813L7.68726 2.0228L9.88726 4.2228L10.201 3.90858C10.3249 3.78476 10.4231 3.63777 10.4901 3.47598C10.5572 3.3142 10.5916 3.1408 10.5916 2.96569C10.5916 2.79057 10.5572 2.61717 10.4901 2.45539C10.4231 2.29361 10.3249 2.14661 10.201 2.0228L9.88682 1.70813ZM9.25838 4.85124L7.05838 2.65124L3.01838 6.69169C2.92997 6.78011 2.86821 6.89161 2.84015 7.01346L2.38282 8.99346C2.36578 9.06697 2.36773 9.1436 2.3885 9.21615C2.40926 9.28869 2.44816 9.35475 2.50151 9.4081C2.55487 9.46146 2.62093 9.50035 2.69347 9.52112C2.76601 9.54188 2.84265 9.54384 2.91615 9.5268L4.8966 9.06991C5.01829 9.04178 5.12963 8.98002 5.21793 8.89169L9.25838 4.85124Z" fill="#09244B"/>
                </g>
                <defs>
                  <clipPath id="clip0_edit">
                    <rect width="10.6667" height="10.6667" fill="white" transform="translate(0.939697 0.303345)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Full Name Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName || ""}
            onChange={(e) => updateFormData("fullName", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Short Bio Textarea */}
        <div className="relative">
          <textarea
            placeholder="Short Bio"
            value={formData.shortBio || ""}
            onChange={(e) => updateFormData("shortBio", e.target.value)}
            rows={4}
            className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Next Button */}
        <button
          type="submit"
          className="w-full py-3.5 bg-black text-white rounded-3xl font-geist text-base font-medium hover:bg-gray-900 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  );
}
