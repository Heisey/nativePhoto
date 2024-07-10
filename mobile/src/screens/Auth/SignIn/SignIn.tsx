
import * as React from 'react'
import * as Native from 'react-native'

import * as Hooks from 'hooks'
import AuthFooter from 'components/custom/AuthFooter'
import AuthHeader from 'components/custom/AuthHeader'
import Label from 'components/base/Label'

import styles from './styles'

export interface SignInProps {}

const SignIn: React.FC<SignInProps> = (props) => {
  const auth = Hooks.common.useAuth()
  const navigation = Hooks.common.useNavigation()
  const [email, emailHandler] = React.useState('')
  const [password, passwordHandler] = React.useState('')

  const isDisabled = () => !email || !password

  const login = async () => {
    try {
      await auth.loginWithEmail({ email, password })
      navigation.navigate('main', { screen: 'home' })
    } catch(err) {
      Native.Alert.alert(
        'Something went wrong', 
        'Check you email/password',
        [
          {
            text: 'Okay'
          }
        ],
        {
          cancelable: false
        }
      )
    }
  }

  const navigate = () => navigation.navigate('auth', { screen: 'signUp' })
  
  return (
    <Native.ScrollView style={styles.container}>
      <AuthHeader title='Sign in to Aora' />

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

      <AuthFooter 
        isDisabled={isDisabled()}
        login={login}
        navigate={navigate}
        message='Not a member?'
        linkText='Sign up'
      />
    </Native.ScrollView>
  )
}


export default SignIn