const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderNumSchema = new Schema ({
    number: String
})

module.exports = OrderNum = mongoose.model('number', OrderNumSchema);