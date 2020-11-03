const express = require('express')
const ShortUrl = require('../models/short')
const router = express.Router()

router.get('/', async function (req, res) {
    try {
        const short = await ShortUrl.find({})
        res.json(short)   
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/configurable-shortened-url-domain/:urlHash',async function(req,res){
    console.log(req.params.urlHash)
    try {
        const shortenedUrl = await ShortUrl.findOne({urlHash:req.params.urlHash});
        return res.json(shortenedUrl)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports =router