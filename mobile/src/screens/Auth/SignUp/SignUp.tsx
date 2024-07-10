
import * as React from 'react'
import * as RN from 'react-native'

export interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props) => {
  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.Text>SignUp</RN.Text>
    </RN.SafeAreaView>
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