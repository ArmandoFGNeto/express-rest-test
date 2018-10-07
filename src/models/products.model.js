var moongose = require('mongoose');

var productSchema = new moongose.Schema({
    _id: moongose.Schema.Types.ObjectId,
    category: String,
    name: String,
    pictures: [{
        name: String,
        uri: String 
    }],
    price: {
        value: Number,
        discount: Number
    }
});

module.exports = moongose.model('Product', productSchema);