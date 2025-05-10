import { useFonts } from "expo-font"
import { Slot, SplashScreen } from "expo-router"
import { useEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "./global.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "Inter-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/WorkSans-Medium.ttf")
  })

  useEffect(() => {
    if (error) throw error

    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
}
