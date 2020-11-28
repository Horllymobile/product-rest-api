const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling products get request here'
    });
});

routes.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: 'Handling products get request here'
    });
});

routes.post('/', (req, res, next) => {

    const product = {
        name: req.body.name,
        price: req.body.price
    }
    
    res.status(200).json({
        message: 'Handling products post request here',
        createdProduct: product
    });
});
routes.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: 'Handling products get request here'
    });
});

routes.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: 'Handling products get request here'
    });
});

module.exports = routes;