const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 8080

const newsRouter = require('./routes/news')
const unsplashRouter = require('./routes/unplash')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', newsRouter)
app.use('/', unsplashRouter)

app.listen(port, '0.0.0.0', () => {
  console.log(`app listening on port ${port} `)
})
