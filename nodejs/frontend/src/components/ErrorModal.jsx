import React from 'react'
import styled from '@emotion/styled'
import {MdErrorOutline} from 'react-icons/md'

const Container = styled.div`
  width: 30rem;
  height: 20rem;
  position: absolute;
  background: #f5f4f4;
  text-align: center;
  border-radius: 2rem;
  overflow: hidden;
  top: 35%;
  left: 35%;
  box-shadow: -1px -1px 4px 3px rgba(146, 145, 145, 0.75);
  -webkit-box-shadow: -1px -1px 4px 3px rgba(210, 210, 210, 0.75);
  -moz-box-shadow: -1px -1px 4px 3px rgba(143, 143, 143, 0.75);
`

const IconContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

const StyledIcon = styled(MdErrorOutline)`
  color: #e40707;
  font-size: 3.5rem;
`

const ErrorText = styled.h1`
  color: #333333;
  font-size: 2rem;
  margin: 0;
`

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 70;
`

const ErrorModal = () => {
  return (
    <Container>
      <IconContainer>
        <StyledIcon />
        <ErrorText>Error</ErrorText>
      </IconContainer>

      <ErrorMessage>
        Could not show news articles.
        <br />
        Please try again later.
      </ErrorMessage>
    </Container>
  )
}

export default ErrorModal
