
import * as Core from 'core'

import * as Provider from '../Provider'


export const useVideo = () => {
  const instance = Provider.useAxios()

  const create = async () => await instance.post<Core.I.ServerRequest<Core.I.VideoRecord>>('/video')

  const get = async (args: Pick<Core.I.VideoInfo, 'creatorId' | 'title'>) => await instance.get<Core.I.ServerRequest<Core.I.VideoRecord[]>>('/videos')

  return {
    create,
    get
  }
}
