
import * as Utils from '../utilities'

export const create = Utils.catchAsync(async (req, res, next) => {

  res.json({
    records: 'puppies'
  })
})

export const get = Utils.catchAsync(async (req, res, next) => {

  res.json({
    records: 'puppies get'
  })
})