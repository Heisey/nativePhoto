
import * as Native from 'react-native'

export default Native.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    marginBottom: 25
    // justifyContent: 'center'
  },
  title: {
    // fontSize: 68,
    marginTop: 20,
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  },
  logo: {
    width: 135,
    height: 35
  },
  inputContainer: {
    marginBottom: 45
  },
  inputLabel: {
    marginBottom: 12
  },
  input: {
    color: 'white',
  },
  signUpContainer: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center'
  },
  signUpButton: {
    marginTop: -3,
    paddingLeft: 8
  },
  signUpLink: {
    color: 'orange'
  },
  signUpMessage: {
    color: 'white'
  }
})