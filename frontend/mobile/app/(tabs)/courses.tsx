import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header/Header";

export default function CoursesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
      <Header title="All Courses" subtitle="Browse by topic" />
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-base font-medium text-slate-500 text-center">
          Course catalog & search will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

