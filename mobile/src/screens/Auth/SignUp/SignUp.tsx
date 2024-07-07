
import * as React from 'react'
import * as RN from 'react-native'

export interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props) => {
  return (
    <RN.View style={styles.container}>
      <RN.Text>SignUp</RN.Text>
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

export default SignUp