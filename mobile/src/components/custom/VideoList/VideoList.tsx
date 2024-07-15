
import * as React from 'react'
import * as Native from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

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
      <Native.View style={styles.itemFooter}>
        <Native.Image
          style={styles.itemAvatar}
          src={args.creatorAvatar}
          resizeMode='contain'
        />
        <Native.View style={styles.itemTextContainer} >
          <Native.Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode='tail'>{args.title}</Native.Text>
          <Native.Text style={styles.itemCreator}>{args.creatorName}</Native.Text>
        </Native.View>
        <Icon name='ellipsis-vertical' style={styles.menu} color='white' size={30} />
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
    alignItems: 'flex-start',
    marginBottom: 15
  },
  itemImage: {
    height: 200,
    width: '100%'
  },
  itemTitle: {
    paddingTop: 5,
    color: 'white',
    fontSize: 22
  },
  itemAvatar: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 30
  },
  itemFooter: {
    padding: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#04063d',
    width: '100%'
  },
  itemCreator: {
    color: 'lightgrey',
    fontSize: 18
  },
  itemTextContainer: {
    width: Native.Dimensions.get('window').width - 120
  },
  menu: {
    // fi: 'white'
    marginTop: 15
  }
})

export default VideoList