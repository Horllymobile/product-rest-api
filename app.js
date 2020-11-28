const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/order');


const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header',
     'Origin, X-Request-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Origin', 'PUT, POST, GET, DELETE, PATCH');
        res.status(200).json({});
    }
    next();
})

// Route Middlewares
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;