
import mongoose from 'mongoose'

import * as Core from 'core'


interface VideoSchema extends mongoose.Document, Omit<Core.I.VideoInfo, 'creatorId'> {
  creatorId: mongoose.Types.ObjectId
}

const VideoSchema = new mongoose.Schema<VideoSchema>({
  thumbnail: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

VideoSchema.set('toJSON', {
  transform: function(doc, rec) {
    rec.id = rec._id
    delete rec._id
    return rec
  },
  virtuals: true
})

export default mongoose.model('Video', VideoSchema)
