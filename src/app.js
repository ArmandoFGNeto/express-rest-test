var express = require("express");
var mongoose = require('mongoose');
var cors = require('cors');

var products = require("./routes/products.route.js");

var app = express();
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true});

app.use(cors());
app.use('/rest/v1/products', products)

var server = app.listen(8080, function () {
    console.log("App running on port.", server.address().port);
});