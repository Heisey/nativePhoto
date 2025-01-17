
import mongoose from 'mongoose'

import * as Core from 'core'

import * as Models from '../models'
import * as Utils from '../utilities'
import * as Seed from '../seed'

export const create = Utils.catchAsync(async (req, res, next) => {
  if (!req.body.creatorId) return res.status(500).json({ status: 'failed', err: 'need a creator id' })
  
  const records = await new Models.Video({ ...Seed.createVideo(req.body.creatorId) })

  res.status(201).json({ records })
})

export const get = Utils.catchAsync(async (req, res, next) => {

  const aggregate: mongoose.PipelineStage[] = []

  if (req.query.title) aggregate.push({ $match: { title:  { $regex: req.query.title, $options: 'i' }}})

  aggregate.push({ $lookup: { from: 'users', localField: 'creatorId', foreignField: '_id', as: 'creator' }})
  aggregate.push({ $unwind: '$creator' })

  if (req.query.creatorName) aggregate.push({ $match: { 'creator.username': { $regex: req.query.creatorName, $options: 'i' }}})

  aggregate.push({ $project: {  id: '$_id', _id: 0, thumbnail: 1, videoUrl: 1, title: 1,  creatorName: '$creator.username', creatorAvatar: '$creator.avatar' } })
  aggregate.push({ $limit: 20 })

  const records = await Models.Video.aggregate(aggregate)

  res.status(200).json({
    records
  })
})

export const getById = Utils.catchAsync(async (req, res, next) => {
  const records = await Models.Video.findById(req.params.title)

  if (!records) return res.status(404).json({ status: 'failed', err: 'could not find record' })
  
  res.status(200).json({ records })
})