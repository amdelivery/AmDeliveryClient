const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    date: String,
    phone: String,
    comment: String,
    items: Array,
    adress: String,
    cost: String,
    accepted: Boolean,
    number: String,
    resto: String
})

module.exports = Order = mongoose.model('order', OrderSchema);