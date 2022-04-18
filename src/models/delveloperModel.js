const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "batch",
        required: true
    }

}, {
    timestam: true
})
module.exports = new mongoose.model('Developer', developerSchema)