import moment from 'moment'; // This is ES6 which gets translated by babel
// var moment = require('moment'); // require - this is the old version
var daddy_jokes=require('daddy-jokes');


console.log("hello Brian! Want a dad joke?");
console.log(daddy_jokes());

var datetime = moment().startOf("day").fromNow();
console.log(`Our day started ${datetime} hours ago!`);

console.log(moment().calendar());

console.log(moment("20190608", "YYYYMMDD").fromNow());
// console.log(moment("06082019", "MMDDYYYY").fromNow().format('llll'));
// console.log(moment.format('llll'));

console.log(moment("06082019", "MMDDYYYY").format('MMMM Do YYYY'));

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}

console.log(`Would you like to hear another joke?
  ${daddy_jokes()}`);
