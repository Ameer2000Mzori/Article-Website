import { Timestamp } from 'mongodb'
import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
)

const article = mongoose.model('article', articleSchema)

export default { article }
