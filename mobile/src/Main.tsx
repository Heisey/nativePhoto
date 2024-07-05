
import * as Expo from 'expo'
import * as RN from 'react-native'
import RootConfig from '../app.json'

const App = () => {

  return (
    <RN.View style={styles.container}>
      <RN.Text>Puppies 6</RN.Text>
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

export default App