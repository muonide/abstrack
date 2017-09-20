var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://abstrack:upupaway@ds135234.mlab.com:35234/abstrack', (err, database) => {
	if (err) return console.log(err)
	db = database

})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//var NLTunnel = require('node-local-tunnel');
    
//var options = {
//	remoteHost : 'your-public-server.com',
//	localBase : 'http://localhost:3000'
//};
//NLTunnel.client(options); // just call client() somewhere with options, you are free to go 


app.post('/', function (req, res) {
    res.sendStatus(200)
    console.log(req.body)
    var hex  = req.body.data.toString()
	var str = ''
	for (var n = 0; n < hex.length; n += 2) {
	str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
    }
    console.log(str)
    db.collection('telemetry').save(req.body, (err, result) => {
       if (err) return console.log(err)
       console.log('Telemetry saved to database')
  })
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
