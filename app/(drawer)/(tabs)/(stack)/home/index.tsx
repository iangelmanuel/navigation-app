import CustomButton from "@/components/shared/CustomButton"
import { DrawerActions } from "@react-navigation/native"
import { Link, router, useNavigation } from "expo-router"
import React from "react"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer)
  }

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
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mb-2"
        >
          Perfil
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mb-2"
        >
          Ajustes
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

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
      </View>
    </SafeAreaView>
  )
}
