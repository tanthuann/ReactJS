'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _booksModel = require('./models/books.model.js');

var _booksModel2 = _interopRequireDefault(_booksModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

(0, _mongoose.connect)(process.env.MONGO_URL);

var app = (0, _express2.default)();
var port = 5000;

app.use('/api/books', _booksModel2.default);

app.get('/', function (req, res) {
  return res.send('Hello World!ddd');
});

app.listen(port, function () {
  return console.log('Example app listening on port ' + port + '!');
});