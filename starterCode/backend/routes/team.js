var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Data = require('./data');

const dbRoute =
    'mongodb+srv://REPLACETHIS';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('Connection made to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.dropDatabase();

router.get('/', function (req, res, next) {
    Data.find(function(err,data){
        // Finish implementation
    });
    
});

router.post('/', function (req, res, next) {
    let d = new Data();
    // Set up model
    d.save((err) => {
        // Finish implementation
    });
});


router.put('/', function (req, res, next) {
    let leaderToReplace = req.body.leaderToReplace;
    if (leaderToReplace == 1) {
        Data.findOneAndUpdate({userID: req.body.userID}, {$set:{leader1: req.body.leaderNumber}}, {new: true}, (err, doc) => {
            // Finish implementation
        });
    }
    // Implement putting remaining leaders
});

router.delete('/', function (req, res, next) {
    Data.findOneAndRemove({userID: req.body.userID}, (err)=>{
        // Finish implemenatation
   });
});




module.exports = router;
