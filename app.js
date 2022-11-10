var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var electricityRouter = require('./routes/electricity');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var electricity = require("./models/electricity");
var resourceRouter = require("./routes/resource");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/electricity', electricityRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed onserver start
async function recreateDB(){
// Delete everything
await electricity.deleteMany();
let instance1 = new
electricity({Edistributor_Name:'NPDCL', electricity_gen:1000,
elctricity_type:'Wind energy'});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});

let instance2 = new
electricity({Edistributor_Name:"South", electricity_gen:2000,
elctricity_type:'Solar'});
instance2.save( function(err,doc) {
if(err) return console.error(err);
console.log("Second object saved")
});
let instance3 = new
electricity({Edistributor_Name:"East", electricity_gen:3000,
elctricity_type:'Nuclear'});
instance3.save( function(err,doc) {
if(err) return console.error(err);
console.log("Third object saved")
});
}
let reseed = true;
if (reseed) { recreateDB();}



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
