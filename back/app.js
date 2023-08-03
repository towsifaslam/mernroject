const express = require('express')
 
const ErrorHandler = require('./utls/errorHandler');

require('dotenv').config()
const app = express()

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/',express.static('uploads'))

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
// impor routes
const user = require('./controller/user')
app.use('/api/v2/user',user)
// error handler 
app.use(ErrorHandler)
 

module.exports = app