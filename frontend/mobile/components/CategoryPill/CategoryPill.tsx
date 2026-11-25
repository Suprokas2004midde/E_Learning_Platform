import { Pressable, Text } from "react-native";

interface CategoryPillProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export function CategoryPill({ label, isActive, onPress }: CategoryPillProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-4 py-2 rounded-full mr-2 ${
        isActive ? "bg-indigo-600" : "bg-slate-100"
      }`}
    >
      <Text
        className={`text-sm font-medium ${
          isActive ? "text-white" : "text-slate-700"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

