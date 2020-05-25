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
        if(err)
            return res.json({success: false, error:err});
        return res.json({success: true, info: data})
    });
    
});

router.post('/', function (req, res, next) {
    let d = new Data();
    d.userID = req.body.userID;
    d.leader1 = req.body.leader1;
    d.leader2 = req.body.leader2;
    d.leader3 = req.body.leader3;
    d.save((err) => {
        if (err)
            return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.put('/', function (req, res, next) {
    let leaderToReplace = req.body.leaderToReplace;
    if (leaderToReplace == 1) {
        Data.findOneAndUpdate({userID: req.body.userID}, {$set:{leader1: req.body.leaderNumber}}, {new: true}, (err, doc) => {
            if (err)
                return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    } else if (leaderToReplace == 2) {
        Data.findOneAndUpdate({userID: req.body.userID}, {$set:{leader2: req.body.leaderNumber}}, {new: true}, (err, doc) => {
            if (err)
                return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    } else {
        Data.findOneAndUpdate({userID: req.body.userID}, {$set:{leader3: req.body.leaderNumber}}, {new: true}, (err, doc) => {
            if (err)
                return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    }
});

router.delete('/', function (req, res, next) {
    Data.findOneAndRemove({userID: req.body.userID}, (err)=>{
    if (err)
        return res.json({ success: false, error: err });
    return res.json({ success: true });
   });
});




module.exports = router;
