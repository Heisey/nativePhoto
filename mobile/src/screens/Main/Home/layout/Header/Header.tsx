
import * as React from 'react'
import * as Native from 'react-native'

import * as Assets from 'assets'
import * as Core from 'core'

export interface HeaderProps {
  user?: Core.I.UserRecord
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Native.View style={styles.header}>
      <Native.View>
        <Native.Text style={[styles.headerTextSmall]}>Welcome back</Native.Text>
        <Native.Text style={[styles.headerTextLarge]}>{props.user?.username}</Native.Text>
      </Native.View>
      <Native.Image 
        source={Assets.images.logoSmall}
        resizeMode='contain'
        style={styles.logo}
      />
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
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
  }
})

export default Header