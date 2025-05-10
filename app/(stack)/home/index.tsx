import CustomButton from "@/components/shared/CustomButton"
import { Link, router } from "expo-router"
import React from "react"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          color="primary"
          onPress={() => router.push("/products")}
          className="mb-2"
        >
          Productos
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>

        <CustomButton
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mb-2"
        >
          Perfil
        </CustomButton>

        <Link
          asChild
          href="/products"
        >
          <CustomButton
            variant="text-only"
            className="mb-10"
          >
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  )
}
