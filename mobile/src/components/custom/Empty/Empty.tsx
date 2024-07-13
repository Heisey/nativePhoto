
import * as React from 'react'
import * as Native from 'react-native'

import * as Assets from 'assets'

export interface EmptyProps {
  text: string
  subText: string
}

const Empty: React.FC<EmptyProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.Image 
        source={Assets.images.empty}
        resizeMode='contain'
        style={styles.image}
      />
      <Native.Text style={styles.text}>{props.text}</Native.Text>
      <Native.Text style={styles.subText}>{props.text}</Native.Text>
      <Native.Text>{props.subText}</Native.Text>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  image: {
    height: 215,
    width: 270
  },
  text: {
    fontSize: 28,
    color: 'white'
  },
  subText: {
    fontSize: 18,
    color: 'lightgrey'
  }
})

export default Empty