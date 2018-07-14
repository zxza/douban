var express = require('express')
var request = require('superagent')

var app = express();
var HOST = 'http://api.douban.com/v2'

app.all('*', function(req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
})

app.get('/movie/:type', function(req, res){
  var sreq = request.get(HOST + req.originalUrl);
  sreq.pipe(res);
  sreq.on('end', function (error,res) {
    console.log('end');
  })
})



app.listen(8080, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8080')
})
