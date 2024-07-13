
import mongoose from "mongoose";

import * as Core from 'core'

const UserSchema = new mongoose.Schema<Core.I.UserRecord>({
  email: {
    type: String,
    require: true,
    unique: true
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  firebaseId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

UserSchema.set('toJSON', {
  transform: function(doc, rec) {
    rec.id = rec._id
    delete rec._id
    return rec
  },
  virtuals: true
})

export default mongoose.model('User', UserSchema)
