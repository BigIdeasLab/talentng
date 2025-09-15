import React, { useState } from "react";

interface BasicInfoStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  isLoading: boolean;
}

export function BasicInfoStep({
  formData,
  updateFormData,
  onNext,
  isLoading,
}: BasicInfoStepProps) {
  const [fullnameError, setFullnameError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation for fullname
    if (
      !formData.fullname ||
      formData.fullname.length < 2 ||
      formData.fullname.length > 100
    ) {
      setFullnameError("Full name must be between 2 and 100 characters.");
      return;
    }

    setFullnameError(null); // Clear any previous error
    onNext();
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullname || ""}
            onChange={(e) => {
              updateFormData("fullname", e.target.value);
              if (fullnameError) setFullnameError(null); // Clear error on change
            }}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          {fullnameError && (
            <p className="text-red-500 text-sm mt-1">{fullnameError}</p>
          )}
        </div>

        {/* Talent Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Talent"
            value={formData.talent || ""}
            onChange={(e) => updateFormData("talent", e.target.value)}
            className="w-full h-12 px-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Bio Textarea */}
        <div className="relative">
          <textarea
            placeholder="Bio"
            value={formData.bio || ""}
            onChange={(e) => updateFormData("bio", e.target.value)}
            rows={4}
            className="w-full p-3.5 border border-gray-300 rounded-3xl bg-white text-gray-500 placeholder-gray-500 font-geist text-base font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Next Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-black text-white rounded-3xl font-geist text-base font-medium hover:bg-gray-900 transition-colors"
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}
