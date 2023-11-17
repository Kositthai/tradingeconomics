import './App.css'
import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import DropdownCountries from '../src/components/DropdownCountries'
import NewsItem from './components/NewsItem'
import NewsCardSkeleton from './components/NewCardSkeleton'
import ErrorModal from './components/ErrorModal'

const ContentWrapper = styled.div`
  margin: 5rem 10rem 0 12rem;
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

const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

const NewsItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

function App() {
  const [news, setNews] = useState([])
  const [image, setImage] = useState([])
  const [country, setCountry] = useState('')
  const [newsItemOpen, setNewsItemOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const LOCAL_PORT = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const newsResponse = await axios.get(`${LOCAL_PORT}/news`)
        setNews(newsResponse.data)

        const imageResponse = await axios.get(`${LOCAL_PORT}/unsplash`)
        setImage(imageResponse.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const handleChangeCountry = async () => {
      try {
        const response = await axios.get(
          `${LOCAL_PORT}/news/country/${country}`
        )
        setNews(response.data)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }

    if (country) {
      handleChangeCountry()
      setCountry('')
    }
  }, [country])

  const handleReadMore = (selectedItem) => {
    setSelectedNews(selectedItem)
  }

  return (
    <React.Fragment>
      <Navbar />

      {error ? (
        <ErrorModal />
      ) : (
        <ContentWrapper>
          {newsItemOpen ? (
            <NewsItem
              setNewsItemOpen={setNewsItemOpen}
              selectedNews={selectedNews}
            />
          ) : (
            <React.Fragment>
              <HeaderWrapper>
                <Title>Finance & Economics</Title>
                <DropdownCountries setCountry={setCountry} />
              </HeaderWrapper>

              {!loading && image.length > 0 ? (
                <NewsItemContainer>
                  {news?.map((item, index) => {
                    return (
                      <NewsCard
                        item={item}
                        index={index}
                        image={image}
                        key={item.id}
                        setNewsItemOpen={setNewsItemOpen}
                        handleReadMore={handleReadMore}
                      />
                    )
                  })}
                </NewsItemContainer>
              ) : (
                <SkeletonWrapper>
                  {[...Array(8)].map((_, index) => (
                    <NewsCardSkeleton key={index} />
                  ))}
                </SkeletonWrapper>
              )}
            </React.Fragment>
          )}
        </ContentWrapper>
      )}
    </React.Fragment>
  )
}

export default App
