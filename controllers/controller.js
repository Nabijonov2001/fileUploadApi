"use strict"
const SingleFile = require('../models/single')
const MultipleFile =require('../models/multiple')


const singleFileUpload = async(req, res, next)=>{
    try{
        const file = new SingleFile({
            fileName:req.file.originalname,
            filePath: req.file.path,
            fileType:req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) 
        })
        console.log(file.fileSize)
        await file.save()
        res.status(201).send('File Uploaded Successfully!')
    }catch(err){
        res.status(400).send(err.message)

    }
}

const getSingleFile = async (req, res, next)=>{
    try {
        const files = await SingleFile.find()
        res.status(201).send(files)
        console.log(files)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const multipleFileUpload = async(req, res, next)=>{
    try {
        let filesArr  = []
        req.files.forEach(element =>{
            const file = {
                fileName:element.originalname,
                filePath: element.path,
                fileType:element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2) 
            }
            filesArr.push(file)
            
        }) 
        const multipleFiles = new MultipleFile({
            title:req.body.title,
            files:filesArr
        })
        await multipleFiles.save()
        console.log(filesArr)
        res.status(201).send('Files Uploaded Successfully!')
    } catch (error) {
        
        res.status(400).send(error.message)
    }
}

const getMultipleFiles = async (req, res, next)=>{
    try {
        const files = await MultipleFile.find()
        res.status(201).send(files)
        console.log(files)
    } catch (error) {
        res.status(400).status(error.message)
    }
}


const fileSizeFormatter = (bytes, decimal)=>{
    if(bytes === 0){
        return '0 Bytes'
    }
    const dm = decimal||2
    const size = ['B','KB', 'MB', 'GB', 'TB']
    const index = Math.floor(Math.log(bytes)/Math.log(1000))
    return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm) + '  ' + size[index])
}

module.exports = {
    singleFileUpload, multipleFileUpload, getSingleFile, getMultipleFiles
}