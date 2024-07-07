
import * as React from 'react'
import * as RN from 'react-native'
import * as ReactStack from '@react-navigation/stack'

import * as Core from 'core'
import * as Hooks from 'hooks'

export interface LandingProps {
  // nav: ReactStack.StackScreenProps<App.RootStack, 'home'>
}


const Landing: React.FC<LandingProps> = (props) => {
  const navigation = Hooks.common.useNavigation<ReactStack.StackNavigationProp<Core.I.RootStack>>()

  return (
    <RN.View style={styles.container}>
      <RN.Text>Landing 5</RN.Text>
      <RN.Button onPress={() => navigation.navigate('about')} title='about' />
        
    </RN.View>
  )
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Landing