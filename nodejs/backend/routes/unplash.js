const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/unsplash', async (req, res, next) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: 'financial',
        client_id: process.env.UNSPLASH_KEY,
        per_page: 10, // Set the number of images you want
      },
    })
    res.send(response.data.results)
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error.message)
  }
})

module.exports = router
