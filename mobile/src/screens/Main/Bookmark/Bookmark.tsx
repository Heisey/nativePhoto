
import * as React from 'react'
import * as Native from 'react-native'

export interface BookmarkProps {}

const Bookmark: React.FC<BookmarkProps> = (props) => {
  return (
    <Native.View style={styles.container}>
      <Native.Text>Bookmark</Native.Text>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Bookmark