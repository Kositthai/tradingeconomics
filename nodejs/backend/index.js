const express = require('express')
const cors = require('cors')

const newsRouter = require('./routes/news')
const unsplashRouter = require('./backend/routes/unplash')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', newsRouter)
app.use('/', unsplashRouter)

app.listen(5000, () => {
  console.log('app listening on port 5000')
})
