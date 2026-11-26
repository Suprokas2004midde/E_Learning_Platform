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
      className={`px-5 py-2.5 rounded-full mr-2.5 border active:opacity-90 ${
        isActive
          ? "bg-primary border-primary"
          : "bg-white border-mute/50"
      }`}
    >
      <Text
        className={`text-xs font-bold uppercase tracking-wider ${
          isActive ? "text-white" : "text-ink"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

