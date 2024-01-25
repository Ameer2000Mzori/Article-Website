import mongoose from 'mongoose'
import 'dotenv/config'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@article-app.1gvfhmj.mongodb.net/`

const mongoConnect = (cb) => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      cb()
    })
    .catch((error) => {
      console.log(error)
    })
}

export default mongoConnect
