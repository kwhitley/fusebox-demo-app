// include other main deps
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import path from 'path'
import fs from 'fs'
import tags, { registerTagMessages } from './tags'
// const pkg = require('../package.json')

// load .env using dotenv first
require('env-autoload')

// instantiate express
const app = express()
const PRODUCTION = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 3000
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())

// static serving from /dist/client
const staticPath = path.join(__dirname, '../dist/client')
console.log(`serving static content from ${staticPath}`)
app.use(express.static(staticPath))
// app.use('/client', express.static(staticPath))

// example API entry
app.get('/test', (req, res) =>
  res.json({
    foo: 'BAZ',
    mode: process.env.NODE_ENV,
    port: process.env.PORT,
    test: process.env.TEST,
    production: PRODUCTION,
  })
)

// json import support
app.get('/package.json',
  (req, res) => setTimeout(() => {
    fs.readFile(
      path.join(__dirname, '../package.json'),
      'utf8',
      (err, data) => {
        if (err) throw err

        const pkg = JSON.parse(data)
        const chance = Math.random() > 0.4

        return (chance && res.json(pkg)) || res.status(403).send()
      }
    )
  }, 1000)
)

registerTagMessages(io)
app.get('/api/tags', tags)
app.get('/foo', (req, res) => res.send('bar'))

server.listen(PORT)
console.log(`Express server @ http://localhost:${PORT} (${PRODUCTION ? 'production' : 'development'})\n`)
