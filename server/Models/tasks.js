const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    tasks:{
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('tasksSchema',tasksSchema);