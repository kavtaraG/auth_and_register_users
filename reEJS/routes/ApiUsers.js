var express = require('express');
var app = express.Router(); 

const Users = require('../models/Users');
const ErrorHandler = require('../utils/error');
const { getUsers, addUsers } = require('../services/mongo-users');

// var users = [
//     { username: 'dude', password: '123456'}
// ]

app.get('/', async (req, res, next) => {
    try{
        res.send(await getUsers());
    }catch(err){
        // console.log(`Error from get API: ${err}`);
        next(err);
    }
    
});

app.post ('/', async (req, res, next) => {
    try{
        console.log(req.body);
        var record = req.body;
        await addUsers(record);
        res.send({status: 'ok', msg: 'POST from routes/ApiUsers.js'});
    }catch(err){
        // console.log(`Error from post API: ${err}`);
        next(err);
    }
    
});

module.exports = app;