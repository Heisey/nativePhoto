
import * as React from 'react'
import * as Native from 'react-native'
import * as Navigation from '@react-navigation/native'

import * as Assets from 'assets'
import * as Hooks from 'hooks'
import Button from 'components/base/Button'
import Label from 'components/base/Label'

import styles from './styles'

export interface SignInProps {}

const SignIn: React.FC<SignInProps> = (props) => {
  const auth = Hooks.common.useAuth()
  const navigation = Hooks.common.useNavigation()
  const [email, emailHandler] = React.useState('')
  const [password, passwordHandler] = React.useState('')

  const isDisabled = () => {
    if (!email || !password) return true
  }

  const login = async () => await auth.loginWithEmail({ email, password })
  
  return (
    <Native.ScrollView style={styles.container}>
      <Native.View style={styles.titleContainer}>
        <Native.Image
          source={Assets.images.logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <Native.Text style={styles.title}>Login to Aora</Native.Text>
      </Native.View>

      <Native.View style={styles.inputContainer}>
        <Label
          label='email'
          style={styles.inputLabel}
          field={
            <Native.TextInput 
              placeholder='enter your email'
              style={styles.input}
              value={email}
              onChangeText={emailHandler}
              placeholderTextColor='white'
            />
          }
        />
        <Label
          label='password'
          field={
            <Native.TextInput
              placeholder='enter your password'
              style={styles.input}
              value={password}
              onChangeText={passwordHandler}
              placeholderTextColor='white'
            />
          }
        />
      </Native.View>

      <Native.View>
        <Button onPress={login} disabled={isDisabled()}>Login</Button>
        <Native.View style={styles.signUpContainer}>
          <Native.Text style={styles.signUpMessage}>Dont have an account?
            <Native.TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('auth', { screen: 'signUp'})}>
              <Native.Text style={styles.signUpLink}>Sign up</Native.Text>
            </Native.TouchableOpacity>
          </Native.Text>
        </Native.View>
      </Native.View>
    </Native.ScrollView>
  )
}


export default SignIn