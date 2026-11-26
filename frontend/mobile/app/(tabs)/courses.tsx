import { View, Text, ScrollView, TextInput } from "react-native";
import { ResponsiveContainer } from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Header } from "@/components/Header/Header";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import { Search } from "lucide-react-native";

export default function CoursesScreen() {
  const { courses } = useCourses();

  return (
    <ResponsiveContainer>
      <Header title="Explore Courses" subtitle="All Programs" />

      <ScrollView
        className="flex-1 px-4 sm:px-5 pt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Search Input — Vodafone Styled */}
        <View className="flex-row items-center bg-canvas-soft rounded-full px-4 py-2.5 sm:py-3 mb-4 border border-canvas-soft">
          <Search size={18} color="#7E7E7E" />
          <TextInput
            placeholder="Search courses, instructors, topics..."
            placeholderTextColor="#7E7E7E"
            className="flex-1 ml-2.5 text-sm text-ink font-medium"
          />
        </View>

        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-xs font-extrabold text-ink uppercase tracking-wider">
            All Curriculum ({courses.length})
          </Text>
        </View>

        <View>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </ResponsiveContainer>
  );
}

