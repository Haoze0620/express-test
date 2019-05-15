var express = require('express');
var mongodb = require('mongodb').MongoClient;
var db_str = "mongodb://localhost:27017/expressdb";

var router = express.Router();

// Get login page
router.get('/', (req, res) => {
    if (req.session.name) {
        mongodb.connect(db_str, (err, database) => {
            database.collection('boke', (err, coll) => {
                coll.find({}).sort({
                    _id: -1
                }).toArray((err, data) => {
                    res.render('boke', {
                        data: data,
                        user: req.session.name
                    })
                    database.close();
                })
            })
        })
    }else{
        res.send('请登录');
    }








});


router.post('/', (req, res) => {
    mongodb.connect(db_str, (err, database) => {
        database.collection('boke', (err, coll) => {
            coll.save(req.body, () => {
                res.send('1');
                database.close();
            })
        })
    })
});



module.exports = router;