
import * as Utils from '../utilities'

export const create = Utils.catchAsync(async (req, res, next) => {
  console.log('puppy body, ', req.body)
  res.json({
    records: req.body
  })
})

export const get = Utils.catchAsync(async (req, res, next) => {

  res.json({
    records: 'puppies get'
  })
})