import { View, Text, Pressable } from "react-native";
import { Bell } from "lucide-react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
}

export function Header({ title, subtitle, rightAction }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 pt-3 pb-3 bg-white border-b border-canvas-soft">
      <View className="flex-1 mr-3">
        {subtitle ? (
          <Text className="text-xs font-bold uppercase tracking-wider text-primary mb-0.5">
            {subtitle}
          </Text>
        ) : null}
        <Text className="text-2xl font-extrabold text-ink tracking-tight">
          {title}
        </Text>
      </View>
      {rightAction ? (
        rightAction
      ) : (
        <Pressable className="w-10 h-10 rounded-full bg-canvas-soft items-center justify-center active:bg-mute/40">
          <Bell size={20} color="#25282B" />
        </Pressable>
      )}
    </View>
  );
}

