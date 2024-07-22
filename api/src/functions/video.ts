
import * as Core from 'core'

import * as Provider from '../Provider'


export const useVideo = () => {
  const instance = Provider.useAxios()

  const create = async () => await instance.post<Core.I.ServerRequest<Core.I.VideoRecord>>('/videos')

  const get = async (args?: Partial<Pick<Core.I.VideoInfo, 'creatorId' | 'title'>>) => await instance.get<Core.I.ServerRequest<Core.I.VideoRecord[]>>('/videos', { params: args })

  const getById = async (args: Pick<Core.I.VideoRecord, 'id'>) => await instance.get<Core.I.ServerRequest<Core.I.VideoRecord>>(`/videos/${args}`)

  return {
    create,
    get,
    getById
  }
}
