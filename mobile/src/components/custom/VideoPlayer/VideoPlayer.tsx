
import * as React from 'react'
import * as Native from 'react-native'
import * as ExpoAv from 'expo-av'
import Icon from 'react-native-vector-icons/Ionicons'

import * as Core from 'core'
import * as Hooks from 'hooks'

export interface VideoPlayerProps {
  video: Core.I.VideoRecord
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const videoRef = React.useRef<ExpoAv.Video>(null)
  const [play, togglePlay] = Hooks.common.useToggle(true)
  const [fullSizze, toggleFullSize] = Hooks.common.useToggle(true)

  const onPlay = () => {
    videoRef.current?.playAsync()
    togglePlay()
  }

  const onPause = () => {
    videoRef.current?.pauseAsync()
    togglePlay()
  }

  const renderControl = () => (
    <Native.View style={styles.controlContainer}>
      <Native.TouchableOpacity onPress={play ? onPause : onPlay}><Icon size={35} color='white' name={play ? 'pause-outline' : 'play-outline'} /></Native.TouchableOpacity>
      <Native.TouchableOpacity><Icon size={35} color='white' name='close-outline' /></Native.TouchableOpacity>
    </Native.View>
  )
  
  return (
    <Native.View style={[styles.container, fullSizze ? styles.containerLarge : styles.containerSmall]}>
      <Native.TouchableOpacity onPress={toggleFullSize}>
        <ExpoAv.Video 
          source={{ uri: props.video.videoUrl }}
          shouldPlay
          style={[fullSizze ? styles.videoLarge : styles.videoSmall]}
          ref={videoRef}
        /> 
      </Native.TouchableOpacity>

      <Native.View style={[styles.innerContainer, fullSizze ? styles.innerContainerLarge : styles.innerContainerSmall]}>
        <Native.View style={[styles.textContainer, fullSizze ? styles.textContainerLarge : styles.textContainerSmall]}>
          <Native.Text style={styles.title}>{props.video.title}</Native.Text>
          <Native.Text style={styles.subTitle}>{props.video.creatorName}</Native.Text>
        </Native.View>
        {!fullSizze && renderControl()}
      </Native.View>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 0,
    width: '100%',
    backgroundColor: 'black',
  },
  containerLarge: {
    top: 0,
    height: '100%',
    flexDirection: 'column'
  },
  containerSmall: {
    bottom: 0,
    height: 60,
    flexDirection: 'row'
  },
  innerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  innerContainerSmall: {
    flexDirection: 'row',
  },
  innerContainerLarge: {
    flexDirection: 'column'
  },
  textContainer: {
    marginLeft: 5,
  },
  textContainerLarge: {
    borderTopColor: 'white',
    borderTopWidth: 2,
    paddingVertical: 8
  },
  textContainerSmall: {
    height: '100%',
    justifyContent: 'center',
    flexGrow: 1,

  },
  controlContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  videoSmall: {
    width: 107,
    height: 60,
  },
  videoLarge: {
    width: '100%',
    height: Native.Dimensions.get('screen').width * 0.5625
  },
  title: {
    color: 'white'
  },
  subTitle: {
    color: 'lightgrey'
  }
})

export default VideoPlayer