import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer"
import { Text, View } from "react-native"

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full size-24">
          <Text className="text-primary text-xl">Hola</Text>
        </View>
      </View>

      {/* DrawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
