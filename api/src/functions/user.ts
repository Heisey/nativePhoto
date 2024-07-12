
import * as Core from 'core'

import * as Provider from '../Provider'

export const useUser = () => {

  const instance = Provider.useAxios()

  const get = async (args: string) => (await instance.get<Core.I.ServerRequest<Core.I.UserRecord>>(`/user`, { params: args })).data
  
  const create = async (args: Core.I.Credential & Pick<Core.I.UserInfo, 'username'>) => (await instance.post<Core.I.ServerRequest<Core.I.UserRecord>>(`/user`, args)).data

  return {
    create,
    get
  }
}