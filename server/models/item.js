
const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const itemScheme = new Scheme({
    type: {
        type: String,
        required: true
    },
    sizeType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Object
    },
    oneSize: {
        type: Object
    },
    newCollection: {
        type: Boolean,
        required: true
    },
    recommended: {
        type: Boolean,
        required: true
    },
    modelNumber: {
        type: String,
    }

},
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemScheme);

module.exports = Item;