
import * as Core from 'core'

import * as Provider from '../Provider'

export const useUser = () => {

  const instance = Provider.useAxios()

  const get = async () => (await instance.get<Core.I.ServerRequest<Core.I.UserRecord>>(`/user`)).data.records
  
  const create = async (args: Core.I.Credential & Pick<Core.I.UserInfo, 'username'>) => {
    const url = `${Core.config.urls.SERVER}/user`
    return (await instance.post<Core.I.ServerRequest<Core.I.UserRecord>>(`/user`, args)).data
  }

  return {
    create,
    get
  }
}