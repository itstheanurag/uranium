const express = require('express');
const router = express.Router();
const batchcontroller = require("../controllers/batchController")
const developerController = require("../controllers/developerController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/batches", batchcontroller.createBatch)

router.post("/developers", developerController.createDeveloper)

router.get("/scholarship-developers", developerController.scholarShipDev)

router.get("/developer" , developerController.developers)

module.exports = router; 