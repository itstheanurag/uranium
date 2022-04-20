const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    let date = moment().format('YYYY-MM-DD HH:MM:SS')
    console.log(`${date}, ${req.socket.remoteAddress}, ${req.path}`)
    next()
})

mongoose.connect("mongodb+srv://itstheanurag:gaurav9878764239@cluster0.dirde.mongodb.net/assignmentmw2", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
