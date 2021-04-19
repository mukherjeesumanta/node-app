const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});

const products = [];
/* app.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>')
}); */
router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button>');
    // sending file instead of html
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html' ));

    res.render('add-product.pug', {title: 'Add product'});
});
/* router.use('/product', (req, res, next) => {
    console.log('=======', req.body );
    res.redirect('/add-product');
}); */

// post() and get() methods match exactly the url path, method. with use() method we need to maintain the order of the url registered.
// But its still better to maintain the order.
router.post('/add-product', urlencodedParser, (req, res, next) => {     // same url can be used with different methods
    // console.log('=======', req.body );
    products.push(req.body.title);
    res.redirect('/');
});
const adminData = {
    router: router,
    products: products
};

module.exports = adminData;