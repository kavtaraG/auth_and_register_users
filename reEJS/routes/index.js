var express = require('express');
var router = express.Router();

const {getUsers, addUsers} = require('../services/mongo-users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express'});
});

// router.get('/login', function(req, res, next) {
//   res.render('index', { title: 'Express'});
// });

router.get('/register', async function(req, res, next) {
  res.render('register', { title: 'Sing Up', Data: await getUsers()});
});

router.get('/index', async function(req, res, next) {
  res.render('index', { title: 'Sing Up', Data: await getUsers() });
});

// router.get('/home', function(req, res, next) {
//   res.redirect('/register')
//   res.render('home', { title: 'Home' });
// });



module.exports = router;
