const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const cmw = require("../middleWares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", cmw.authToken, userController.getUserData)

router.put("/users/:userId", cmw.authToken, userController.updateUser)

router.delete("/users/:userId", cmw.authToken, userController.deleteUser)

module.exports = router;