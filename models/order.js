const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    date: String,
    phone: String,
    comment: String,
    items: Array,
    cost: String,
    accepted: Boolean,
    time: String,
    number: String,
    resto: String
})

module.exports = Order = mongoose.model('order', OrderSchema);