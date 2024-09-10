//THIS IS DESTRUCTURING ASSIGNMENT AND SPREAD(rest operator) OPERATOR
//===================================================================
let arr = [55,36, 555,56,54,38,78,98,74,562,365,]
//No need to do this:
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d,rest)

let [a, , , , d, , , ...rest] = arr              //space ki jagah pe rest ki value nhi aati hai.
console.log(a, d,rest)

//==============================================================================================
let user = {
    name: 'Jill',
    age: 33,
    profession: 'Pilot'
} 
// function greeting ({name, profession}) {
//     console.log(`Hello, ${name} the ${profession}`)
//}
//greeting(user);

//ydi hum name change krna chahte hai to
console.log({...user, name:"rawan", profession: "ABC"})
console.log({name:"rawan", profession: "ABC",...user})   //isme ...user phle nhi likha gya hai isliye value change nhi hui hai.

//This also works for arrays:
//=============================
let parts = ["Hello", "World!"];
function greetinge ([first, second]) {
    console.log(`${first} ${second}`);
}

greetinge(parts)