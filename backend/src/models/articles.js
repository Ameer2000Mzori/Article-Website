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
  { timestamps: true } // Corrected option name
)

const article = mongoose.model('article', articleSchema)

export { article }
