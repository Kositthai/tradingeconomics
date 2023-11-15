import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import DropdownCountries from '../src/components/DropdownCountries'

function App() {
  const [news, setNews] = useState([])
  const [image, setImage] = useState(null)

  useEffect(() => {
    const handleFetch = async () => {
      const response = await axios.get('http://localhost:5000/news')
      setNews(response.data)
    }

    const handleFetchImage = async () => {
      const response = await axios.get('http://localhost:5000/unsplash')
      setImage(response.data)
    }
    handleFetch()
    handleFetchImage()
  }, [])

  return (
    <>
      <Navbar />
      <DropdownCountries />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          margin: '5rem 5rem 5rem 10rem',
        }}
      >
        {news.length > 0 &&
          news?.map((item, index) => {
            return <NewsCard news={item} index={index} image={image} />
          })}
      </div>
    </>
  )
}

export default App
