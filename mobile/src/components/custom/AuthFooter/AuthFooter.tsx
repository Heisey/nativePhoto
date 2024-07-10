
import * as React from 'react'
import * as Native from 'react-native'
import * as ReactStack from '@react-navigation/stack'

import * as Core from 'core'
import Button from 'components/base/Button'

export interface AuthFooterProps {
  isDisabled: boolean
  login: () => void
  navigate: () => void
  message: string
  linkText: string
}

const AuthFooter: React.FC<AuthFooterProps> = (props) => {

  return (
    <Native.View>
      <Button onPress={props.login} disabled={props.isDisabled}>Login</Button>
      <Native.View style={styles.signUpContainer}>
        <Native.Text style={styles.signUpMessage}>
          {props.message}
          <Native.TouchableOpacity style={styles.signUpButton} onPress={props.navigate}>
            <Native.Text style={styles.signUpLink}>{props.linkText}</Native.Text>
          </Native.TouchableOpacity>
        </Native.Text>
      </Native.View>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  signUpContainer: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center'
  },
  signUpButton: {
    marginTop: -3,
    paddingLeft: 8
  },
  signUpLink: {
    color: 'orange'
  },
  signUpMessage: {
    color: 'white'
  }
})

export default AuthFooter