"use strict"

const express = require('express')
const {upload} = require('../helpers/filehelper')
const {singleFileUpload, getSingleFile, multipleFileUpload, getMultipleFiles} = require('../controllers/controller')
const router = express.Router()

router.post('/singleFile', upload.single('file'), singleFileUpload)
router.get('/singlefiles', getSingleFile )
router.post('/multipleFiles', upload.array('files'), multipleFileUpload)
router.get('/multiplefiles', getMultipleFiles )

module.exports = {
    routes:router
}