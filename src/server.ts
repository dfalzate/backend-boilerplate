require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import cors from 'cors'
const app = express()

require('../config/db.config')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port http://localhost:${process.env.PORT}`)
})
