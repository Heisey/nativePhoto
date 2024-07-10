
import * as React from 'react'
import * as ReactStack from '@react-navigation/stack'
import * as Native from 'react-native'

import * as Core from 'core'
import Landing from 'screens/Landing'
import About from 'screens/About'
import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'

const RootStack = ReactStack.createStackNavigator<Core.I.RootStack>()
const AuthStack = ReactStack.createStackNavigator<Core.I.AuthStack>()

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {

  const AuthScreens = () => (
    <AuthStack.Navigator initialRouteName='signIn' screenOptions={{ headerLeft: () => null, headerTitle: () => null }} >
      <AuthStack.Screen name='signIn' options={{ headerTitle: 'SignIn'}} component={SignIn} />
      <AuthStack.Screen name='signUp' component={SignUp} />
    </AuthStack.Navigator>
  )

  return (
    <RootStack.Navigator initialRouteName='home' screenOptions={{ headerStyle: styles.primaryHeaderBackground, headerTitle: () => null }}>
      <RootStack.Screen name='home' component={Landing} options={{ headerShown: false }} />
      <RootStack.Screen name='auth' component={AuthScreens} />
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='about' component={About}  />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    color: 'yellow'
  },
  primaryHeaderBackground: { backgroundColor: 'black' },
  primaryHeaderText: { color: 'yellow' }
})

export default App