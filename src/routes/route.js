const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookControlls= require("../controllers/bookControls")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookControlls.createBook  )

router.get("/bookList", bookControlls.bookList)

router.get("/getBookInYear", bookControlls.getBookInYear)



router.get("/getXINRBooks", bookControlls.getXINRBooks)

router.get("/getRandomBooks", bookControlls.getRandomBooks)
router.get("/getParticularBooks", bookControlls.getParticularBooks)


module.exports = router;