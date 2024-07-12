
import * as React from 'react'
import * as Native from 'react-native'

export interface VideoListProps {
  horizontal?: boolean
  headerList?: React.ReactElement
}

const VideoList: React.FC<VideoListProps> = (props) => {
  return (
    <Native.FlatList 
      data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
      keyExtractor={(dataSet) => `${dataSet.id}`}
      horizontal={props.horizontal}
      renderItem={dataSet => (
        <Native.Text style={styles.headerTextLarge}>{dataSet.item.id}</Native.Text>
      )}
      ListHeaderComponent={props.headerList}
    />
  )
}

const styles = Native.StyleSheet.create({
  headerTextLarge: {
    color: 'white',
    fontSize: 28
  },
})

export default VideoList