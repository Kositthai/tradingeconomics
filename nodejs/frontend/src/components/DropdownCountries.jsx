import React, {useEffect, useState} from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'
import {Select, Page, setOptions, getJson} from '@mobiscroll/react'

setOptions({
  theme: 'ios',
  themeVariant: '',
})

function DropdownCountries() {
  // const [myData, setMyData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')

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

  // useEffect(() => {
  //   getJson('https://trial.mobiscroll.com/content/countries.json', (resp) => {
  //     const countries = []
  //     for (let i = 0; i < resp.length; ++i) {
  //       const country = resp[i]
  //       countries.push({text: country.text, value: country.value})
  //     }
  //     setMyData(countries)
  //   })
  // }, [])

  const renderCustomItem = (item) => {
    return (
      <div className="md-country-picker-item">
        <img
          className="md-country-picker-flag"
          src={
            'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'
          }
          alt="Flag"
        />
        {item.display}
      </div>
    )
  }

  // const handleChange = (event) => {
  //   setCountry(event.valueText)
  // }

  return (
    <div style={{width: '15rem'}}>
      <Page>
        <Select
          data={myData}
          label="Countries"
          inputProps={inputProps}
          display="anchored"
          itemHeight={40}
          renderItem={renderCustomItem}
          // onChange={handleChange}
          filter={true}
        />
      </Page>
    </div>
  )
}

export default DropdownCountries
