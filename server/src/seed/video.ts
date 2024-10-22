
import { faker } from '@faker-js/faker'
import mongoose from 'mongoose'

import * as Models from '../models'

export const createVideo = async (id: mongoose.Types.ObjectId) => {
  const record = await new Models.Video({
    thumbnail: faker.image.urlLoremFlickr(),
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: faker.word.words({ count: { min: 2, max: 6 }}),
    creatorId: id
  }).save()


  return record
}
