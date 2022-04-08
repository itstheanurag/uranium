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
    router.get('/movies', function(req, res) { 
        const movies = ['rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins', 'Batman', 'Superman']
         res.send(movies)

     });


// Problem 2 & 3
    router.get('/movies/:indexNumber', function(req, res) { 
       let arr = ['rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins', 'Batman', 'Superman']
        const id = req.params.indexNumber
            if(id<arr.length)
            {
                res.send(arr[id])
            } else{
                res.send('Please Enter a Valid Number')
            }
     });
     
// Problem 4
     router.get('/films', function(req,res){
       const movie =  [ {
            'id': 1,
            'name': 'The Shining'
           }, {
            'id': 2,
            'name': 'Incendies'
           }, {
            'id': 3,
            'name': 'Rang de Basanti'
           }, {
            'id':  4,
            'name': 'Finding Nemo'
           },{
               'id': 5,  
               'name': 'Beautiful mind'       
            },{
                'id': 6,  
               'name': 'Beautiful mind'       
            }
           ,{
               'id':7,  
               'name': 'Free Guy'       
            }]
           
           res.send(movie)


     });

    //  problem 5 1st and 2nd part
    router.get('/films/:filmId', function(req,res){
        const movie =  [ {
             'id': 1,
             'name': 'The Shining'
            }, {
             'id': 2,
             'name': 'Incendies'
            }, {
             'id': 3,
             'name': 'Rang de Basanti'
            }, {
             'id':  4,
             'name': 'Finding Nemo'
            },{
                'id': 5,  
                'name': 'Beautiful mind'       
             },{
                 'id': 6,  
                'name': 'Beautiful mind'       
             }
            ,{
                'id':7,  
                'name': 'Free Guy'       
             }]
             const id = req.params.filmId
             if (id< movie.length){
                 
                     res.send(movie[id])
                 }
             else{
                 res.send("No movie exists with this id")
             }

    });


module.exports = router;
// adding this comment for no reason