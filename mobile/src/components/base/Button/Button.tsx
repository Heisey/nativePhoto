
import * as React from 'react'
import * as Native from 'react-native'

export interface ButtonProps extends Native.TouchableOpacityProps {
  textStyles?: Native.StyleProp<Native.TextStyle>
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Native.TouchableOpacity
      { ...props }
      activeOpacity={0.7}
      style={[styles.container, props.style]}
    >
      <Native.Text style={[styles.text, props.textStyles]}>
        {props.isLoading && 'Loading...'}
        {!props.isLoading && props.children}
      </Native.Text>
    </Native.TouchableOpacity>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    minHeight: 62
  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  }
})

export default Button