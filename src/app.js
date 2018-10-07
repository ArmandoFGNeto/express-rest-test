var express = require("express");
var products = require("./routes/products.routes.js");
var app = express();

app.use('/products', products)

var server = app.listen(8080, function () {
    console.log("App running on port.", server.address().port);
});