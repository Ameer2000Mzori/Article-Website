import { article } from '../models/articles.js'

export const homePage = (req, res) => {
  res.send('Hello World! Articles')
}

export const ArticlesPage = (req, res) => {
  article
    .find()
    .sort({
      createAt: -1,
    })
    .then((result) => {
      res.status(200).json(result)
    })
}

export const createArticle = (req, res) => {
  const { user, title, story } = req.body

  // mongo db save
  const newArticle = new article({
    id: Math.random().toString(26).slice(2),
    user,
    title,
    story,
  })

  newArticle.save().then((result) => res.status(200).json(result))
}

// deleteing items with mango db
export const removeArticle = async (req, res) => {
  const { id } = req.params

  try {
    console.log('Attempting to delete article with ID:', id)

    const result = await article.deleteOne({ _id: id })

    console.log('Deletion result:', result)

    if (result.deletedCount > 0) {
      res.status(200).json({ message: 'Article deleted successfully' })
    } else {
      res.status(404).json({ message: `Article with id ${id} not found` })
    }
  } catch (error) {
    console.error('Error deleting article:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

//  old way

// let articlesData = [
//   {
//     user: 'ameer',
//     title: 'there was a man...',
//     story:
//       'there was a man called ameer, he wanted to become a full stack developer',
//   },
//   {
//     user: 'ameer mzori',
//     title: 'story about me',
//     story: 'hi im ameer mzori',
//   },
//   {
//     user: 'ameer',
//     title: 'about my brother',
//     story: 'hi im ameer and my brother called atro or ameen',
//   },
// ]

// normal way to save data in self
// const newArticle = {
//   id: Math.random().toString(26).slice(2),
//   user,
//   title,
//   story,
// }
// articlesData.push(newArticle)
// console.log('our new article:', newArticle)
// console.log('our  articles:', articlesData)

// old way of deleteing items
// export const removeArticle = (req, res) => {
//   const { id } = req.params

//   const articleExisit = articlesData.some((article) => article.id === id)

//   if (articleExisit) {
//     articlesData = article.find((article) => article.id !== id)
//     res.status(200).json(articlesData)
//   } else {
//     res.status(404).json({ message: `video with id ${id} does not exist` })
//   }
// }
