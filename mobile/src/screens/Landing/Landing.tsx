
import * as React from 'react'
import * as Native from 'react-native'
import * as ReactStack from '@react-navigation/stack'

import * as Assets from 'assets'
import * as Core from 'core'
import * as Hooks from 'hooks'

export interface LandingProps {
  
}

const Landing: React.FC<LandingProps> = (props) => {
  const navigation = Hooks.common.useNavigation<ReactStack.StackNavigationProp<Core.I.RootStack, 'auth'>>()
  
  console.log('puppy assets, ', Assets)

  return (
    <Native.View style={styles.container}>
      <Native.ScrollView>
        <Native.View>
          <Native.Image
            source={Assets.images.logo}
          />
        </Native.View>
      </Native.ScrollView>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '',
    backgroundColor: 'black'
  },
  buttons: {
    marginTop: 100
  }
})

export default Landing