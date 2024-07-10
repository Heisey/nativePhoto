
import * as React from 'react'
import * as Native from 'react-native'

export interface CreateProps {}

const Create: React.FC<CreateProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.Text>Create</Native.Text>
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

export default Create