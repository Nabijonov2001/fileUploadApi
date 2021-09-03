"use strict";
const express = require('express')
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')
const fileRoutes = require('./routes/fileUpload')

const PORT = process.env.PORT || 3000
const app = express()

require('./database')()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', fileRoutes.routes)

app.listen(PORT, ()=>{
    console.log('app is listening on port '+PORT)
})
