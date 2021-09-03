"use strict"

const multer = require('multer')
const path = require('path')


const storage =  multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, new Date().toISOString().replace(/:/g, '-')+'-'+ file.originalname)
    }
})

const filefilter =(req, file, cb)=>{
    const fileTypes = /jpeg|jpg|png|doc|pdf/
    const mimetype = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))
    if(mimetype && extname){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({storage:storage, fileFilter:filefilter})

module.exports = {upload}