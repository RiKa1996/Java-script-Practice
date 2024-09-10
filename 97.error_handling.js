setTimeout(() =>{
    console.log("Hacking wifi.... Please wait...")
},1000)

try{
    setTimeout(()=>{
        try{
            console.log(riya)       //ye code try ke ander hone ke bad bhi nhi chal rha hai.because try ke ander sirf synchronous code chalte hai.
        }catch(error){
            console.log(error.name)         //ReferenceError
            console.log(error.message)      //riya is not defined
        }    
        },100)                      //ydi hum setTimeout ke ander try catch chalaye to code run ho jayega.

    //console.log(rishav)
}
catch(error){
    console.log(error)
}
setTimeout(() =>{
    console.log("Hacking username and password.... Please wait...")
    
},2000)

setTimeout(() =>{
    console.log("Hacking rishu's facebook id.... Please wait...")
},3000)

setTimeout(() =>{
    console.log("Username and Password of rishu (+917210673579) fetched.... Please wait...")
},4000)

setTimeout(() =>{
    console.log("Hacked... bye.. bye..")
},5000)


//=============================================================
 async function main() {
    try {
    await Promise.reject(new Error("Invalid something"));
    } catch (error) {
    console.log("Caught error karan: " + error);
    }
   }
   main();
   

//=============This is our custom error
setTimeout(()=>{
    try {
        console.log(reyaz)
        throw new ram('Useful message');
    } catch (error) {
        console.log('Something went wrong rishu! ' + error.name);
        console.log('Something went wrong rishu! ' + error.message);
        console.log(error.stack)
    }
}, 7000)

// try {
//     undefinedFunction("This is try");
// } catch(error) {
//     otherUndefinedFunction("Uh oh... ");
//     console.log("This is catch", error);
// } finally {
//     console.log("This is our finally");
// }
// console.log("I won't run because of the uncaught error in the catch block!");


//YE EVAL- evaluate WALA CONCEPT HAI.
var x = '5*500';

console.log(eval(x))
