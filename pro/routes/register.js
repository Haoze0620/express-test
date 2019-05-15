var express=require('express');
var router=express.Router();
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/expressdb"



// Get register page
router.get('/',(req,res)=>{
    res.render('register',{})
});



router.post('/',(req,res)=>{
    mongodb.connect(db_str,(err,database)=>{
        database.collection('userinfo',(err,coll)=>{
          console.log({name:req.body.name});
            coll.find({name:req.body.name}).toArray((err,data)=>{
              console.log(data);
                if(data.length>0){
                    res.send('2');
                }else{
                    coll.save(req.body,()=>{
                      res.send('1');
                      database.close();
                    })
                
                }
                database.close();
            })
        })
    })
  })




module.exports=router;