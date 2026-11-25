import { z } from "zod";

export const UserRoleSchema = z.enum(["STUDENT", "ADMIN"]);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const RegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export type RegisterInput = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
export type LoginInput = z.infer<typeof LoginSchema>;

export const CourseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category is required"),
  thumbnailUrl: z.string().url("Valid thumbnail URL is required").optional(),
  price: z.number().min(0).default(0),
  isPublished: z.boolean().default(false),
});
export type CourseInput = z.infer<typeof CourseSchema>;

export const LessonSchema = z.object({
  courseId: z.string().min(1, "Course ID is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  videoUrl: z.string().url("Valid video URL is required"),
  durationSeconds: z.number().int().min(0).default(0),
  order: z.number().int().min(0).default(0),
  isFreePreview: z.boolean().default(false),
});
export type LessonInput = z.infer<typeof LessonSchema>;

