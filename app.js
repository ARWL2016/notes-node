console.log("Starting app.js");

const fs = require('fs');
const os = require('os'); 
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('And'));
var filteredArray = _.uniq(["Ann", "Ann", 1, 2, 3, 4, 2, 3]);
console.log(filteredArray);

var res = notes.add(9, 10);
console.log(`The result is ${res}`);

var user = os.userInfo(); 

fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}.\n`);

