const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')
const productModel  =require('../models/productsModel')

const createOrder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let price = await productModel.find({productId})
    let userValidation  = await userModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await orderModel.create(data)
            if(header == true){
                await userModel.find({_id : userId}).update({balance:   `${balance}-${price}`},{new:true})
            }
            res.send({success : purchase})
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}

module.exports.createOrder = createOrder
/*const orderDetails = async function (req, res){

    let userId = req.body.userId
    let productId = req.body.productId

    let userIdValidation = await userModel.findById(userId,{_id:1})
    let productIdValidation = await productModel.findById(productId,{_id:1})

    if(userIdValidation && productIdValidation){
        let Data = req.body
        let savedData = await orderModel.create(Data)
        let updatedOrder = null
        console.log(req['isFreeAppUser'])
        if(req['isFreeAppUser'] == 'true'){
            updatedOrder =  await orderModel.findOneAndUpdate({},{$set: {amount: 0, isFreeAppUser: true}})
            res.send(updatedOrder)
        }
        else{
            let productPrice = (await productModel.findById({_id:productId},{price:1})).price       
            let userBalance = (await userModel.findById({_id:userId},{balance:1})).balance         
            
            if (productPrice > userBalance){
                res.send("Insufficient Balance")
            }
            else{
                let deductedValue = userBalance-productPrice
                let updatedUser = await userModel.findOneAndUpdate({_id:userId},{$set: {balance: deductedValue}})
                updatedOrder = await orderModel.findOneAndUpdate({},{$set: {amount: productPrice, isFreeAppUser: false}})
                res.send("Successfully Done")
            }
        }

    }
    else{
        res.send("Invalid User or Invalid Product.")
  
*/
