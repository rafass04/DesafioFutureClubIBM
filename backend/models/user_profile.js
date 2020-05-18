const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    nameUser: { type: String, required: true },
    categoria: { type: String, required: true }
});

module.exports = mongoose.model('User_Profile', postSchema);