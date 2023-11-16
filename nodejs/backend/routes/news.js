const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/news', async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.tradingeconomics.com/news?c=${process.env.TRANDING_ECONOMICS_KEYS}`
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
      `https://api.tradingeconomics.com/news/country/${params}?c=${process.env.TRANDING_ECONOMICS_KEYS}`
    )
    res.send(response.data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
