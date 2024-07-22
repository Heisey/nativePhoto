
import * as React from 'react'
import * as Native from 'react-native'
import Player from 'react-native-video'

import * as Assets from 'assets'

export interface VideoPlayerProps {}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const window = Native.Dimensions.get('window')
  return (
    <Native.View style={styles.container}>
      <Player 
        source={{ uri: Assets.videos.test }} 
        resizeMode='contain'
        // videoHeight={window.height - 130}
        // videoWidth={window.width}
      />
      <Native.Text>VideoPlayer</Native.Text>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: Native.Dimensions.get('window').width,
    height: Native.Dimensions.get('window').height - 130,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default VideoPlayer