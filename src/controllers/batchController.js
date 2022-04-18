const batchModel = require("../models/batchModel")


const createBatch = async function(req, res){
    let data = req.body
    if(! await batchModel.exists(data)){
        let createdBatch = await batchModel.create(data)
        res.send({msg: createdBatch})
    } else{
        res.send({msg: "This batch already exists"})
    }
}

module.exports.createBatch = createBatch