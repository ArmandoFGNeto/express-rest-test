var Product = require('../models/products.model');

function getProducts(req, res, next) {
    Promise.all([count(req, res, next), list(req, res, next)])
        .then(values => {
            res.json({
                total: values[0],
                data: values[1]
            });
        });
};

function count(req, res, next) {
    var query = req.query.name ? {name : {$regex : req.query.name, $options: 'i'}} : {};
    return Product.countDocuments(query)
            .then(total => {
                return total
            })
            .catch(e => next(e));
}

function list(req, res, next) {
    var limit = req.query.limit && !isNaN(req.query.limit) ? 
            (Number(req.query.limit) <= 100 ? Number(req.query.limit) : 100) : 20;
    var page = req.query.page && !isNaN(req.query.page) ? Number(req.query.page) : 0;
    var query = req.query.name ? {name : {$regex : req.query.name, $options: 'i'}} : {};
    return Product.find(query)
            .limit(limit)
            .skip(page > 0 ? ((page - 1) * limit) : 0)
            .then(products => {
                return products;
            })
            .catch(e => next(e));
}

function getNextPageURI(req, res, next) {

}

function getPreviousPageURI(req, res, next) {

}

module.exports = {getProducts, count, list};