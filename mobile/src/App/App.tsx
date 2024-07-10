
import * as React from 'react'
import * as ReactStack from '@react-navigation/stack'
import * as TabStack from '@react-navigation/bottom-tabs'
import * as Native from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import * as Core from 'core'
import Landing from 'screens/Landing'

import Home from 'screens/Main/Home'
import Bookmark from 'screens/Main/Bookmark'
import Create from 'screens/Main/Create'
import Profile from 'screens/Main/Profile'

import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'

const RootStack = ReactStack.createStackNavigator<Core.I.RootStack>()
const AuthStack = ReactStack.createStackNavigator<Core.I.AuthStack>()
const MainStack = TabStack.createBottomTabNavigator<Core.I.MainStack>()

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {

  const TabIcons = (args: { route: keyof Core.I.MainStack, focused: boolean, size: number }) => {
    let name = ''
    switch(args.route) {
      case 'home':
        name = args.focused ? 'home' : 'home-outline'
        break
      case 'bookmark':
        name = args.focused ? 'bookmark' : 'bookmark-outline'
        break
      case 'create':
        name = args.focused ? 'add-circle' : 'add-circle-outline'
        break
      case 'profile':
        name = args.focused ? 'person' : 'person-outline'
        break
    }
    return <Icon name={name} color={args.focused ? 'orange' : 'white'} size={args.size} />
  }

  const AuthScreens = () => (
    <AuthStack.Navigator initialRouteName='signIn' screenOptions={{ headerStyle: styles.primaryHeaderBackground, headerLeft: () => null, headerTitle: () => null }} >
      <AuthStack.Screen name='signIn' options={{ headerTitle: 'SignIn'}} component={SignIn} />
      <AuthStack.Screen name='signUp' component={SignUp} options={{ }} />
    </AuthStack.Navigator>
  )

  const MainScreens = () => (
    <MainStack.Navigator 
      screenOptions={(dataSet) => ({
        headerShown: false,
        tabBarIcon: (tabProps) => <TabIcons {...tabProps} route={dataSet.route.name} />,
        tabBarStyle: styles.primaryHeaderBackground,
        tabBarLabel: (tabProps) => <Native.Text style={{ color: tabProps.focused ? 'orange' : 'white' }}>{dataSet.route.name}</Native.Text>,
        tabBarItemStyle: {
          paddingTop: 10
        }
      })}
    >
      <MainStack.Screen name='home' component={Home} />
      <MainStack.Screen name='bookmark' component={Bookmark} />
      <MainStack.Screen name='create' component={Create} />
      <MainStack.Screen name='profile' component={Profile} />
    </MainStack.Navigator>
  )

  return (
    <RootStack.Navigator initialRouteName='landing' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name='landing' component={Landing} options={{ headerShown: false }} />
      <RootStack.Screen name='auth' component={AuthScreens} />
      <RootStack.Screen name='main' component={MainScreens} />
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