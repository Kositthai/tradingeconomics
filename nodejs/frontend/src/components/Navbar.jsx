import styled from '@emotion/styled'

const Container = styled.div`
  background-color: #333333;
  padding: 1rem 12rem;
  margin: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`

const Logo = styled.div`
  & > * {
    font-weight: 700;
  }
`

const Trading = styled.p`
  color: #d2d2d2;
`

const Economics = styled.p`
  color: #848484;
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
