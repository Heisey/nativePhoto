
import * as Query from '@tanstack/react-query'

import * as Api from '../functions'

export const useCreateUser = () => {
  const client = Query.useQueryClient()

  return Query.useMutation({
    mutationFn: Api.user.create,
    onSuccess: (args) => {
      client.invalidateQueries({
        queryKey: ['user', args?.records?.email]
      })
    }
  }) 
}

export const useGet = () => Query.useQuery({
  queryKey: ['user'],
  queryFn: Api.user.get
})