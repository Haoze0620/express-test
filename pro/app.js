var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session=require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter=require('./routes/register');
var reloginRouter=require('./routes/relogin');
var bokeRouter=require('./routes/boke');
var detailRouter=require('./routes/detail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'recommend 128 bytes random string', 
 cookie: { maxAge: 20 * 60 * 1000 },
 resave: true,
 saveUnintialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/login', loginRouter);
app.use('/register',registerRouter);
app.use('/relogin',reloginRouter);
app.use('/boke',bokeRouter);
app.use('/detail',detailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;