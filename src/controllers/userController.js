const userModel = require("../models/userModel")

const creatUser = async function(req,res){
    let data = req.body
    if( await userModel.exists(data)){
        res.send({
           msg : "this User already exist"
        })
    }else{
        let createData = await userModel.create(data)
        res.send({msg: createData})
    }
}

module.exports.creatUser = creatUser