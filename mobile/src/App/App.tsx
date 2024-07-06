
import * as React from 'react'
import * as RN from 'react-native'
import * as ReactStack from '@react-navigation/stack'
import * as ReactNavigate from '@react-navigation/native'

import Landing from 'screens/Landing'
import About from 'screens/About'

export type RootStack = {
  home: undefined,
  about: undefined
}

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  const Stack = ReactStack.createStackNavigator()

  return (
    <ReactNavigate.NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Landing} />
        <Stack.Screen name='about' component={About} />
      </Stack.Navigator>
    </ReactNavigate.NavigationContainer>
  )
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App