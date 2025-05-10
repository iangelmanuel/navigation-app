import { Stack } from "expo-router"
import React from "react"

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white"
        }
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
