
setTimeout(function timer() {
    console.log('You clicked the button!');    
}, 2000);

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

//console.log("Welcome to loupe.");

"use strict";
a = 12; // ReferenceError: a is not defined
//console.log(a);

var num = 12345665445566867.89,formatted;
formatted = num.toFixed(2).replace(/\d(?=(\d{5})+\.)/g, '$&,'); // "1,234,567.89"
console.log(formatted)

