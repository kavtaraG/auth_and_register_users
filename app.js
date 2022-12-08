var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

dotenv.config({path: './dotenv/config.env'});

const connectDB = require('./test-mongo.js');
// const error = require('./utils/error');

//connect to database
connectDB();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userApi = require('./routes/ApiUsers');
 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/users', userApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  // if(err.name === 'CastError'){
  //   const message = `Resource not found ${req.body}`
  //   }
    
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening to the port: ${PORT}`);
});

process.on('uncaughtException', (err, promise) => {
  console.log(`unhandled Error: ${err.message}`);
  server.close(() => process.exit(1));
});


module.exports = app;
