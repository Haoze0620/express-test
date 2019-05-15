var express = require('express');
var mongodb = require('mongodb').MongoClient;
var db_str = "mongodb://localhost:27017/expressdb";

var router = express.Router();
var ojectId=require('mongodb').ObjectID;


router.get('/',(req,res)=>{
    // res.render('detail',{
    //     // data:data[0]
    // });
    console.log(ojectId(req.query.id));
    mongodb.connect(db_str,(err,database)=>{
        database.collection('boke',(err,coll)=>{
           
            coll.find({_id:ojectId(req.query.id)}).toArray((err,data)=>{
                res.render('detail',{
                    data:data[0]
                });
                database.close();
            })
        })
    })
})

module.exports=router;