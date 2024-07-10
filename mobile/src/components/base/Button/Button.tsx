
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
      style={[styles.container, props.style, props.disabled && styles.disabled]}
    >
      <Native.Text style={[styles.text, props.textStyles, props.disabled &&  styles.disabledText]}>
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
  },
  disabled: {
    backgroundColor: '#17171f'
  },
  disabledText: {
    color: '#5d5d75'
  }
})

export default Button