
import * as Query from '@tanstack/react-query'

import * as Core from 'core'

import * as Api from '../functions'

export const useCreate = () => {
  const videoApi = Api.useVideo()

  return Query.useMutation({
    mutationFn: videoApi.create
  })
}

export const useGet = (args: Pick<Core.I.VideoInfo, 'creatorId' | 'title'>) => {
  const videoApi = Api.useVideo()

  return Query.useQuery({
    queryFn: () => videoApi.get(args),
    queryKey: ['video', ...Object.values(args)]
  })
}