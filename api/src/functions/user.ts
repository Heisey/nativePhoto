
import * as Core from 'core'

import * as Provider from '../Provider'

export const create = async (args: Core.I.Credential & Pick<Core.I.UserInfo, 'username'>) => {
  const instance = Provider.useAxios()
  return (await instance.post<Core.I.ServerRequest<Core.I.UserRecord>>(`/user`, args)).data
}

export const get = async () => {
  const instance = Provider.useAxios()
  return (await instance.get<Core.I.ServerRequest<Core.I.UserRecord>>('/user',)).data.records
}