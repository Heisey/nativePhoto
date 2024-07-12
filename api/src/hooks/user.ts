
import * as Query from '@tanstack/react-query'

import * as Api from '../functions'
import * as Core from 'core'

export const useCreateUser = () => {
  const client = Query.useQueryClient()
  const userApi = Api.useUser()
  
  return Query.useMutation({
    mutationFn: (args: Core.I.Credential & Pick<Core.I.UserInfo, 'username'>) => {
      console.log('puppies create', args)
      return userApi.create(args)
    },
    onSuccess: (args) => {
      client.invalidateQueries({
        queryKey: ['user', args?.records?.email]
      })
    }
  }) 
}

export const useGetByEmail = (args?: string | null) => {
  const userApi = Api.useUser()

  return Query.useQuery({
    queryKey: ['user', args],
    queryFn: () => userApi.getByEmail(args!),
    enabled: !!args
  })
}