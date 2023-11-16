import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  background: #333333;
  padding: 1rem 12rem;
  margin: 0;
`

const Logo = styled.div`
  & > * {
    font-weight: 700;
  }
`

const Trading = styled.p`
  color: #d2d2d2;
  margin: 0px;
`

const Economics = styled.p`
  color: #848484;
  margin: -0.5rem 0;
`

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <Trading>TRADING</Trading>
        <Economics>ECONOMICS</Economics>
      </Logo>
    </Container>
  )
}

export default Navbar
