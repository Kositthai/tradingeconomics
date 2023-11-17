import styled from '@emotion/styled'
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const SharedOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 34%;
  left: 2%;

  & > * {
    margin: 1rem;

    :hover {
      cursor: pointer;
    }
  }
`
const SharedOption = () => {
  return (
    <SharedOptions>
      <FaFacebook />
      <FaTwitter />
      <FaLinkedin />
      <HiOutlineMail />
    </SharedOptions>
  )
}

export default SharedOption
