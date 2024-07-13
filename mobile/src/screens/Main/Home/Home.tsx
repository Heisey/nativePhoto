
import * as React from 'react'
import * as Native from 'react-native'

import * as Api from 'api'

import * as Assets from 'assets'
import * as Hooks from 'hooks'
import Loading from 'components/custom/Loading'
import SearchBar from 'components/custom/SearchBar'
import VideoList from 'components/custom/VideoList'

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const auth = Hooks.common.useAuth()
  const user = Api.user.useGetByEmail(auth.user?.email)

  if (auth.isLoading || user.isLoading) return <Loading />

  return (
    <Native.SafeAreaView style={styles.container}>
      <Native.View style={styles.innerContainer}>
        <Native.View>
          <Native.View style={styles.header}>
            <Native.View>
              <Native.Text style={[styles.headerTextSmall]}>Welcome back</Native.Text>
              <Native.Text style={[styles.headerTextLarge]}>{user.data?.records?.username}</Native.Text>
            </Native.View>
            <Native.Image 
              source={Assets.images.logoSmall}
              resizeMode='contain'
              style={styles.logo}
            />
          </Native.View>
        </Native.View>
        <SearchBar style={styles.search} />

        <Native.View>
          <VideoList 
            data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
            headerList={
              <Native.View>
                <VideoList 
                  data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
                  horizontal
                />
              </Native.View>
            }
          />
        </Native.View>

      </Native.View>
    </Native.SafeAreaView>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  innerContainer: {
    padding: 12
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 15
  },
  headerTextLarge: {
    color: 'white',
    fontSize: 28
  },
  headerTextSmall: {
    color: 'lightgrey',
    fontSize: 18
  },
  logo: {
    height: 40
  },
  search: {
    marginBottom: 15
  }
})

export default Home