import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header/Header";
import { CategoryPill } from "@/components/CategoryPill/CategoryPill";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { useCourses } from "@/hooks/useCourses";

export default function HomeScreen() {
  const { categories, selectedCategory, setSelectedCategory, courses } = useCourses();

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
      <Header title="Discover" subtitle="Welcome back, Student" />

      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
          {categories.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              isActive={selectedCategory === cat}
              onPress={() => setSelectedCategory(cat)}
            />
          ))}
        </ScrollView>

        <Text className="text-lg font-bold text-slate-900 mb-3">
          Featured Courses
        </Text>

        <View className="pb-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

