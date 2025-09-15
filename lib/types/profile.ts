export type TalentProfile = {
  id: string;
  userId: string;
  headline: string;
  bio: string;
  talent: string;
  skills: string[];
  workExperience: string;
  company: string;
  duration: string;
  description: string;
  availability: "full_time" | "part_time" | "freelance" | "";
  location: string;
  links: {
    github?: string;
    linkedin?: string;
  };
  resumeUrl: string;
  visibility: "public" | "private";
  isFeatured: boolean;
  featuredUntil: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  fullname: string;
  username: string;
  coverImageUrl: string | null;
  profileImageUrl: string | null;
  portfolioItems: any[]; // The user did not specify the type for this
};
