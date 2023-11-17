const express = require('express')
const router = express.Router()
const axios = require('axios')

require('dotenv').config()

const TRADINGECONOMICS_KEY = process.env.TRANDING_ECONOMICS_KEY

router.get('/news', async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.tradingeconomics.com/news?c=${TRADINGECONOMICS_KEY}`
    )
    res.send(response.data)
  } catch (error) {
    console.log(error)
  }
})

router.get('/news/country/:countryName', async (req, res, next) => {
  try {
    const params = req.params.countryName
    const response = await axios.get(
      `https://api.tradingeconomics.com/news/country/${params}?c=${TRADINGECONOMICS_KEY}`
    )
    res.send(response.data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
