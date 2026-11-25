import { View, Text, Pressable } from "react-native";
import { Clock, Star } from "lucide-react-native";
import type { CourseItem } from "@/hooks/useCourses";

interface CourseCardProps {
  course: CourseItem;
  onPress?: () => void;
}

export function CourseCard({ course, onPress }: CourseCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mb-3 border border-slate-100 shadow-sm active:opacity-90"
    >
      <View className="flex-row items-center justify-between mb-2">
        <View className="bg-indigo-50 px-2.5 py-1 rounded-md">
          <Text className="text-xs font-semibold text-indigo-600">
            {course.category}
          </Text>
        </View>
        <Text className="text-sm font-bold text-slate-900">
          {course.price === 0 ? "Free" : `₹${course.price}`}
        </Text>
      </View>

      <Text className="text-base font-bold text-slate-900 mb-1">
        {course.title}
      </Text>
      <Text className="text-xs text-slate-500 mb-3">
        By {course.instructor}
      </Text>

      <View className="flex-row items-center gap-4 pt-2 border-t border-slate-100">
        <View className="flex-row items-center gap-1">
          <Clock size={14} color="#64748B" />
          <Text className="text-xs text-slate-500">{course.duration}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Star size={14} color="#F59E0B" fill="#F59E0B" />
          <Text className="text-xs font-medium text-slate-700">
            {course.rating}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
