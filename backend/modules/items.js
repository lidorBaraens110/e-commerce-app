
const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const itemScheme = new Scheme({
    type: { type: String, required: true },
    bodyBuild: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    s: { type: Object, required: true },
    m: { type: Object },
    l: { type: Object },
    xl: { type: Object, required: true },
    images: { type: Array, required: true },
    date: { type: Date, required: true }
},
    {
        timestamps: true

    }
)

const Item = mongoose.model('Item', itemScheme);

module.exports = Item;