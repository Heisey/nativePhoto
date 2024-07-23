
import * as React from 'react'
import * as Native from 'react-native'
import * as ExpoAv from 'expo-av'
import Icon from 'react-native-vector-icons/Ionicons'

import * as Core from 'core'
import * as Hooks from 'hooks'

export interface VideoPlayerProps {
  video: Core.I.VideoRecord
  onClose: () => void
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const videoRef = React.useRef<ExpoAv.Video>(null)
  const [play, togglePlay] = Hooks.common.useToggle(true)
  const [fullSize, toggleFullSize] = Hooks.common.useToggle(true)
  const [controlOverlay, toggleControlOverlay] = Hooks.common.useToggle()

  const onPlay = () => {
    if (fullSize && !controlOverlay)  return
    videoRef.current?.playAsync()
    togglePlay()
  }

  const onPause = () => {
    if (fullSize && !controlOverlay)  return
    videoRef.current?.pauseAsync()
    togglePlay()
  }

  const toggleOverlay = () => {
    if (!fullSize) return
    toggleControlOverlay()
  }

  const toggleFullSizeSmall = () => {
    if (fullSize) return
    toggleFullSize()
  }

  const toggleFullSizeLarge = () => {
    if (!controlOverlay) return
    toggleFullSize()
  }

  const renderControl = () => (
    <Native.TouchableOpacity onPress={toggleOverlay} style={[styles.controlContainer, fullSize ? styles.controlContainerLarge : styles.controlContainerSmall, { opacity: controlOverlay ? 1 : 0 }]}>
      <Native.TouchableOpacity onPress={play ? onPause : onPlay}><Icon size={fullSize ? 65 : 35} color='white' name={play ? 'pause-outline' : 'play-outline'} /></Native.TouchableOpacity>
      {!fullSize && <Native.TouchableOpacity onPress={props.onClose}><Icon size={35} color='white' name='close-outline' /></Native.TouchableOpacity>}
      {fullSize && <Native.TouchableOpacity onPress={toggleFullSizeLarge} style={styles.controlMinimize}><Icon size={45} color='white' name='chevron-down-outline' /></Native.TouchableOpacity>}
    </Native.TouchableOpacity>
  )
  
  return (
    <Native.View style={[styles.container, fullSize ? styles.containerLarge : styles.containerSmall]}>
      <Native.TouchableOpacity style={styles.videoButton} onPress={toggleFullSizeSmall}>
        <ExpoAv.Video 
          source={{ uri: props.video.videoUrl }}
          shouldPlay
          style={[fullSize ? styles.videoLarge : styles.videoSmall]}
          ref={videoRef}
          
        /> 
        {fullSize && renderControl()}
      </Native.TouchableOpacity>

      <Native.View style={[styles.innerContainer, fullSize ? styles.innerContainerLarge : styles.innerContainerSmall]}>
        <Native.View style={[styles.textContainer, fullSize ? styles.textContainerLarge : styles.textContainerSmall]}>
          <Native.Text style={[styles.title, fullSize && styles.titleLarge]}>{props.video.title}</Native.Text>
          <Native.Text style={[styles.subTitle, fullSize && styles.subTitleLarge]}>{props.video.creatorName}</Native.Text>
        </Native.View>
        {!fullSize && renderControl()}
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
  controlContainerSmall: {

  },
  controlContainerLarge: {
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  controlMinimize: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  videoButton: {
    position: 'relative'
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
  titleLarge: {
    fontSize: 21
  },
  subTitle: {
    color: 'lightgrey'
  },
  subTitleLarge: {
    fontSize: 16
  }
})

export default VideoPlayer