const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imagePath: { type: String, required: true },
    authors: { type: String},
    date: { type: String}
});

module.exports = mongoose.model('Post', postSchema);
