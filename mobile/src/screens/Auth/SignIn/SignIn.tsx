
import * as React from 'react'
import * as RN from 'react-native'

export interface SignInProps {}

const SignIn: React.FC<SignInProps> = (props) => {
  return (
    <RN.View style={styles.container}>
      <RN.Text>SignIn</RN.Text>
    </RN.View>
  )
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SignIn