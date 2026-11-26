import { Tabs } from "expo-router";
import { Home, Compass, BookOpen, User } from "lucide-react-native";
import { Platform, View } from "react-native";

export default function TabsLayout() {
  return (
    <View className="flex-1 bg-canvas-soft items-center">
      <View className="flex-1 w-full max-w-[480px] bg-white">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#E60000",
            tabBarInactiveTintColor: "#7E7E7E",
            tabBarStyle: {
              backgroundColor: "#FFFFFF",
              borderTopColor: "#EAEAEA",
              borderTopWidth: 1,
              height: Platform.OS === "ios" ? 88 : 68,
              paddingBottom: Platform.OS === "ios" ? 28 : 12,
              paddingTop: 8,
            },
            tabBarItemStyle: {
              paddingVertical: 2,
              justifyContent: "center",
              alignItems: "center",
            },
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginTop: 3,
              lineHeight: 12,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Home size={22} color={color} strokeWidth={2.2} />
              ),
            }}
          />
          <Tabs.Screen
            name="courses"
            options={{
              title: "Explore",
              tabBarIcon: ({ color, size }) => (
                <Compass size={22} color={color} strokeWidth={2.2} />
              ),
            }}
          />
          <Tabs.Screen
            name="learning"
            options={{
              title: "Learning",
              tabBarIcon: ({ color, size }) => (
                <BookOpen size={22} color={color} strokeWidth={2.2} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, size }) => (
                <User size={22} color={color} strokeWidth={2.2} />
              ),
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}

