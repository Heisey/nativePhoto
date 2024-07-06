
import * as React from 'react'
import * as RN from 'react-native'
import * as ReactStack from '@react-navigation/stack'

import * as App from 'App'
export interface AboutProps {
  // navigation: ReactStack.StackScreenProps<App.RootStack, 'Home'>
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <RN.View style={styles.container}>
      <RN.Text>About</RN.Text>
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

export default About