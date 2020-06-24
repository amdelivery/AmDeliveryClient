const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    date: String,
    adress: String,
    phone: String,
    comment: String,
    items: Array,
    cost: String
})

module.exports = Order = mongoose.model('order', OrderSchema);