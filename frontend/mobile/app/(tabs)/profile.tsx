import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header/Header";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
      <Header title="Profile" subtitle="Account & settings" />
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-base font-medium text-slate-500 text-center">
          Student profile, certificates, and settings will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

