const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema ({
    name: String,
    description: String,
    imgUrl: String,
    price: String,
    avalaible: Boolean,
    category: String
})


module.exports = Item = mongoose.model('menuitem', ItemSchema);