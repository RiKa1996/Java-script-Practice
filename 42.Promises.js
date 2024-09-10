//ONE
//===========================================================================================
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //Database calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compleated')
        resolve()
    },1000)
})
promiseOne.then(function(){                 //we get in .then one function
    console.log("Promise consumed with PromiseOne")
})

//TWO---------------isme ek me hi kr diya humne compair to ONE
//===========================================================================================
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved with promiseTwo")
})

//THREE
//===========================================================================================
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "rishu", email: "rishu2041996@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//FOUR
//===========================================================================================
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "rana", password: "rana123"})
        }
        else{
            reject("ERROR: Somethin went wrong with promiseFour")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {             //Section 42.2: Promise chaining
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The Promise is either resoved or rejected");
})

//FIVE
//===========================================================================================
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Rishav Kumar", password: "rishu1234"})
        }
        else{
            reject("Error: js went wrong with promiseFive")
        }
    }, 1000)
})
//promiseFive.then()                   //promise.then ke alawa bhi aur syntax hai
async function consumePromiseFive() {               //this is async function and await
    // const response = await promiseFive
    // console.log(response);
    try {                                   //tryCatch me clear hume print hoke mil jata hai. error aur 
        const response = await promiseFive  //tryCatch use nhi krte to hume error ko discribe kr ke deta hai.
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

//getAllUsers---------async function ke throw
// async function getAllUsers(){
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // const data = await response.json()                                                //is file ko json me convert kr dega , because ye phle se nhi hota 
//     // console.log(data);
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()                                                //is file ko json me convert kr dega , because ye phle se nhi hota 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

/* async ke alawa .then .catch se krne per */
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(respose){
    return respose.json()

}).then(function(data){
    console.log(data);

}).catch(function(error){
    console.log(error)
})
