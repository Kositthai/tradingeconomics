import './App.css'
import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import DropdownCountries from '../src/components/DropdownCountries'
import NewsItem from './components/NewsItem'

const ContentWrapper = styled.div`
  margin: 0 10rem 0 12rem;
`
const Title = styled.h1`
  color: #333333;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`

function App() {
  const [news, setNews] = useState([])
  const [image, setImage] = useState([])
  const [country, setCountry] = useState('')
  const [newsItemOPen, setNewsItemOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)

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

  const handleNewsDisplay = (selectedItem) => {
    setSelectedNews(selectedItem)
    console.log(selectedItem)
  }

  useEffect(() => {
    const handleChangeCountry = async () => {
      const response = await axios.get(
        `http://localhost:5000/news/country/${country}`
      )
      setNews(response.data)
    }

    if (country) {
      handleChangeCountry()
      setCountry('')
    }
  }, [country])

  console.log(news)
  console.log('selectedNews', selectedNews)
  // We need to know which news item is clicked
  // Make state from parent and pass it to newsCard
  // return newsItem object
  // pass it to newsItem
  // render information

  //

  return (
    <div>
      <Navbar />
      <ContentWrapper>
        {newsItemOPen ? (
          <NewsItem
            setNewsItemOpen={setNewsItemOpen}
            selectedNews={selectedNews}
          />
        ) : (
          <>
            <HeaderWrapper>
              <Title>Finance & Economics</Title>
              <DropdownCountries setCountry={setCountry} />
            </HeaderWrapper>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
              }}
            >
              {news.length > 0 &&
                news?.map((item, index) => {
                  return (
                    <NewsCard
                      item={item}
                      index={index}
                      image={image}
                      key={item.id}
                      setNewsItemOpen={setNewsItemOpen}
                      handleNewsDisplay={handleNewsDisplay}
                    />
                  )
                })}
            </div>
          </>
        )}
      </ContentWrapper>
    </div>
  )
}

export default App
