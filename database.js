const mongoose = require('mongoose')


module.exports =()=>{
    mongoose.connect('mongodb://localhost/faylarni-saqlash', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log('databasega ulandi...')
    })
    .catch((err)=>{
        console.error(err)
    })
}

    
    
