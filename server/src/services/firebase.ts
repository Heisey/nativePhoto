
import * as firebase from 'firebase-admin/app'
import * as firebaseAuth from 'firebase-admin/auth'

import config from 'core/src/config/mergedConfig.json'

const app = firebase.initializeApp({
  credential: firebase.cert(config.firebase.server as firebase.ServiceAccount)
})

export const auth = firebaseAuth.getAuth(app)