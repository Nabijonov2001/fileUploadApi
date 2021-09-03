const mongoose = require('mongoose')
const Schema = mongoose.Schema

const multipleFileSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    files:[Object]
}, {timestamps:true})

module.exports = new mongoose.model('MultipleBooksFiles', multipleFileSchema)