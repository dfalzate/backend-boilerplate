require('dotenv').config()
import express from 'express'
import http from 'http'
import cors from 'cors'
require('./db')
const app = express()

app.use(express.json())
app.use(cors())

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`Server started on port http://localhost:${process.env.PORT}`)
})
