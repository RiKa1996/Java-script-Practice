//=========================Dates

//let myDate = Date()
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);         //Date is OBJECT

//if we have to create specific date
// let myCreateDate = new Date(2024, 8, 30);       //Mon Sep 30 2024
let myCreateDate = new Date("2024-5-30");         //30/5/2024, 12:00:00 am
console.log(myCreateDate.toLocaleString())

//====================TIMESTAMPS
let myTimeStamps = Date.now()
console.log(myTimeStamps);                //this is millisecond---1722665160323
console.log(myCreateDate.getDate())
console.log(myCreateDate.getDay())
console.log(myCreateDate.getHours())
console.log(myCreateDate.getFullYear())
console.log(myCreateDate.getMilliseconds())
console.log(myCreateDate.getSeconds())
console.log(myCreateDate.getTime())
console.log("rishav kumar")
console.log(Date.now())
console.log(Math.floor((Date.now())/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());




let result = newDate.toLocaleString('default', {
    weekday:"long"
    
})

console.log(result);

//41. GENERATORS
console.log("This is generators chapter")

function* numberGen(){
    let i = 0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    
}
const gen = numberGen();
// console.log(gen);
console.log(gen.next());     //Section 41.2: Sending Values to Generator
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());    //Section 41.3: Delegating to other Generator
console.log(gen.next());     //{ value: undefined, done: true }

//Section 41.4: Iteration
console.log("This is iteration")

function* numberGenn(){
    while(true){
        let i=0;
        yield (i++);
        
    }
}
const genn = numberGenn();
// console.log(gen);
console.log(genn.next());     //Section 41.2: Sending Values to Generator
console.log(genn.next());
console.log(genn.next());
console.log(genn.next());
console.log(genn.next());    //Section 41.3: Delegating to other Generator
console.log(genn.next());   
console.log(genn.next());   
console.log(genn.next());   
console.log(genn.next());   
console.log(genn.next());   
console.log(genn.next());   


