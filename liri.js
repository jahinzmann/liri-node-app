import { join } from "path";
import { parse } from "querystring";

//Dependencies
require("dotenv").config();
var fs = require('fs') //file system node library allows file-system interactivity
var request = require('request'); //request node library
var LiriTwitterBOT = require.("./keys.js") //store data from keys.js
var twitter = require('twitter'); //twitter node library

//Pseudocode
// capture inputs with argv[] and join

// create code for the paramters regarding the pulls from each of the API's

// fs.appendFile to write results of API calls to the console log

// handle errors

// switch statements

// have a default backup response

// GIT requests:

// twitter
// spotify request library json.parse
// OMDB request libaray json.parse

// console.log all these calls in the desired format (create a new line for each item)

// random task inquiry