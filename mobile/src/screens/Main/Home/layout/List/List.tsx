
import * as React from 'react'
import * as Native from 'react-native'

import * as Core from 'core'

import VideoList from 'components/custom/VideoList'

export interface ListProps {
  mainVideos?: Core.I.VideoRecord[]
  highlightVideos?: Core.I.VideoRecord[]
}

const List: React.FC<ListProps> = (props) => {

  const HighLights = () => (
    <Native.View>
      <VideoList 
        data={props.highlightVideos}
        horizontal
      />
    </Native.View>
  )
  return (
    <VideoList 
      data={props.mainVideos}
      headerList={(props.highlightVideos || []).length > 0 ? <HighLights /> : undefined}
    />
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default List