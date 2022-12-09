var express = require('express');
var router = express.Router();

const { register } = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('login');
});

router.get('/login', function(req, res, next) {
  res.send('login page');
});

router.post('/login', async function(req, res, next) {
   let userRegister = await register(req.body.username, req.body.password);
  console.log('req.body.username::'+req.body.username);
  console.log('req.body.password::'+req.body.password);
  if(userRegister && typeof(req.body.username) != 'undefined'){
   res.send({status:'ok',msg:'login success'});
 }else{
   res.send({status:'fail',msg:'login fail'});
 }
//   if(req.body.username == req.body.password && 
//     typeof (req.body.username) != 'undefined'){
//     res.send({status:'ok',msg:'login success'});
//   }else{
//     res.send({status:'fail',msg:'login fail'});
//   }
});

router.get('/register', function(req, res, next) {
  res.send('register');
});

router.post('/register', async function(req, res, next) {
  let userRegister = await register(req.body.username, req.body.password,
                     req.body.name, req.body.surname, req.body.email,
                     req.body.userId);
  if(userRegister && typeof(req.body.username) == 'string'){
     res.send({status: 'ok', msg: 'Sing up success'});
  }else{
     res.send({status: 'fail', msg: 'fail Sing up'});
  }
 });


module.exports = router;
