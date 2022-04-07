const express = require('express');
const logger = require('./logger')

const router = express.Router();

let arr = ['Akshay', 'Gaurav', 'Gautam','Zuber Khan', 'saurabh tripath', 'Deepiksha', 'Karan', 'Parul Yadav', 'Hemraj Deshmukh']

router.get('/all-candidates', function (req, res) {
    res.send(arr)
});

router.get('/candidates', function (req, res) {
    let arr1 = []
    let number = req.query['count']
    for ( let i=0; i<number ; i++){
    arr1.push(arr[i])
    }
    res.send(arr1)
});




module.exports = router;
// adding this comment for no reason