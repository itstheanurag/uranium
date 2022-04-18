const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    name: String,
    size: Number,
    program: {
        type : String,
        enum : ["frontend", "backend"]
    }   
})

module.exports = new mongoose.model('Batch', batchSchema)