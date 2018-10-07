var express = require('express')
var router = express.Router()
var productsController = require('../controllers/products.controller')

router.route('/')
    .get(productsController.getProducts);

module.exports = router