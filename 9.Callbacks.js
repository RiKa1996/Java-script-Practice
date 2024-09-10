// ==============================THIS IS SYNCHRONOUS PROGRAMMING
//Section 29.2: Continuation (synchronous and asynchronous)

//console.log("one")
//console.log("two")
//console.log("three")
//console.log("four")

// =============================THIS IS ASYNCHRONOUS PROGRAMMING
console.log("one")
console.log("two")
console.log("three")
setTimeout(() => {
    console.log("hello");
}, 1000);
console.log("four")
console.log("five")

// ============================================THIS IS CALLBACKS
//Section 29.3: What is a callback?
function sum(a,b){
    console.log(a + b);
}

function calculator(a , b, sumCallback){
    sumCallback(a, b)
}
calculator(1, 5, sum);

const hello = () =>{
    console.log("everyone")
}
setTimeout(hello, 2000);

// =============================CALLBACK HELL----nested callback
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// getData(1, () => {                                       //Section 29.5: Callback using Arrow function
//     console.log("getting data2....")
//     getData(2, () => {
//         console.log("getting data3....")
//         getData(3)
//     });
// });

// ==================================Section 29.2: Continuation (synchronous and asynchronous)

