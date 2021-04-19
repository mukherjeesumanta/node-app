const path = require('path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express router!</h1>');

    // sending file instead of html
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html' ));
    res.render('shop', {prods: adminData.products, title: 'Shop'});
});

module.exports = router;