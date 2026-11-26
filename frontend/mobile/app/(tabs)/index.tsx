import { ScrollView, View, Text, Pressable } from "react-native";
import { ResponsiveContainer } from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Header } from "@/components/Header/Header";
import { CategoryPill } from "@/components/CategoryPill/CategoryPill";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import { Sparkles, ArrowRight } from "lucide-react-native";

export default function HomeScreen() {
  const { categories, selectedCategory, setSelectedCategory, courses } = useCourses();

  return (
    <ResponsiveContainer>
      <Header title="Learning Hub" subtitle="Welcome back" />

      <ScrollView
        className="flex-1 px-4 sm:px-5 pt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Editorial Hero Banner — Vodafone Style */}
        <View className="bg-ink rounded-lg p-5 sm:p-6 mb-5 shadow-sm overflow-hidden">
          <View className="flex-row items-center gap-1.5 mb-2">
            <Sparkles size={14} color="#E60000" />
            <Text className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              Featured Special
            </Text>
          </View>
          <Text className="text-xl sm:text-2xl font-black text-white leading-tight mb-2 tracking-tight">
            ACCELERATE YOUR TECH CAREER
          </Text>
          <Text className="text-xs sm:text-sm font-normal text-mute mb-4 leading-relaxed">
            Gain in-demand skills with industry-standard curriculum and accredited certificates.
          </Text>
          <Pressable className="bg-primary self-start px-5 py-2.5 rounded-full flex-row items-center gap-2 active:bg-primary-dark">
            <Text className="text-xs font-extrabold text-white uppercase tracking-wider">
              Start Learning Free
            </Text>
            <ArrowRight size={14} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Categories Strip */}
        <View className="mb-4">
          <Text className="text-xs font-bold uppercase tracking-wider text-body mb-2.5">
            Filter by Category
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                isActive={selectedCategory === cat}
                onPress={() => setSelectedCategory(cat)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Course Feed Section Header */}
        <View className="flex-row items-center justify-between mt-2 mb-3">
          <Text className="text-base sm:text-lg font-extrabold text-ink tracking-tight">
            POPULAR COURSES
          </Text>
          <Text className="text-xs font-bold text-primary uppercase tracking-wider">
            View All ({courses.length})
          </Text>
        </View>

        {/* Course Cards List */}
        <View>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </ResponsiveContainer>
  );
}

