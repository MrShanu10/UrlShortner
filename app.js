const express  = require('express');
const dotenv   = require('dotenv').config();
const mongoose = require('mongoose');
const getUrl   = require('./routes/getUrl');
const postUrl  = require('./routes/postUrl');
const app = express()
app.use(express.json())

mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(getUrl);
app.use(postUrl);

app.listen(process.env.PORT || 8000, function (req, res) {
    console.log("Server Connected")
})

