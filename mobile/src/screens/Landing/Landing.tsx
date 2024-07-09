
import * as React from 'react'
import * as RN from 'react-native'
import * as ReactStack from '@react-navigation/stack'

import * as Core from 'core'
import * as Hooks from 'hooks'

export interface LandingProps {
  
}

const Landing: React.FC<LandingProps> = (props) => {
  const navigation = Hooks.common.useNavigation<ReactStack.StackNavigationProp<Core.I.RootStack, 'auth'>>()
  const auth = Hooks.common.useAuth()

  const [email, emailHandler] = React.useState('puppy1@test.com')
  const [password, passwordHandler] = React.useState('puppy1234')

  const login = async () => {
    try {
      await auth.loginWithEmail({ email, password })
    // console.log('puppies  2, ',res)
    } catch (err) {
      console.log('puppy error, ', err)
    }
  }

  const signUp = async () => {
    await auth.signUpWithEmail({ email, password })
  }

  return (
    <RN.View style={styles.container}>
      {!auth.user?.email && <RN.Text>Welcome to Photo</RN.Text>}
      {auth.user?.email && <RN.Text>{auth.user?.email}</RN.Text>}
      <RN.View style={styles.buttons}>
        <RN.TextInput value={email} placeholder='email' onChangeText={emailHandler} />
        <RN.TextInput value={password} placeholder='password' onChangeText={passwordHandler} />
        <RN.Button 
          onPress={login} 
          title='Sign In' 
        />
        <RN.Button 
          onPress={() => navigation.navigate('auth', { screen: 'signIn'} )}
          title='auth'
        />
        <RN.Button 
          onPress={signUp}
          title='sign up'
        />

        <RN.Button
          onPress={auth.logOut}
          title='logout'
        />
      </RN.View>
        
    </RN.View>
  )
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: ''
  },
  buttons: {
    marginTop: 100
  }
})

export default Landing