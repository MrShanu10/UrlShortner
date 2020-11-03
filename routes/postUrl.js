const express = require('express')
const ShortUrl = require('../models/short')
const router = express.Router()
const shortid = require('short-uuid')

router.post('/shorturl', async function (req, res) {
    try 
    {
        const alreadyPresent = await ShortUrl.findOne({url: req.body.url}, 'url');
        if(alreadyPresent == null)
        {
            const urlHash = shortid.generate();
            const shortUrl = "https://configurable-shortened-url-domain"+'/'+urlHash;
            const createShort = await ShortUrl.create({url: req.body.url,urlHash,shortUrl});
            res.json(createShort);
        }
        else {
            const createShort = await ShortUrl.findOne({url: req.body.url})
            res.send(createShort);
        }
    } catch (error) {
        res.send(error.message)
    }

})

router.put('/:urlHash', async (req, res) => {
    try{
        const updatedUrl = await ShortUrl.findOneAndUpdate({urlHash:req.params.urlHash},{url: req.body.url});
        return res.redirect('/');
    }
    catch (error) {
        res.send(error.message)
    }
})

router.delete('/:urlHash', async (req, res) => {
    try {
        const remainingUrl = await ShortUrl.deleteOne({urlHash: req.params.urlHash})
        return res.redirect('/');
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router