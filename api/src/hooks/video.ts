
import * as Query from '@tanstack/react-query'

import * as Api from '../functions'

export const useCreate = () => {
  const videoApi = Api.useVideo()

  return Query.useMutation({
    mutationFn: videoApi.create
  })
}