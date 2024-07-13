
import * as Models from '../models'
import * as Utils from '../utilities'
import * as Seed from '../seed'

export const create = Utils.catchAsync(async (req, res, next) => {
  if (!req.body.creatorId) return res.status(500).json({ status: 'failed', err: 'need a creator id' })
  
  const records = await new Models.Video({ ...Seed.createVideo(req.body.creatorId) })

  res.status(201).json({ records })
})