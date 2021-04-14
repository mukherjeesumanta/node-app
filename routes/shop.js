const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express router!</h1>');

    // sending file instead of html
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html' ));
});

module.exports = router;