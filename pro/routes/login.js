var express=require('express');

var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/expressdb"

var router=express.Router();

// Get login page
router.get('/',(req,res)=>{
    res.render('login',{});

});

router.post('/',(req,res)=>{
    mongodb.connect(db_str,(err,database)=>{
        database.collection('userinfo',(err,coll)=>{
            coll.find(req.body).toArray((err,data)=>{
            //   console.log(data);
                if(data.length>0){
                    req.session.name=data[0].name;
                    res.send('1');
                    
                }else{
                    res.send('2')
                
                }
                database.close();
            })
        })
    })
  })

module.exports=router;