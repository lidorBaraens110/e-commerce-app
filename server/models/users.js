
const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userScheme = new Scheme({
    userDetail: {
        type: Object, required: true
    },
    userItems: {
        type: Array, required: true
    }
}
)

const User = mongoose.model('User', userScheme);

module.exports = User;


const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

// const userScheme = new Scheme({
//     username: {
//         type: String,
//         required: true,
//         minlength: 3,
//         trim: true
//     }
// },
//     {
//         timestamps: true
//     }
// )

// const User = mongoose.model('User', userScheme);

// module.exports = User