
import * as Models from '../models'
import * as Utils from '../utilities'

export const create = Utils.catchAsync(async (req, res, next) => {
  if (!req.body.firebaseId) return res.status(500).json({ status: 'failed', err: 'server timming' })

  const existing = await Models.User.findOne({ auth0Id: req.body.auth0id })

  if (existing) return res.status(500).json({ status: 'failed', err: 'user already exists'})

  const records = await new Models.User({ ...req.body }).save()

  res.status(201).json({ records })
})

export const getByEmail = Utils.catchAsync(async (req, res, next) => {
  const records = await Models.User.findOne({ email: req.params.email })

  if (!records) return res.status(404).json({ message: 'Could not find record' })
  
  res.status(200).json({ records })
})