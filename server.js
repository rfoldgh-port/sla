var express = require('express');
var bodyParser = require('body-parser');
var GoogleStrategy = require('passport-google-oauth');

// var config = require('./config');
var mongoose = require('mongoose');

var app = express();
app.use(express.static('./build'));
app.use(bodyParser.json());

