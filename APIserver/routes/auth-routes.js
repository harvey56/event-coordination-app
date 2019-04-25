// to use env variables
var dotenv = require('dotenv');
dotenv.config();

var express = require('express');
var assert = require('assert');
var mongodb = require('mongodb');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var validateUser = require('../utils/validateUser');

const url = process.env.MONGODB_URL;
const MongoClient = mongodb.MongoClient;

const router = module.exports = express.Router();

function createToken(user_id) {
  return jwt.sign({user: user_id}, process.env.JWTTOKEN_SECRET, { expiresIn: 60*60*24 });
}

// Sign Up new user
router.post('/signup', function(req, res) {

  const user = req.body;
  const { email, username, password } = req.body;

  const validation = validateUser(user);
  if (validation.isValid) { // true if all fields have been entered correctly
      MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        if (err) throw err;

        assert.equal(null, err);
        const db = client.db('event-coord-app');
        
        db.collection('users').findOne({ "userProfile.email": email }) // Check if this user already exists in the DB
          .then( (response) => {
            if (response === null) { //this user does not already exist in the DB so we add it              
              const hash = bcrypt.hashSync(password, 10); // hash password for storage
              const userProfile = {
                username,
                email,
                password: hash,
              }

              db.collection('users').insertOne({ userProfile })
              .then( () => {
                res.setHeader("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type", "Authorization");
                return res.status(201).send({
                  user: username,
                  id_token: createToken(userProfile.email)
                });
              })
              .catch(error => { 
                console.log('error: ', error); 
                throw error;
              });
            }
            else { 
              res.status(400).send('This user already exists in the database') 
            }
          })
          .then ( () => { client.close(); })
          .catch(error => { 
            console.log('error: ', error); 
            throw error;
          });      
      })
  }
  
  else {// if user submission was invalid return errors to the client
    console.log('Invalid Registration:', validation.errors);
    res.status(400).send('Registration failed, some form entries are invalid');
  }
});

// Handle user login
router.post('/login', function(req, res) {

  const { email, password } = req.body;

  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;

    assert.equal(null, err);
    const db = client.db('event-coord-app');

    db.collection('users').findOne({ "userProfile.email": email })
      .then( (data) => {
        if (data === null) { // user does not exist in database
          res.status(401).send({
            error: 'User does not exist'
          });
        }        
        
        bcrypt.compare(password, data.userProfile.password)
          .then( match => { // if password is right, match is true
            if (match) {
              return res.status(201).send({
                user: data.userProfile.username,
                id_token: createToken(data.userProfile.email)
              });
            }
            else {
              return res.status(401).send({
                error: 'Wrong password'
              });
            }
          })  
          .catch(error => { 
            console.log('error: ', error); 
            throw error;
          });        
      })
      .then ( () => { client.close(); })
      .catch(error => { 
        console.log('error: ', error.message); 
        throw error;
      });

  })
});

router.get('/checkToken', function(req, res, next) {
  const token = req.body.token || req.query.token;
  
  if (!token) {
   return res.status(401).json({message: 'no token'});
  }

  jwt.verify(token, process.env.JWTTOKEN_SECRET, function(err, user) {
    if (err) throw err;

    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) throw err;
  
      assert.equal(null, err);
      const db = client.db('event-coord-app');
  
      db.collection('users').findOne({ "userProfile.email": user.user })
      .then( () => {
        res.json({
          username: res.username,
          token: token
        });
      })
      .then ( () => { client.close(); })
      .catch(error => { 
        console.log('error: ', error.message); 
        throw error;
      });
    });
  });
});