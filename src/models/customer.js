const mongooose = require('mongoose');

const CustomerSchema = new mongooose.Schema({
    // Your code goes here
    customer_id : {
        type : String,
        required: true,
        unique : true
    },
    customer_name : {
        type : String,
        requird : true
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    balance : {
        type: Number,
        required: true,
        default: 0
    }
})

const Customer = mongooose.model('Customer', CustomerSchema);

module.exports = Customer;