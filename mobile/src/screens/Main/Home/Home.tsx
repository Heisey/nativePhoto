
import * as React from 'react'
import * as Native from 'react-native'

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.Text>Home</Native.Text>
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

export default Home