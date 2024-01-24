// importing
import express from 'express'
import { homePage, ArticlesPage } from '../controllers/controller.js'

const router = express.Router()

router.get('/', homePage)

router.get('/Articles', ArticlesPage)

export default router
