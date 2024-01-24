// importing
import express from 'express'
import 'dotenv/config'

// starting and creating running and using data
const PORT = process.env.PORT || 3000
const router = express.Router()
const app = express()
app.use(router)

// routes HOME PAGE
router.get('/', (req, res) => {
  res.send('THIS IS HOME PAGE artical website')
})

// server setup
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
