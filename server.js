// to use env variables
var dotenv = require('dotenv');
dotenv.config();

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var assert = require('assert');
var mongodb = require('mongodb');
var compression = require('compression');
var morgan = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
// var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var fallback = require('express-history-api-fallback');
var csp = require('helmet-csp');
// var User = require('./models/users');
// var { NODE_ENV, PORT, MONGODB_URL } = require('./.env');
var authRoutes = require('./APIserver/routes/auth-routes');

// MongoDB config
const url = process.env.MONGODB_URL;
const MongoClient = mongodb.MongoClient;

//test connection to Mongo
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
	assert.equal(null, err);
	console.log('Connection to MongoDB Established');
	db.close();
});

const app = express();
app.use(cors());
app.use(helmet());

// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"],
//     connectSrc: ["'self'" ,"http://localhost:8080"],
//     scriptSrc: ["'self'","'unsafe-inline'","'unsafe-eval'"]
//   }
// }));
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const compiler = webpack(webpackConfig);
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'production';

if (NODE_ENV === 'development') {
  // use morgan to log requests to the console
  app.use(morgan('dev'));

//   app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath,
//   }));

//   app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(compression());
}

app.use(express.static('dist/client'));

app.get('/', function(req, res, next) {
  res.send('testing root path')
})

// connect authentication routes
app.get("/signup", function(req, res){
  console.log("kikoo lol signup");
  next();
})
app.use("/api", authRoutes);

app.use(fallback(path.join(__dirname, '../../dist/client/index.html')));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The Express Server is Listening at ${PORT} in ${NODE_ENV} mode`);
});

module.exports = app;