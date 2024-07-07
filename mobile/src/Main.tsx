
import 'react-native-gesture-handler';

import * as React from 'react'
import * as ReactNavigate from '@react-navigation/native'

import App from './App'
import FontProvider from 'components/providers/Font'

const Main: React.FC = () => {

  return (
    <>
      <FontProvider>
        <ReactNavigate.NavigationContainer>
          <App />
        </ReactNavigate.NavigationContainer>
      </FontProvider>
    </>
  )
}


export default Main