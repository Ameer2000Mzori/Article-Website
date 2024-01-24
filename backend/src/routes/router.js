// importing
import express from 'express'
import {
  homePage,
  ArticlesPage,
  createArticle,
  removeArticle,
} from '../controllers/controller.js'

const router = express.Router()

router.get('/', homePage)

router.get('/Articles', ArticlesPage)

router.post('/Article/create', createArticle)

router.delete('/Article/remove', removeArticle)

export default router
