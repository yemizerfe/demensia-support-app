const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    imageName: String,
    description: String
}, { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);