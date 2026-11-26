import { View, Text, ScrollView, Pressable } from "react-native";
import { ResponsiveContainer } from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Header } from "@/components/Header/Header";
import { PlayCircle, ArrowRight } from "lucide-react-native";

export default function MyLearningScreen() {
  const ongoingCourses = [
    {
      id: "1",
      title: "React Native & Expo Mastery",
      progress: 68,
      lastLesson: "Lesson 7: Navigation & Expo Router",
    },
    {
      id: "2",
      title: "Full-Stack TypeScript with Hono",
      progress: 35,
      lastLesson: "Lesson 3: Middleware & JWT",
    },
  ];

  return (
    <ResponsiveContainer>
      <Header title="In Progress" subtitle="Resume Training" />

      <ScrollView
        className="flex-1 px-4 sm:px-5 pt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <Text className="text-xs font-bold uppercase tracking-wider text-body mb-3">
          Continue Learning
        </Text>

        <View>
          {ongoingCourses.map((item) => (
            <Pressable
              key={item.id}
              className="bg-white rounded-lg p-4 sm:p-5 mb-3.5 border border-canvas-soft shadow-sm active:opacity-95"
            >
              <View className="flex-row items-center justify-between mb-2">
                <View className="bg-primary/10 px-2.5 py-0.5 rounded-full">
                  <Text className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                    ACTIVE MODULE
                  </Text>
                </View>
                <Text className="text-xs font-bold text-ink">{item.progress}%</Text>
              </View>

              <Text className="text-sm sm:text-base font-bold text-ink mb-1">
                {item.title}
              </Text>
              <Text className="text-xs font-medium text-body mb-3">
                {item.lastLesson}
              </Text>

              {/* Progress Bar */}
              <View className="h-1.5 w-full bg-canvas-soft rounded-full overflow-hidden mb-3">
                <View
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${item.progress}%` }}
                />
              </View>

              <View className="flex-row items-center justify-between pt-2 border-t border-canvas-soft">
                <View className="flex-row items-center gap-1.5">
                  <PlayCircle size={15} color="#E60000" />
                  <Text className="text-xs font-bold text-primary uppercase tracking-wider">
                    Resume Video
                  </Text>
                </View>
                <ArrowRight size={14} color="#25282B" />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </ResponsiveContainer>
  );
}

