import React from "react";
import { View, ViewProps, Platform } from "react-native";
import { SafeAreaView, Edge } from "react-native-safe-area-context";

interface ResponsiveContainerProps extends ViewProps {
  children: React.ReactNode;
  edges?: Edge[];
  className?: string;
}

/**
 * ResponsiveContainer ensures the UI looks perfect on:
 * - Small budget Android phones (tight padding, fluid wrapping)
 * - Large flagship phones & phablets (centered content, max-w-md constraint)
 * - Tablets & Web previews (centered mobile viewport shell)
 */
export function ResponsiveContainer({
  children,
  edges = ["top"],
  className = "",
  style,
  ...props
}: ResponsiveContainerProps) {
  return (
    <SafeAreaView
      edges={edges}
      className={`flex-1 bg-white items-center ${className}`}
      style={style}
      {...props}
    >
      <View
        className="flex-1 w-full max-w-[480px] self-center bg-white"
        style={Platform.OS === "web" ? { minHeight: "100vh" } : undefined}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
