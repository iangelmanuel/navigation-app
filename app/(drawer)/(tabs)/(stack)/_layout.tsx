import { Ionicons } from "@expo/vector-icons"
import { DrawerActions, StackActions } from "@react-navigation/native"
import { Stack, useNavigation } from "expo-router"
import React from "react"

export default function StackLayout() {
  const navigation = useNavigation()

  const onHeaderLeftPress = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop())
      return
    }

    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white"
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            className="mr-5"
            onPress={() => onHeaderLeftPress(canGoBack)}
          />
        )
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Pantalla de Inicio"
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Pantalla de Productos"
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Pantalla de Perfil"
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Configuración de la Aplicación"
        }}
      />
    </Stack>
  )
}
