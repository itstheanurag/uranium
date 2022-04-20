const productModel = require("../models/productsModel")
// const express = require("express")

const createProduct = async function(req, res){
 let data = req.body 
 if( await productModel.exists(data)){
     res.send({
        msg : "this product already exist"
     })
 }else{
     let createData = await productModel.create(data)
     res.send({msg: createData})
 }
}

module.exports.createProduct = createProduct