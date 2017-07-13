const express = require('express')
const cors = require('cors')
const {json} = require('body-parser')
const session = require('express-session')
const config = require('./config.js')

const app = express()

const port = config.port

app.use(express.static(__dirname + '/'))

app.use(json())
app.use(cors())

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))

app.listen(port, () => {
  console.log(`listenin' to port ${port}`);
})
