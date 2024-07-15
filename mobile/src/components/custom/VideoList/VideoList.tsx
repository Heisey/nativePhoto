
import * as React from 'react'
import * as Native from 'react-native'

import * as Core from 'core'

import Empty from 'components/custom/Empty'

export interface VideoListProps {
  horizontal?: boolean
  headerList?: React.ReactElement
  data?: Core.I.VideoRecord[]
}

const VideoList: React.FC<VideoListProps> = (props) => {

  const Item = (args: Core.I.VideoRecord) => (
    <Native.View style={styles.item}>
      <Native.Image
        src={args.thumbnail}
        resizeMode='contain'
        style={styles.itemImage}
      />
      <Native.View>
        <Native.Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode='tail'>{args.title}</Native.Text>
        <Native.Text style={styles.itemCreator}>{args.creatorName}</Native.Text>
      </Native.View>
    </Native.View>
  )
  return (
    <Native.FlatList 
      data={props.data || []}
      keyExtractor={(dataSet) => `${dataSet.id}`}
      horizontal={props.horizontal}
      renderItem={dataSet => <Item { ...dataSet.item } />}
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

  item: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  itemImage: {
    height: 80,
    width: 65,
    marginRight: 10
  },
  itemTitle: {
    paddingTop: 5,
    color: 'white',
    fontSize: 22
  },
  itemCreator: {
    color: 'lightgrey',
    fontSize: 18
  }
})

export default VideoList