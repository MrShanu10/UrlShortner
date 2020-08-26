const mongoose = require('mongoose')


const ShortScehma = mongoose.Schema({
    url :{
        type: String
    },
    urlHash :{
        type: String
    },
    shortUrl :{
        type:String,
    }
})

module.exports = mongoose.model("ShortUrl",ShortScehma);