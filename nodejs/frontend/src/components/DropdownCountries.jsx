import '@mobiscroll/react/dist/css/mobiscroll.min.css'
import {Select, Page, setOptions} from '@mobiscroll/react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

// Part of mibiscroll
setOptions({
  theme: 'ios',
  themeVariant: 'light',
})

const FlagContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledFlag = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
`

const Container = styled.div`
  background: transparent;
`

const mobiscrollStyles = css`
  .mbsc-ios.mbsc-page {
    background: transparent;
  }

  .mbsc-ios.mbsc-select {
    background: #f6f5f5;
  }
`

const CustomStyles = styled.div`
  ${mobiscrollStyles}
`

function DropdownCountries({setCountry}) {
  const inputProps = {
    inputStyle: 'box',
    labelStyle: 'stacked',
    placeholder: 'Please select...',
  }

  const myData = [
    {value: 'SE', text: 'Sweden'},
    {value: 'MX', text: 'Mexico'},
    {value: 'NZ', text: 'New zealand'},
    {value: 'TH', text: 'Thailand'},
  ]

  const handleChangeCountry = (event) => {
    setCountry(event.valueText)
  }

  const renderCustomItem = (item) => {
    return (
      <FlagContainer className="md-country-picker-item" theme="tranparent">
        <StyledFlag
          className="md-country-picker-flag"
          src={
            'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'
          }
          alt="Flag"
        />
        {item.display}
      </FlagContainer>
    )
  }

  return (
    <CustomStyles>
      <Container>
        <Page>
          <Select
            data={myData}
            label="Countries"
            inputProps={inputProps}
            display="anchored"
            itemHeight={40}
            renderItem={renderCustomItem}
            filter={true}
            onChange={handleChangeCountry}
          />
        </Page>
      </Container>
    </CustomStyles>
  )
}

export default DropdownCountries
