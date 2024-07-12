
import axios from 'axios'

import * as Core from 'core'
import * as Services from 'services'

export const makeRequest = axios.create({
  baseURL: Core.config.urls.SERVER
})

makeRequest.interceptors.request.use(async (config) => {
  if (!Services.firebase.auth.currentUser) {
    delete config.headers.Authorization
    return config
  }
  const tokenRes = await Services.firebase.auth.currentUser?.getIdTokenResult()
  if (tokenRes?.token) config.headers.Authorization= `Bearer ${tokenRes.token}`
  else delete config.headers.Authorization
  return config
})