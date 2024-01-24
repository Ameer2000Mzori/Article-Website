// importing
import express from 'express'
import 'dotenv'

// starting and creating running and using data
const app = express()
const PORT = process.env.PORT || 4000

// ports
app.get('/', (req, res) => {
  res.send('THIS IS HOME PAGE')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
