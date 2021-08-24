require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(value => {
        console.log(`db connected`)
    }).catch(reason => {
    console.log(reason)
})
const loginroutes = require('./routes/login')
const cors = require('cors')
const path = require('path')

app.listen(process.env.PORT)
app.use(cors())
app.use(express.json())
app.use(
  express.static(path.join(__dirname, '../dist/client'))
)

app.get(
  '/*',
  (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/client/index.html'))
  }
)

app.use(loginroutes)

app.use((req, res) => {
    return res.json(
        {
            status: 0,
            msg: '404 error'
        }
    )
})
