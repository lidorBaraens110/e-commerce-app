const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const orderScheme = new Scheme({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    streetNumber: {
        type: Number,
        required: true
    },
    postalCode: {
        type: Number,

    },
    email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderScheme);

module.exports = Order;