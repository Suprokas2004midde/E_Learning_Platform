import { useState, useMemo } from "react";

export interface CourseItem {
  id: string;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  rating: number;
  price: number;
}

const MOCK_COURSES: CourseItem[] = [
  {
    id: "1",
    title: "React Native & Expo Mastery",
    instructor: "Anirban Das",
    category: "Mobile",
    duration: "6h 20m",
    rating: 4.8,
    price: 0,
  },
  {
    id: "2",
    title: "Full-Stack TypeScript with Hono",
    instructor: "Suprokas Midde",
    category: "Backend",
    duration: "4h 45m",
    rating: 4.9,
    price: 0,
  },
  {
    id: "3",
    title: "MongoDB & Aggregation Pipelines",
    instructor: "Team Edu",
    category: "Database",
    duration: "3h 30m",
    rating: 4.7,
    price: 499,
  },
];

export const CATEGORIES = ["All", "Mobile", "Backend", "Database", "UI/UX"];

export function useCourses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") return MOCK_COURSES;
    return MOCK_COURSES.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return {
    categories: CATEGORIES,
    selectedCategory,
    setSelectedCategory,
    courses: filteredCourses,
  };
}

