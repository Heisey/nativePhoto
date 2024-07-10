
import 'react-native-gesture-handler';

import * as React from 'react'
import * as Native from 'react-native'
import * as ReactNavigate from '@react-navigation/native'

import App from './App'
import AuthProvider from 'components/providers/Auth'
import FontProvider from 'components/providers/Font'

const Main: React.FC = () => {

  return (
    <Native.SafeAreaView style={styles.container}>
      <FontProvider>
        <AuthProvider>
          <ReactNavigate.NavigationContainer>
            <App />
          </ReactNavigate.NavigationContainer>
        </AuthProvider>
      </FontProvider>
    </Native.SafeAreaView>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})


export default Main