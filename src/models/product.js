const mongooose = require('mongoose');

const ProductSchema = new mongooose.Schema({
    // Your code goes here
    product_id : {
        type : String,
        required: true,
        unique : true
    },
    product_type : {
        type : String,
        requird : true
    },
    product_name : {
        type: String,
        required: true
    },
    product_price : {
        type: Number,
    },
    available_quantity : {
        type: Number,
        default: 0
    }
})

const Product = mongooose.model('Product', ProductSchema);

module.exports = Product;