import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarShowLabel: false
      }}
    >
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
