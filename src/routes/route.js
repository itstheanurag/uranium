const express = require('express');
const logger = require('./logger')

const router = express.Router();

// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });


//  Problem 1
router.get('/movies', function (req, res) {
    const movies = ['rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins', 'Batman', 'Superman']
    res.send(movies)

});


// Problem 2 & 3
router.get('/movies/:indexNumber', function (req, res) {
    let arr = ['rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins', 'Batman', 'Superman']
    const id = req.params.indexNumber
    if (id < arr.length) {
        res.send(arr[id])
    } else {
        res.send('Please Enter a Valid Number')
    }
});

// Problem 4
router.get('/films', function (req, res) {
    const movie = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }, {
        'id': 5,
        'name': 'Beautiful mind'
    }, {
        'id': 6,
        'name': 'Beautiful mind'
    }
        , {
        'id': 7,
        'name': 'Free Guy'
    }]

    res.send(movie)


});

//  problem 5 1st and 2nd part
router.get('/films/:filmId', function (req, res) {
    const movie = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }, {
        'id': 5,
        'name': 'Beautiful mind'
    }, {
        'id': 6,
        'name': 'Beautiful mind'
    }
        , {
        'id': 7,
        'name': 'Free Guy'
    }]
    const id = req.params.filmId
    if (id <= movie.length) {

        res.send(movie[id-1])
    }
    else {
        res.send("No movie exists with this id")
    }

});


// Finding Missing arrays

router.get('/missing-array', function (req, res) {

    //by sir for number statrin from 1

    // let total = 0;

    // let arr= [1,2,3,5,6,7]

    // for (var i in arr) {
    //     total += arr[i];
    // }

    // let lastDigit= arr.pop()
    // let consecutiveSum= lastDigit * (lastDigit+1) / 2
    // let missingNumber= consecutiveSum - total

    // res.send(  { data: missingNumber  }  );

    // function missingnum() {
        const numArr = [33, 34, 35, 36, 38, 39]
        let missingArray = [1];

        // for (let i in numArr) {
           
        //     let x = numArr[i] - numArr[i - 1];
        //     let diff = 1;
        //     while (diff < x)
        //         missingArray.push(numArr[i - 1] + diff)
            
        // }
        res.send(missingArray);

    // }

    

});



module.exports = router;
// adding this comment for no reason