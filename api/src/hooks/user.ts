
import * as Query from '@tanstack/react-query'

import * as Api from '../functions'

export const useCreateUser = () => {
  const client = Query.useQueryClient()
  const userApi = Api.useUser()

  return Query.useMutation({
    mutationFn: userApi.create,
    onSuccess: (args) => {
      client.invalidateQueries({
        queryKey: ['user', args?.records?.email]
      })
    }
  }) 
}

export const useGet = () => {
  const userApi = Api.useUser()

  return Query.useQuery({
    queryKey: ['user'],
    queryFn: userApi.get
  })
}