require('dotenv').config()
const express = require('express')
const { hostname } = require('os')

const configViewEngine = require('./config/viewEngine.js')
const webRoutes = require('./routes/web')

const app = express()  // app express

const port = process.env.PORT //port
const localhost = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// define route
app.use('/', webRoutes)

app.listen(port, localhost, () => {
  console.log(`Example app listening on hostname ${hostname} and port ${port}`)
})