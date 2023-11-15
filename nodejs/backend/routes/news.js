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
    res.send('error')
  }
})

module.exports = router
