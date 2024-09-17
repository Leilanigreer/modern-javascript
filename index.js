var moment = require('moment'); // require
var daddy_jokes=require('daddy-jokes');


console.log(daddy_jokes());
console.log("hello world");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(moment().calendar());

console.log(moment("20190608", "YYYYMMDD").fromNow());
// console.log(moment("06082019", "MMDDYYYY").fromNow().format('llll'));
// console.log(moment.format('llll'));

console.log(moment("06082019", "MMDDYYYY").format('MMMM Do YYYY'));


