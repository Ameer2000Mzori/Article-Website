// importing
import express from 'express'
import {
  homePage,
  ArticlesPage,
  createArticle,
} from '../controllers/controller.js'

const router = express.Router()

router.get('/', homePage)

router.get('/articles', ArticlesPage)

router.post('/articles/create', createArticle)

export default router
