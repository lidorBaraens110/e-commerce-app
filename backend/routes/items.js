const router = require('express').Router();
const Item = require('../modules/items')

router.route('/').get((req, res) => {
    Item.find()
        .then(item => res.json(item))
        .catch(err => res.status(400).json('error: ' + err))
})

module.exports = router