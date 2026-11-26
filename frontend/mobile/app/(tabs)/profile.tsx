import { View, Text, ScrollView, Pressable } from "react-native";
import { ResponsiveContainer } from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Header } from "@/components/Header/Header";
import { User, Award, BookCheck, ShieldCheck, ChevronRight, LogOut, Settings } from "lucide-react-native";

export default function ProfileScreen() {
  const profileOptions = [
    { title: "My Certificates", subtitle: "2 completed certifications", icon: Award },
    { title: "Enrolled Courses", subtitle: "3 active in progress", icon: BookCheck },
    { title: "Account & Security", subtitle: "Password, Email, 2FA", icon: ShieldCheck },
    { title: "App Preferences", subtitle: "Notifications, Theme, Audio", icon: Settings },
  ];

  return (
    <ResponsiveContainer>
      <Header title="My Account" subtitle="Student Profile" />

      <ScrollView
        className="flex-1 px-4 sm:px-5 pt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Profile Card Banner */}
        <View className="bg-canvas-soft rounded-lg p-4 sm:p-5 mb-5 flex-row items-center border border-canvas-soft">
          <View className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ink items-center justify-center mr-3.5">
            <User size={26} color="#FFFFFF" />
          </View>
          <View className="flex-1">
            <Text className="text-lg sm:text-xl font-black text-ink tracking-tight">
              STUDENT USER
            </Text>
            <Text className="text-xs font-semibold text-body mb-1">
              student@elearning.edu
            </Text>
            <View className="bg-primary/10 self-start px-2 py-0.5 rounded-full mt-0.5">
              <Text className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                PRO LEARNER
              </Text>
            </View>
          </View>
        </View>

        {/* Options List */}
        <Text className="text-xs font-bold uppercase tracking-wider text-body mb-2.5">
          Manage Account
        </Text>

        <View className="border border-canvas-soft rounded-lg overflow-hidden mb-5 bg-white">
          {profileOptions.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === profileOptions.length - 1;
            return (
              <Pressable
                key={item.title}
                className={`flex-row items-center justify-between p-3.5 sm:p-4 active:bg-canvas-soft ${
                  !isLast ? "border-b border-canvas-soft" : ""
                }`}
              >
                <View className="flex-row items-center gap-3 flex-1 mr-2">
                  <View className="w-9 h-9 rounded-full bg-canvas-soft items-center justify-center">
                    <Icon size={17} color="#25282B" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-bold text-ink">
                      {item.title}
                    </Text>
                    <Text className="text-xs text-body font-medium">
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
                <ChevronRight size={16} color="#BEBEBE" />
              </Pressable>
            );
          })}
        </View>

        {/* Logout Button */}
        <Pressable className="border border-primary rounded-full py-3 flex-row items-center justify-center gap-2 active:bg-primary/5 mb-6">
          <LogOut size={16} color="#E60000" />
          <Text className="text-xs font-extrabold uppercase tracking-wider text-primary">
            Sign Out
          </Text>
        </Pressable>
      </ScrollView>
    </ResponsiveContainer>
  );
}

