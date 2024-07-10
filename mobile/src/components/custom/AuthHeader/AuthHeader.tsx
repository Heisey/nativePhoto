
import * as React from 'react'
import * as Native from 'react-native'

import * as Assets from 'assets'

export interface AuthHeaderProps {
  title: string
}

const AuthHeader: React.FC<AuthHeaderProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.Image
        source={Assets.images.logo}
        resizeMode='contain'
        style={styles.logo}
      />
      <Native.Text style={styles.title}>{props.title}</Native.Text>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25
    // justifyContent: 'center'
  },
  title: {
    // fontSize: 68,
    marginTop: 20,
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  },
  logo: {
    width: 135,
    height: 35
  },
})

export default AuthHeader