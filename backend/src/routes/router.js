// importing
import express from 'express'
import { homePage } from '../controllers/controller.js'

const router = express.Router()

router.get('/', homePage)

export default router
