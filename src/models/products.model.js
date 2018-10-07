var moongose = require('mongoose');

var productSchema = new moongose.Schema(
    {
        _id: Schema.Types.ObjectId,
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
    }
);

var Product = moongose.model('Product', productSchema);