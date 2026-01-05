const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    reminder: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('reminderSchema', reminderSchema);