
import * as React from 'react'
import * as Native from 'react-native'

import * as Hooks from 'hooks'
import AuthFooter from 'components/custom/AuthFooter'
import AuthHeader from 'components/custom/AuthHeader'
import Label from 'components/base/Label'

export interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props) => {
  const auth = Hooks.common.useAuth()
  const navigation = Hooks.common.useNavigation()
  const [username, usernameHandler] = React.useState('')
  const [email, emailHandler] = React.useState('')
  const [password, passwordHandler] = React.useState('')

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault()
      navigation.navigate('auth', { screen: 'signIn' })
    })

    return unsubscribe
  }, [navigation])

  const isDisabled = () => !username || !email || !password

  const login = async () => {
    try {
      auth.createUser({ email, password, username })
      navigation.navigate('main', { screen: 'home' })
    } catch (err) {
      Native.Alert.alert(
        'Something went wrong', 
        '',
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

  const navigateToSignIn = () => navigation.navigate('auth', { screen: 'signIn' })
  
  return (
    <Native.ScrollView style={styles.container}>
      <AuthHeader title='Sign up to Aora' />

      <Native.View style={styles.inputContainer}>
        <Label
          label='username'
          style={styles.inputLabel}
          field={
            <Native.TextInput 
              value={username}
              style={styles.input}
              onChangeText={usernameHandler}
            />
          }
        />
        <Label
          label='email'
          style={styles.inputLabel}
          field={
            <Native.TextInput 
              value={email}
              style={styles.input}
              onChangeText={emailHandler}
            />
          }
        />
        <Label
          label='password'
          field={
            <Native.TextInput 
              value={password}
              style={styles.input}
              onChangeText={passwordHandler}
            />
          }
        />
      </Native.View>

      <AuthFooter 
        isDisabled={isDisabled()}
        login={login}
        navigate={navigateToSignIn}
        message='Have an account already?'
        linkText='Sign in'
      />
    </Native.ScrollView>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8
  },
  inputContainer: {
    marginBottom: 45
  },
  inputLabel: {
    marginBottom: 12
  },
  input: {
    color: 'white',
  },
})

export default SignUp