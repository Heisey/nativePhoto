
import * as React from 'react'
import * as ExpoFont from 'expo-font'
import * as Splash from 'expo-splash-screen'

export interface FontProps extends React.PropsWithChildren {}

Splash.preventAutoHideAsync()

const Font: React.FC<FontProps> = (props) => {
  const [loaded, error] = ExpoFont.useFonts({
    "poppinsBlack": require("../../../assets/fonts/Poppins-Black.ttf"),
    "poppinsBold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "poppinsExtraBold": require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
    "poppinsExtraLight": require("../../../assets/fonts/Poppins-ExtraLight.ttf"),
    "poppinsLight": require("../../../assets/fonts/Poppins-Light.ttf"),
    "poppinsMedium": require("../../../assets/fonts/Poppins-Medium.ttf"),
    "poppinsRegular": require("../../../assets/fonts/Poppins-Regular.ttf"),
    "poppinsSemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "poppinsThin": require("../../../assets/fonts/Poppins-Thin.ttf"),
  })

  React.useEffect(() => {
    if (error) throw error

    if (loaded) Splash.hideAsync()
  }, [loaded, error])

  if (!loaded) return null

  if (!loaded && !error) return null

  return (
    <>
      {props.children}
    </>
  )
}


export default Font