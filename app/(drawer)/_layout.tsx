import CustomDrawer from "@/components/shared/CustomDrawer"
import { Ionicons } from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer"

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: "rgba(0, 0, 0, 0.5)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="calendar-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Tabs",
          title: "Tabs",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="grid-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer>
  )
}
