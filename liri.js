//Dependencies
require("dotenv").config();
var fs = require('fs') //file system node library allows file-system interactivity
var request = require('request'); //request node library
var LiriTwitterBOT = require.("./keys.js") //store data from keys.js
var twitter = require('twitter'); //twitter node library