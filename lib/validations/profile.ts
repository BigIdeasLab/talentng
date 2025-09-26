import * as z from "zod";

export const profileSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name must not exceed 100 characters."),
  headline: z
    .string()
    .min(10, "Headline must be at least 10 characters.")
    .max(100, "Headline must not exceed 100 characters.")
    .optional()
    .or(z.literal("")),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters.")
    .max(1000, "Bio must not exceed 1000 characters.")
    .optional()
    .or(z.literal("")),
  skills: z.array(z.string()).optional(),
  workExperience: z.string().optional().or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  duration: z.string().optional().or(z.literal("")),
  description: z.string().optional().or(z.literal("")),
  talent: z.string().optional(),
  availability: z
    .enum(["full_time", "part_time", "contract", "unavailable"])
    .optional(),
  location: z.string().optional().or(z.literal("")),
  links: z.string().optional(), // Assuming JSON string validation happens on backend or later
  portfolioItems: z.array(z.string()).optional().or(z.literal([])), // Portfolio files are optional
  resumeUrl: z.string().url("Invalid URL format.").optional().or(z.literal("")),
  visibility: z.enum(["public", "private"]).optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
