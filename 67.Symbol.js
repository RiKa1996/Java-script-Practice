console.log("rishu is my name.")
//symbol is primitive data type
const sym1  = Symbol('my identifier');
const sym2  = Symbol('my identifier');

console.log('Symbol is :', sym1);
console.log(typeof(sym1));
console.log(sym1 === sym2);

const a = "rishu";
const b = "rishu";

console.log(a === b);
console.log( null=== null);
console.log( undefined === undefined);

const key1 = Symbol('identifier');
const key2 = Symbol();

let myObj = {};

myObj[key1]= "rishav";
myObj[key2]= "karan";
myObj["name"] = "Good Boy" ///sljdfs;

console.log(myObj[key1]);
console.log(myObj[key2]);            //symbol me hu ----console.log(myObj.key2 ) nhi kr skte.;
console.log(myObj.key2);             //!! ALERT !!cannot do this to get karan because it is same as myObj["key2"];

//console.log(myObj)

// for (key in myObj){             //for in loop ke ander Symbol ko ignore kiya jata hai.
//     console.log(key, myObj[key]);

// }

console.log(JSON.stringify(myObj));    //JSON.stringify object me convert kr deta hai.
