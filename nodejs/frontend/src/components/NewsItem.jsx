import React from 'react'
import styled from '@emotion/styled'
import {FaArrowLeft} from 'react-icons/fa'
import SharedOption from './SharedOption'

const Container = styled.div`
  width: 80%;
  position: relative;
  margin-bottom: 5rem;
`

const Back = styled.div`
  margin-top: 7rem;

  :hover {
    cursor: pointer;
  }
`

const StyledArrow = styled(FaArrowLeft)`
  margin-right: 1rem;
`

const Content = styled.div`
  margin-left: 10rem;
  width: 90%;
`

const Title = styled.h1`
  margin: 2rem 0;
`

const StyledDate = styled.p`
  margin: 2rem 0;
  color: #848484;
`

const StyledImage = styled.img`
  width: 70%;
  margin-bottom: 2rem;
  display: block;
`

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 3rem;
  color: #343434;
  text-align: justify;
`

const NewsItem = ({setNewsItemOpen, selectedNews}) => {
  const newsDate = new Date(selectedNews.item.date).toLocaleDateString(
    'en-us',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  )

  return (
    <React.Fragment>
      <SharedOption />
      <Container>
        <Back onClick={() => setNewsItemOpen(false)}>
          <StyledArrow />
          Back
        </Back>
        <Content>
          <Title>{selectedNews.item.title}</Title>
          <StyledDate>{newsDate}</StyledDate>

          <StyledImage src={selectedNews.image} />

          <Description>{selectedNews.item.description}</Description>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default NewsItem
