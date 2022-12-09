const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const User = require('../models/Users');
// const ObjectId = require('mongodb').ObjectID;

const User = require('../models/Users');


const dbName = 'users';
const url = 'mongodb://localhost:27017';


const getUsers = function(){ 
    return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true},
      function(err, client) {
      assert.equal(null, err);
      const db = client.db(dbName);
        db.collection('user').find().toArray(function (err, result) {
          if (err) throw err
          //console.log(result);
          client.close();
          resolve(result);
        });
    });
    });
    
  };

// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     User.find().exec((err, result) => {
//       if(err) throw err;
//       console.log(result);
//       resolve(result);
//     });
//   });
// };

  const addUsers = function(record) {
    return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
      assert.equal(null, err);
      const db = client.db(dbName);
      const collection = db.collection('user');
      collection.insertMany([record],function(err,result){
        resolve({result:'success'});
        client.close();
        // resolve(result);
        // reject(err);
      });
      });
    });
  };

  // const addUsers = async (record) => {
  //   const user = new User ({
  //     username: record.username,
  //     password: record.password,
  //     name: record.name,
  //     surname: record.surname,
  //     email: record.email,
  //     userId: record.userId
  //   })
  //   try{
  //     let savedUser = await user.save();
  //     return savedUser;
  //   }catch(err){
  //     console.log(err);
  //     return err;
  //   }
  // }

module.exports = {getUsers, addUsers};