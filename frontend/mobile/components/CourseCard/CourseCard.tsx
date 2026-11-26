import { View, Text, Pressable } from "react-native";
import { Clock, Star, ArrowRight } from "lucide-react-native";
import type { CourseItem } from "@/hooks/useCourses";

interface CourseCardProps {
  course: CourseItem;
  onPress?: () => void;
}

export function CourseCard({ course, onPress }: CourseCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-lg p-5 mb-4 border border-canvas-soft shadow-sm active:opacity-95"
    >
      {/* Category Tag & Price */}
      <View className="flex-row items-center justify-between mb-3">
        <View className="bg-canvas-soft px-3 py-1 rounded-full">
          <Text className="text-[11px] font-bold uppercase tracking-wider text-ink">
            {course.category}
          </Text>
        </View>
        <Text className="text-base font-extrabold text-primary">
          {course.price === 0 ? "FREE" : `₹${course.price}`}
        </Text>
      </View>

      {/* Course Title */}
      <Text className="text-lg font-bold text-ink mb-1.5 leading-snug">
        {course.title}
      </Text>
      <Text className="text-sm font-medium text-body mb-4">
        Instructor: {course.instructor}
      </Text>

      {/* Footer Info & Pill Action */}
      <View className="flex-row items-center justify-between pt-3 border-t border-canvas-soft">
        <View className="flex-row items-center gap-4">
          <View className="flex-row items-center gap-1.5">
            <Clock size={15} color="#7E7E7E" />
            <Text className="text-xs font-semibold text-body">{course.duration}</Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <Star size={15} color="#E60000" fill="#E60000" />
            <Text className="text-xs font-bold text-ink">
              {course.rating}
            </Text>
          </View>
        </View>

        <View className="w-8 h-8 rounded-full bg-canvas-soft items-center justify-center">
          <ArrowRight size={16} color="#E60000" />
        </View>
      </View>
    </Pressable>
  );
}
