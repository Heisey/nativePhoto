
import * as React from 'react'
import * as Native from 'react-native'
import * as ExpoAv from 'expo-av'

import * as Api from 'api'
import * as Core from 'core'

import * as Hooks from 'hooks'
import Loading from 'components/custom/Loading'
import SearchBar from 'components/custom/SearchBar'

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

  const renderVideoPlayer = (video: Core.I.VideoRecord) => (
    <Native.View style={styles.videoContainer}>
      <ExpoAv.Video 
        source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        shouldPlay
        style={styles.video}
      /> 
      <Native.View>
        <Native.View>
          <Native.Text style={{ color: 'white'}}>puppies</Native.Text>
          <Native.Text></Native.Text>
        </Native.View>
      </Native.View>
    </Native.View>
  )


  return (
    <Native.SafeAreaView style={styles.container}>
      <Native.View style={styles.innerContainer}>
        <Header user={user.data?.records} />
        <SearchBar title={title} onChangeTitle={titleHandler} style={styles.search} />
        {videos.isLoading && <Loading />}
        {!videos.isLoading && <List onSelectVideo={selectedVideoHandler} mainVideos={videos.data?.data.records} highlightVideos={videos.data?.data.records} />}
      </Native.View>
      {selectedVideo && renderVideoPlayer(selectedVideo)}
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
  },
  videoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  video: {
    width: 107,
    height: 60,
  }
})

export default Home
