
import * as React from 'react'
import * as Native from 'react-native'

import * as Core from 'core'

export interface VideoListHorizontalProps {
  data?: Core.I.VideoRecord[]
  onPressVideo: (args: Core.I.VideoRecord) => void
}

const VideoListHorizontal: React.FC<VideoListHorizontalProps> = (props) => {

  const Item = (args: Core.I.VideoRecord) => (
    <Native.TouchableOpacity onPress={() => props.onPressVideo(args)}>
      <Native.Image
        src={args.thumbnail}
        resizeMode='contain'
        style={styles.itemImage}
      />
    </Native.TouchableOpacity>
  )
  return (
    <Native.View style={styles.container}>
      <Native.FlatList
        horizontal
        data={props.data || []}
        keyExtractor={dataSet => `${dataSet.id}`}
        renderItem={dataSet => <Item { ...dataSet.item } />}
      />
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    height: 170,
    width: 120
  }
})

export default VideoListHorizontal