export const homePage = (req, res) => {
  res.send('Hello World!')
}

export const ArticlesPage = (req, res) => {
  res.send([
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
  ])
}
