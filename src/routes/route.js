const express = require('express');
const _ = require("lodash")

const logger = require('../logger/logger');
const info = require('../util/helper');
const str = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    logger.logging()
    console.log('Can not believe this took me 2 hours')
    info.printDate()
    info.printMonth()
    info.batchInfo()
    console.log('Date is', info.printDate())
    console.log('Month is', info.printMonth())
    console.log('BatchInfo: Uranium', info.batchInfo())
    console.log(str.trim())
    console.log(str.lowerCase())
    console.log(str.upperCase())
    
});


router.get('/hello', function (req, res) {
    res.send('My first ever api!')

    const months = ['January', 'February', 'March','April','May','June', 'July', 'August', 'September', 'October', 'November', 'December']

       console.log(_.chunk(months,3))

    const odd = [1,3,5,7,9,11,13,15,17,19]
    console.log(_.tail(odd))

    const arr1= [1,4,6,3]
    const arr2= [3,7,10,4]
    const arr3= [8,7,2,4]
    const arr4= [3,6,1,8]
    const arr5= [1,3,7,7]
    const arr6= [10,8,3,6]
    console.log(_.union(arr1,arr2, arr3, arr4, arr5, arr6))

    const pairs = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

    console.log(_.fromPairs(pairs))  

})

module.exports = router;
// adding this comment for no reason