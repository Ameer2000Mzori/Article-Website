// importing
import express from 'express'
import 'dotenv/config'
import router from './routes/router.js'

// starting and creating running and using data

const app = express()
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

// server setup
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
