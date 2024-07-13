
import * as Core from 'core'

import * as Provider from '../Provider'

export const useVideo = () => {
  const instance = Provider.useAxios()

  const create = async () => await instance.post<Core.I.ServerRequest<Core.I.VideoRecord>>('/video')

  return {
    create
  }
}