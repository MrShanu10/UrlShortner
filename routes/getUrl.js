const express = require('express')
const ShortUrl = require('../models/short')
const router = express.Router()

router.get('/', async function (req, res) {
    const short = await ShortUrl.find({})
    res.json(short)
})

router.get('/:urlHash',async function(req,res){
    try {
        const shortenedUrl = await ShortUrl.findOne({urlHash:req.params.urlHash});
        return res.json(shortenedUrl)
    } catch (error) {
        res.send(error)
    }
})

module.exports =router