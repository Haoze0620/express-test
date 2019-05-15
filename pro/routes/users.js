var express = require('express');
var router = express.Router();


// var mongodb=require('mongodb').MongoClient;
// var db_str="mongodb://localhost:27017/expressdb"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/login',(req,res)=>{
//   mongodb.connect(db_str,(err,database)=>{
//       database.collection('userinfo',(err,coll)=>{
//           coll.find(req.body).toArray((err,data)=>{
//             console.log(data);
//               if(data.length>0){
//                   res.send('1');
//               }else{
//                   res.send('2')
              
//               }
//               database.close();
//           })
//       })
//   })
// })


// router.post('/register',(req,res)=>{
//   mongodb.connect(db_str,(err,database)=>{
//       database.collection('userinfo',(err,coll)=>{
//         console.log({name:req.body.name});
//           coll.find({name:req.body.name}).toArray((err,data)=>{
//             console.log(data);
//               if(data.length>0){
//                   res.send('2');
//               }else{
//                   coll.save(req.body,()=>{
//                     res.send('1');
//                     database.close();
//                   })
              
//               }
//               database.close();
//           })
//       })
//   })
// })


module.exports = router;
