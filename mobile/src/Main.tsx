
import 'react-native-gesture-handler';

import * as React from 'react'
import * as Native from 'react-native'
import * as ReactNavigate from '@react-navigation/native'

import * as Api from 'api'

import App from './App'
import * as Services from 'services'
import AuthProvider from 'components/providers/Auth'
import FontProvider from 'components/providers/Font'
import QueryProvider from 'components/providers/Query'

const Main: React.FC = () => {

  return (
    <Native.SafeAreaView style={styles.container}>
      <Api.ApiProvider firebaseAuthInstance={Services.firebase.auth}>
        <QueryProvider>
          <FontProvider>
            <AuthProvider>
              <ReactNavigate.NavigationContainer>
                <App />
              </ReactNavigate.NavigationContainer>
            </AuthProvider>
          </FontProvider>
        </QueryProvider>
      </Api.ApiProvider>
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