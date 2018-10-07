var express = require("express");
var mongoose = require('mongoose');

var products = require("./routes/products.route.js");

var app = express();
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true});
app.use('/products', products)

var server = app.listen(8080, function () {
    console.log("App running on port.", server.address().port);
});