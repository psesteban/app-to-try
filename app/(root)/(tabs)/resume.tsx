import { View, Text } from "react-native"
import { Link } from 'expo-router'
import Logo  from '../../../assets/component/logo.jsx'
import { useFonts } from 'expo-font'

export default function Index() {
  const [fontsLoaded] = useFonts({
    Caveat: require('../../../assets/fonts/Caveat-Bold.ttf'),
    Hand: require('../../../assets/fonts/Caveat-Regular.ttf')
  })
  if (!fontsLoaded) {
    return <Text>⌛paciencia</Text>;
  }
  return (
    <View>
      <View className="bg-limeGreen absolute flex items-center top-0 left-0 p-3 w-full h-1/4">
      <Logo className="h-full rounded-full" />
      </View>
      <Link href="/explore" >Explora</Link>
      <Link href="/profile" >Perfil</Link>


    </View>
  )
}
