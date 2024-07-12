
import * as React from 'react'
import * as Native from 'react-native'

export interface LoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.ActivityIndicator size="large" color="#0000ff" /> 
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})

export default Loading