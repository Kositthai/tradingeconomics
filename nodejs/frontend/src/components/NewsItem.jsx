import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1``

const Date = styled.p``

const StyledImage = styled.img`
  width: 20rem;
  height: 20rem;
`

const Description = styled.p``

const NewsItem = ({setNewsItemOpen, selectedNews}) => {
  return (
    <div>
      <p onClick={() => setNewsItemOpen(false)}>Back</p>
      <Title>{selectedNews.item.title}</Title>
      <Date>{selectedNews.item.date}</Date>
      <StyledImage src={selectedNews.image} />
      <Description>{selectedNews.item.description}</Description>
    </div>
  )
}

export default NewsItem
