var moment = require('moment'); // require


/* global moment */

console.log("hello world");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(moment().calendar());

console.log(moment("20190608", "YYYYMMDD").fromNow());
// console.log(moment("06082019", "MMDDYYYY").fromNow().format('llll'));
console.log(moment.format('llll'));