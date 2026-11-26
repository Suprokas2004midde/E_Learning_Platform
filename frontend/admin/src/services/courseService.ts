import { api } from "./api";
import { CourseFormData } from "@/components/CourseForm/CourseForm";

export interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnailUrl?: string;
  isPublished: boolean;
  enrollmentsCount?: number;
}

const MOCK_COURSES: Course[] = [
  {
    _id: "1",
    title: "Master React Native & Expo",
    description: "Build production mobile apps with TypeScript & Expo Router",
    category: "Mobile Development",
    price: 499,
    thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    isPublished: true,
    enrollmentsCount: 38,
  },
  {
    _id: "2",
    title: "Complete MERN Backend with MongoDB",
    description: "Learn Express, Mongoose, JWT and Cloudinary video streaming",
    category: "Development",
    price: 0,
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    isPublished: true,
    enrollmentsCount: 84,
  },
];

export const courseService = {
  async getMyCourses(): Promise<Course[]> {
    try {
      const response = await api.get("/api/seller/courses");
      return response.data?.data || MOCK_COURSES;
    } catch {
      return MOCK_COURSES;
    }
  },

  async createCourse(data: CourseFormData): Promise<Course> {
    try {
      const response = await api.post("/api/seller/courses", data);
      return response.data?.data;
    } catch {
      return {
        _id: String(Date.now()),
        ...data,
        isPublished: true,
        enrollmentsCount: 0,
      };
    }
  },

  async getAnalytics() {
    try {
      const response = await api.get("/api/seller/analytics");
      return response.data?.data || { totalCourses: 2, totalStudents: 122, totalEarnings: 18962 };
    } catch {
      return { totalCourses: 2, totalStudents: 122, totalEarnings: 18962 };
    }
  },
};
