const path = require('path');

const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

// making public directory directly/statically accesible from client side thorgh url
app.use(express.static(path.join(__dirname, 'public')));


//app.use(adminRouter);
app.use('/admin', adminRouter);     // http://localhost:3000/admin/add-product
app.use(shopRouter);


// Adding 404 page, any request that is not caught by other routers end up here. This should be at the last.
app.use('/', (req, res, next) => {
    // res.status(404).send('<h1>Page not found!</h1>');

    // sending file instead of html
    res.sendFile(path.join(__dirname, 'views', '404.html' ));
});

app.listen(3000);
