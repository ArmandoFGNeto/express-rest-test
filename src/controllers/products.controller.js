var Product = require('../models/products.model');

function list(req, res, next) {
  var {limit = 50, skip = 0} = req.query;
  Product.list({limit, skip})
    .then(products => res.json(products))
    .catch(e => next(e));
}

modules.export(list);