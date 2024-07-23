
import * as React from 'react'
import * as Native from 'react-native'

import * as Api from 'api'
import * as Core from 'core'

import * as Hooks from 'hooks'
import Loading from 'components/custom/Loading'
import SearchBar from 'components/custom/SearchBar'
import VideoPlayer from 'components/custom/VideoPlayer'

import Header from './layout/Header'
import List from './layout/List'

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const auth = Hooks.common.useAuth()
  const user = Api.user.useGetByEmail(auth.user?.email)
  const [title, titleHandler] = React.useState('')
  const videos = Api.video.useGet({ title })
  const [selectedVideo, selectedVideoHandler] = React.useState<Core.I.VideoRecord | undefined>(undefined)

  if (auth.isLoading || user.isLoading) return <Loading />




  return (
    <Native.SafeAreaView style={styles.container}>
      <Native.View style={styles.innerContainer}>
        <Header user={user.data?.records} />
        <SearchBar title={title} onChangeTitle={titleHandler} style={styles.search} />
        {videos.isLoading && <Loading />}
        {!videos.isLoading && <List onSelectVideo={selectedVideoHandler} mainVideos={videos.data?.data.records} highlightVideos={videos.data?.data.records} />}
      </Native.View>
      {selectedVideo && <VideoPlayer onClose={() => selectedVideoHandler(undefined)} video={selectedVideo} />}
    </Native.SafeAreaView>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    position: 'relative'
  },
  innerContainer: {
    padding: 12
  },
  search: {
    marginBottom: 15
  }
})

export default Home
