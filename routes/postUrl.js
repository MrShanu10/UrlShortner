const express = require('express')
const ShortUrl = require('../models/short')
const router = express.Router()
const shortid = require('short-uuid')

router.post('/shorturl', async function (req, res) {
    try {
        const urlHash = shortid.generate()
        const shortUrl = "https://configurable-shortened-url-domain"+'/'+urlHash;
        const createShort = await ShortUrl.create({url: req.body.url,urlHash,shortUrl});
        res.json(createShort)
    } catch (error) {
        res.send(error)
    }

})

module.exports = router