import { products } from "@/store/product-store"
import { Redirect, useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

export default function ProductScreen() {
  const { id } = useLocalSearchParams()

  const product = products.find((p) => p.id === id)

  if (!product) return <Redirect href="/" />

  return (
    <View className="px-5 mt-10">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  )
}
