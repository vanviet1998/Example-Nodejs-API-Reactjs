var express = require('express');
var router = express.Router();
var Tintuc = require( '../model/conenction')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'asdsad' });
});
router.get('/find',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

  Tintuc.find({}).then((tintuc)=>{
    res.send(tintuc)
  }).catch(err =>{return err})
})
router.get('/findID/:id',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
var id =req.params.id
  Tintuc.find({_id:id}).then((tintuc)=>{
    res.send(tintuc)
  }).catch(err =>{return err})
})
module.exports = router;
