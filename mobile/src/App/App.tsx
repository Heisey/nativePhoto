
import * as React from 'react'
import * as ReactStack from '@react-navigation/stack'
import * as Native from 'react-native'

import * as Core from 'core'
import Landing from 'screens/Landing'
import About from 'screens/About'
import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  const RootStack = ReactStack.createStackNavigator<Core.I.RootStack>()
  const AuthStack = ReactStack.createStackNavigator<Core.I.AuthStack>()

  const AuthScreens = () => (
    <AuthStack.Navigator initialRouteName='signIn'>
      <AuthStack.Screen name='signIn' component={SignIn} />
      <AuthStack.Screen name='signUp' component={SignUp} />
    </AuthStack.Navigator>
  )

  return (
    <>
      {/* <Native.View> */}
        <RootStack.Navigator initialRouteName='home'>
          <RootStack.Screen name='home' component={Landing} />
          <RootStack.Screen name='auth' component={AuthScreens} />
          <RootStack.Group screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='about' component={About}  />
          </RootStack.Group>
        </RootStack.Navigator>
      {/* </Native.View> */}
    </>
  )
}

// const styles = RN.StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

export default App