
import * as React from 'react'
import * as Native from 'react-native'

import * as Assets from 'assets'
import SearchBar from 'components/custom/SearchBar'

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Native.SafeAreaView style={styles.container}>
      <Native.View style={styles.innerContainer}>
        <Native.View>
          <Native.View style={styles.header}>
            <Native.View>
              <Native.Text style={[styles.headerTextSmall]}>Welcome back</Native.Text>
              <Native.Text style={[styles.headerTextLarge]}>Archie Puppy</Native.Text>
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
          <Native.FlatList
            data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
            keyExtractor={(dataSet) => `${dataSet.id}`}
            renderItem={dataSet => (
              <Native.Text style={styles.headerTextLarge}>{dataSet.item.id}</Native.Text>
            )}
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
  headerTextSmall: {
    color: 'lightgrey',
    fontSize: 18
  },
  headerTextLarge: {
    color: 'white',
    fontSize: 28
  },
  logo: {
    height: 40
  },
  search: {
    marginBottom: 15
  }
})

export default Home