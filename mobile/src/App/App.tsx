
import * as React from 'react'
import * as ReactStack from '@react-navigation/stack'

import Landing from 'screens/Landing'
import About from 'screens/About'

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  const Stack = ReactStack.createStackNavigator()

  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' component={Landing} />
      <Stack.Screen name='about' component={About} />
    </Stack.Navigator>
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