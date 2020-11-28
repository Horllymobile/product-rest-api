const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders Where fetch'
    });
});

routes.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Where fetch'
    });
});

routes.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order
    });
});

routes.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted'
    });
});



module.exports = routes;