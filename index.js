let express = require('express');
let logger = require('morgan');
let helmet = require('helmet');
let connection = require(__dirname + "/lib/connect_mysql.js");
/*Routes:*/
let home = require('./routes/home');

var app = express();
app.use(helmet());
app.use(logger('tiny'));
//main pages
app.use('/', home);

module.exports = app;