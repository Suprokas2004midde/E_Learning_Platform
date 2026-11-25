import { View, Text, Pressable } from "react-native";
import { Bell } from "lucide-react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 pt-4 pb-3 bg-white border-b border-slate-100">
      <View>
        {subtitle ? (
          <Text className="text-xs font-medium text-slate-500">{subtitle}</Text>
        ) : null}
        <Text className="text-xl font-bold text-slate-900">{title}</Text>
      </View>
      <Pressable className="p-2 rounded-full bg-slate-100 active:bg-slate-200">
        <Bell size={20} color="#0F172A" />
      </Pressable>
    </View>
  );
}

