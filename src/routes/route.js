const express = require('express');
const router = express.Router();
const allControlls= require("../controllers/allControlls");


router.post("/creatNewAuthor", allControlls.creatNewAuthor)
router.post("/createNewBook", allControlls.createNewBook)
router.get("/allBooks", allControlls.allBooks)
router.get("/updateBookPrice", allControlls.updateBookPrice)
router.get("/authorsName", allControlls.authorsName)


module.exports = router;