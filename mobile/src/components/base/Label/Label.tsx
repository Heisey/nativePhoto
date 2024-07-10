
import * as React from 'react'
import * as Native from 'react-native'

export interface LabelProps {
  label: string
  field: React.ReactNode
  style?: Native.StyleProp<Native.ViewStyle>
}

const Label: React.FC<LabelProps> = (props) => {
  return (
    <Native.View style={[styles.container, props.style]}>
      <Native.Text style={styles.text}>{props.label}</Native.Text>
      <Native.View style={styles.field}>
        {props.field}
      </Native.View>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'blue'
  },
  text: {
    color: 'white',
    marginBottom: 10
    // backgroundColor: 'green'
  },
  field: {
    // flex: 1,
    // height: 16,
    backgroundColor: '#070826',
    // backgroundColor: 'pink',
    padding: 8,
    borderRadius: 12.5,
    borderColor: 'black',
    borderWidth: 2,
    

  }
})

export default Label