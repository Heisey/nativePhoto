
import 'react-native-gesture-handler';

import * as React from 'react'
import * as ReactNavigate from '@react-navigation/native'

import App from './App'
import AuthProvider from 'components/providers/Auth'
import FontProvider from 'components/providers/Font'

const Main: React.FC = () => {

  return (
    <>
      <FontProvider>
        <AuthProvider>
          <ReactNavigate.NavigationContainer>
            <App />
          </ReactNavigate.NavigationContainer>
        </AuthProvider>
      </FontProvider>
    </>
  )
}


export default Main