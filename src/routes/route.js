const express = require('express');
const router = express.Router();
const productControler = require("../controllers/productControls")
const commonMiddleWares = require("../middlewares/commonMiddleWares")
const userController = require("../controllers/userController")
const orderController = require('../controllers/orderController')


router.post("/createProduct", productControler.createProduct)
router.post("/createUser", commonMiddleWares.isFreeAppUser , userController.creatUser)
router.post("/createOrder", orderController.createOrder)

module.exports = router;