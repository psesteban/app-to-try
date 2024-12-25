import { View, Text, TouchableOpacity, ImageBackground } from "react-native"
import { Link } from 'expo-router'
import Logo  from '../../../assets/component/logo.jsx'
import { useFonts } from 'expo-font'

export default function Index() {
  const [fontsLoaded] = useFonts({
    caveat: require('../../../assets/fonts/Caveat-Bold.ttf'),
    hand: require('../../../assets/fonts/Caveat-Regular.ttf')
  })
  if (!fontsLoaded) {
    return <Text>⌛paciencia</Text>;
  }
  return (
    <ImageBackground className="h-full w-full" source={require('../../../assets/images/fondopantalla.svg')}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="bg-limeGreen absolute flex items-center top-0 p-3 w-full h-1/4">
      <Logo className="h-full rounded-full" />
      <Text className="font-caveat p-2 text-lg" >AFT SJD Maipo de Fundación DEM</Text>
      </View>
      <Text className="font-hand p-2 text-lg my-10">InsightPlanner: Planificación, resultados, apoyo</Text>
      <TouchableOpacity className="bg-limeGreen hover:bg-yellow-700 font-caveat font-bold py-2 px-4 rounded" > <Link href="/sign-in" >Ingresa</Link>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}
