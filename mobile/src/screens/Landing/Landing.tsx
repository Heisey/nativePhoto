
import * as React from 'react'
import * as Native from 'react-native'
import * as ReactStack from '@react-navigation/stack'

import * as Assets from 'assets'
import * as Core from 'core'
import * as Hooks from 'hooks'
import Button from 'components/base/Button'

export interface LandingProps {
  
}

const Landing: React.FC<LandingProps> = (props) => {
  const navigation = Hooks.common.useNavigation<ReactStack.StackNavigationProp<Core.I.RootStack, 'auth'>>()

  return (
    <Native.View style={styles.container}>
      <Native.ScrollView>
        <Native.View >
          <Native.Image
            source={Assets.images.logo}
            resizeMode='contain'
            style={styles.logo}
          />
          <Native.Image
            source={Assets.images.cards}
            resizeMode='contain'
            style={styles.heroImage}
          />
          <Native.View style={styles.heroInfo}>
            <Native.Text style={styles.heroText}>
              Discover Endless Possibilites with{' '}
              <Native.Text style={styles.heroTextHighlight}>Aora</Native.Text>
            </Native.Text>
            <Native.Image
              source={Assets.images.path}
              style={styles.heroTextUnderline}
              resizeMode='contain'
            />
          </Native.View>

          <Native.Text style={styles.subText}>
            Where creativity meets innovation: embark on a journey of limitless exploration with Auro
          </Native.Text>

          <Button 
            style={styles.cta}
            onPress={() => navigation.navigate('auth')}
          >
            Continue to Login
          </Button>
        </Native.View>
      </Native.ScrollView>
    </Native.View>
  )
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '',
    backgroundColor: 'black'
  },
  body: {
    paddingHorizontal: 10,
    flex: 1,
    height: '100%'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  logo: {
    height: 84,
    width: 130,
    marginHorizontal: 'auto'
  },
  heroInfo: {
    paddingHorizontal: 42,
    position: 'relative',
  },
  heroImage: {
    height: 350,
    maxWidth: 300,
    marginHorizontal: 'auto'
    // width: '100%'
  },
  heroText: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white'
  },
  heroTextHighlight: {
    color: 'orange',
    fontSize: 28
  },
  heroTextUnderline: {
    position: 'absolute',
    width: 136,
    height: 15,
    bottom: -8,
    right: 24
  },
  subText: {
    color: 'lightgrey',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 25,
  },
  cta: {
    marginTop: 45
  }
})

export default Landing