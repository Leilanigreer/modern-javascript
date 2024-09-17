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


function f() {
  {
    let x;
    {
      // this is ok since it's a block scoped name
      const x = "sneaky";
      // error, was just defined with `const` above
      x = "foo";
    }
    // this is ok since it was declared with `let`
    x = "bar";
    // error, already declared above in this block
    // let x = "inner";
  }
}


