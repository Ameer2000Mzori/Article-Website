let articlesData = [
  {
    user: 'ameer',
    title: 'there was a man...',
    story:
      'there was a man called ameer, he wanted to become a full stack developer',
  },
  {
    user: 'ameer mzori',
    title: 'story about me',
    story: 'hi im ameer mzori',
  },
  {
    user: 'ameer',
    title: 'about my brother',
    story: 'hi im ameer and my brother called atro or ameen',
  },
]

export const homePage = (req, res) => {
  res.send('Hello World! Articles')
}

export const ArticlesPage = (req, res) => {
  res.send(articlesData)
}

export const createArticle = (req, res) => {
  const { user, title, story } = req.body

  const newArticle = {
    id: Math.random().toString(26).slice(2),
    user,
    title,
    story,
  }

  articlesData.push(newArticle)
  console.log('our new article:', newArticle)
  console.log('our  articles:', articlesData)
}

export const removeArticle = (req, res) => {
  const { id } = req.params

  const articleExisit = articlesData.some((article) => article.id === id)

  if (articleExisit) {
    articlesData = articlesData.filter((article) => article.id !== id)
    res.status(200).json(articlesData)
    res.status(200).json({ message: `video with id ${id} removed` })
  } else {
    res.status(404).json({ message: `video with id ${id} does not exist` })
  }
}
