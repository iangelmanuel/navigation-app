import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent"
        }
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name="person-outline"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name="home-outline"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name="star-outline"
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}
