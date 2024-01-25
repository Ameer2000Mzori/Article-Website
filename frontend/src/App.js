import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [articles, setArticle] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Articles')
      const data = await response.json()
      setArticle(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>our articles</h1>
      <ul>
        {articles.map((article) => (
          <>
            <p>user : {article.user}</p>
            <p>title : {article.title}</p>
            <p>story : {article.story}</p>
          </>
        ))}
      </ul>
    </>
  )
}

export default App
