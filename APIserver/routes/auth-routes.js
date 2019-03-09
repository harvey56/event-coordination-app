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

function createToken(username) {
  return jwt.sign({user: username}, process.env.JWTTOKEN_SECRET, { expiresIn: 60 * 30 });
}

router.get('/signup', function(req, res,) {
  res.send("got api/signup/")
})

// Sign Up new user
router.post('/signup', function(req, res) {

  const user = req.body;
  console.log("user registering: ", user);
  const { email, username, password } = req.body;
  console.log('New registration received on server');

  const validation = validateUser(user);
  console.log("validation: ", validation);
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
              console.log("userProfile: ", userProfile);

              db.collection('users').insertOne({ userProfile })
              .then( () => {
                res.status(201).send({
                  user: username,
                  id_token: createToken(username)
                });
              })
              .catch(error => { console.log('error: ', error.message); });
            }
            else { 
              res.status(400).send('This user already exists in the database') 
            }
          })
          .then ( () => { client.close(); })
          .catch(error => { console.log('error: ', error.message); });      
      })
  }
  
  else {// if user submission was invalid return errors to the client
    console.log('Invalid Registration:', validation.errors);
    res.status(400).send('Registration failed, some form entries are invalid');
  }
});

// Handle user login
router.post('/api/users/login', function(req, res) {

  const user = req.body;
  const { username, email, password } = req.body;

  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;

    assert.equal(null, err);
    const db = client.db('event-coord-app');

    db.collection('users').findOne({ "userProfile.email": email })
      .then( (data) => {
        if (data === null) { // user does not exist in database
          console.log('User does not exist');
          res.status(401).send('User does not exist');
        }        

        bcrypt.compare(password, data.userProfile.password)
          .then( match => { // if password is right, match is true
            if (match) {
              res.status(201).send({
                user: username,
                id_token: createToken(username)
              });
            }
            res.status(401).send('Wrong password');
          })  
          .catch(error => { 
            console.log('error: ', error.message); 
          });        
      })
      .then ( () => { client.close(); })
      .catch(error => { 
        console.log('error: ', error.message); 
      });

  })
});