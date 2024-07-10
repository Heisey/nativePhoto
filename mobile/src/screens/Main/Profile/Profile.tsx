
import * as React from 'react'
import * as Native from 'react-native'

export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.Text>Profile</Native.Text>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile