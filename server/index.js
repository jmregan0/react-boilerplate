const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// for server logs to help debugging
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, 'public')))

// requests contain a body. If you want to use it in req.body, you will need some body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// establish api routes
app.use('/api', require('./api'));

// didn't match route. Send back index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html');
});

// didn't find what you were looking for?
router.use(function(req, res, next){
  const err = new Error('Not found!');
  err.status = 404;
  next(err);
})

// last resort
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, function(){
  console.log('Its 212 degrees on port 3000!')
})
