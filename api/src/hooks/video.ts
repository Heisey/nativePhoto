
import * as Query from '@tanstack/react-query'

import * as Core from 'core'

import * as Api from '../functions'

export const useCreate = () => {
  const videoApi = Api.useVideo()

  return Query.useMutation({
    mutationFn: videoApi.create
  })
}

export const useGet = (args?: Partial<Pick<Core.I.VideoInfo, 'creatorId' | 'title'>>) => {
  const videoApi = Api.useVideo()
  const params = args ? Object.values(args!) : []
  return Query.useQuery({
    queryFn: () => videoApi.get(args),
    queryKey: ['video', 'search', ...params]
  })
}

export const useGetById = (args?: Pick<Core.I.VideoRecord, 'id'>) => {
  const videoApi = Api.useVideo()
  return Query.useQuery({
    queryFn: () => videoApi.getById(args!),
    queryKey: ['video', args],
    enabled: !!args
  })
}