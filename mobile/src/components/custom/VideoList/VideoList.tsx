
import * as React from 'react'
import * as Native from 'react-native'

import Empty from 'components/custom/Empty'

export interface VideoListProps {
  horizontal?: boolean
  headerList?: React.ReactElement
  data?: {id: string}[]
}

const VideoList: React.FC<VideoListProps> = (props) => {
  return (
    <Native.FlatList 
      data={props.data || []}
      keyExtractor={(dataSet) => `${dataSet.id}`}
      horizontal={props.horizontal}
      renderItem={dataSet => (
        <Native.Text style={styles.headerTextLarge}>{dataSet.item.id}</Native.Text>
      )}
      ListHeaderComponent={props.headerList}
      ListEmptyComponent={
        <Empty 
          text='No Videos Found'
          subText='Be the first one to upload a video' 
        />
      }
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