
import * as React from 'react'
import * as Native from 'react-native'

export interface SearchBarProps {
  style?: Native.StyleProp<Native.ViewStyle>
  title: string
  onChangeTitle: (args: string) => void
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <Native.View style={[styles.container, props.style]}>
      <Native.TextInput 
        placeholder='search'
        placeholderTextColor='white'
        style={styles.input}
        value={props.title}
        onChangeText={props.onChangeTitle}
      />
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    backgroundColor: '#070826',
    padding: 8,
    borderRadius: 12.5,
    borderColor: 'black',
    borderWidth: 2
  },
  input: {
    fontSize: 18
  }
})

export default SearchBar