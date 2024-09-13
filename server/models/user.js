const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Usermodel = mongoose.model('user', UserSchema);

module.exports = Usermodel;
