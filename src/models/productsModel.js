const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: String,
    category: String,
    price : {
        type : Number,
        required : true
    }
})

module.exports = new mongoose.model('Product', productsSchema)