// importing
import express from 'express'
import 'dotenv/config'

// starting and creating running and using data
const PORT = process.env.PORT || 3000
const app = express()

// routes
app.get('/', (req, res) => {
  res.send('THIS IS HOME PAGE')
})

// server setup
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
