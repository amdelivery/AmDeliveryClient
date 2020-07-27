const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: String,
    type: String,
    restId: String,
    password: String,
    adress: String,
    worktime: String,
    login: String
})

module.exports = User = mongoose.model('user', UserSchema);