
import * as Core from 'core'
import * as Utils from '../utilities'

export const create = async (args: Core.I.Credential) => (await Utils.server.makeRequest.post<Core.I.ServerRequest<Core.I.UserRecord>>(`/user`, args)).data.records

export const get = async () => (await Utils.server.makeRequest.get<Core.I.ServerRequest<string>>('/user',)).data.records