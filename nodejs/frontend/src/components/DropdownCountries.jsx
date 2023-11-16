import React, {useEffect, useState} from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'
import {Select, Page, setOptions, getJson} from '@mobiscroll/react'

setOptions({
  theme: 'ios',
  themeVariant: 'light',
})

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
      <div
        className="md-country-picker-item"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          className="md-country-picker-flag"
          src={
            'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'
          }
          alt="Flag"
          style={{
            borderRadius: '50%',
            marginRight: '1rem',
            width: '30px',
            height: '30px',
          }}
        />
        {item.display}
      </div>
    )
  }

  return (
    <div style={{marginRight: '1.5rem'}}>
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
    </div>
  )
}

export default DropdownCountries
