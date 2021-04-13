const express = require('express');
const bodyParser = require('body-parser');
// import bodyParser from 'body-parser';

const app = express();
//app.use(bodyParser.urlencoded({extended: false}));

const urlencodedParser = bodyParser.urlencoded({extended: false});
/* app.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>')
}); */
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button>');
});
/* app.use('/product', (req, res, next) => {
    console.log('=======', req.body );
    res.redirect('/add-product');
}); */

// post() and get() methods match exactly the url path, method. with use() method we need to maintain the order of the url registered.
// But its still better to maintain the order.
app.post('/product', urlencodedParser, (req, res, next) => {
    console.log('=======', req.body );
    res.redirect('/add-product');
});
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>')
});


// const server = http.createServer(routes);

app.listen(3000);