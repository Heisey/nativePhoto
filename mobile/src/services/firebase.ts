
import * as firebase from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// Typescript error fix
const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence

// const config: firebase.FirebaseOptions = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// }

const config = {
  apiKey: "AIzaSyCpB5mZf8eG0uXV7Rmqe01nNeDfubePUXM",
  authDomain: "nousimage-e4d1e.firebaseapp.com",
  projectId: "nousimage-e4d1e",
  storageBucket: "nousimage-e4d1e.appspot.com",
  messagingSenderId: "495434832335",
  appId: "1:495434832335:web:b14d8f80e70cfaa43a9aba"
}

const instance = firebase.initializeApp(config)

// const clearStorage = async () => {
//   try {
//     ReactNativeAsyncStorage.clear()
//     return 
//   } catch(err) {
//     console.log('clear error, ', err)
//   }
// }

// clearStorage()

export const auth = firebaseAuth.initializeAuth(instance, {
  persistence: reactNativePersistence(ReactNativeAsyncStorage)
})



// export const auth = firebase.auth

// export const googleProvider = new firebaseAuth.GoogleAuthProvider()
