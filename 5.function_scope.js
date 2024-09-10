function sayMyName(params) {
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("V")
}
//sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
// addTwoNumbers(55,44)

function addTwoNumbers(number1, number2){
    //console.log("rishav")
    //let result = number1 + number2
    //return result
    return number1 + number2
}
const res = addTwoNumbers(3,99);
//console.log("result:",res)

/* ----------------------------------------- */
function loginUserMessage(userName){
    return `${userName} just logged in`
}

//console.log(loginUserMessage("Rishav Kumar"));
//console.log(loginUserMessage("Rishav Kumar"));


function loginUserMessage(userName){
    if (userName === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}

//console.log(loginUserMessage("Rishav Kumar"));
//console.log(loginUserMessage());


function loginUserMessage(userName = "chotu"){           /* agar hum yha parameter me me chotu nhi dalege to undefined value aayegi */
    if (!userName) {
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage("Rishav Kumar"));
console.log(loginUserMessage());

/* ---------------------------------------------------------shopping card- */
function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(5555,55,66,55,669,"rishav",9,8,8,5,5,5,4,5))

/* object */
const user = {
    username: "Riyaz khan",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)
handleObject({                        /* yha hum direct object bhi pass kr skte hai. */
    username: "rehan ali",
    price: 388
})

/* Arrays */
const myNewArrays = [200,500,900,1000,18000];
function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArrays))
console.log(returnSecondValue([500,6600,9900,7700,6587]))     /* yha hum direct array se bhi pass kr skte hai. */

/* ====================SCOPE=================== */
var c = 3000;
let a = 5000;
if (true) {
    let a = 55
    const b = 66
    var c = 77     /* except let and const ke alawa var, console.log ho jata hai. */            
    console.log("inner A:", a)
}
console.log("outer A:", a)
//console.log(b)
console.log(c)

function foo() {
    var a = 'hello';
    console.log("result A:", a) 
}
console.log(a);

/* Scope level and mini hoisting in Javascript=========nested function */
function one(){
    const usernamee = "Rishav Kumar"

    function two(){
        const website = "youtube"
        //console.log(usernamee)
    }
    //console.log(website)         /* this is wrong kyoki ye block ke ander hona chaiye */

    two()
}
one();

/* if else ke ander */
if (true) {
    const username = "rishav"
    if(username === "rishav"){
        const website = "youtube"
       //  console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++
function addOne(num){
    return num + 1
}
//console.log(addOne(5));

const addThree = function(num){
    return num + 2
};
//console.log(addThree(55))

/* ============================ THIS(ye current context me change krta hai.) and arrow function in javascript============== */
const newUser = {
    username : "ramesh",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}
//newUser.welcomeMessage();
//newUser.username = "Rishav sharma"
//newUser.welcomeMessage()
console.log(this)          /* yha hume empty {} milta hai. */

function debate (){
    console.log(this)
}
//debate()

/* arrow function */
const newMen = () =>{
    let username = "Riyaz"
    console.log(this)
}
console.log(newMen())

/* pure arrow function --------------expicite return*/
const addFour = (num1, num2) => {
    return num1 + num2
}
console.log(addFour(35,22))

/* implicit return */
const addFive = (num1, num2) => (num1 + num2)            /* react me bahot use hota hai. implicite return ka */

// console.log(addFour(35,22))

const addSix = () => ({a:55, b:35})             /* object me aise likhte hai. */
// console.log(addSix())


/* IIFE-Immediately Invoked Function Expression */
(function coffee(){                      /* This is name IIFE */
    console.log(`database connected`)
})();

( (name) => {                            /* Unname IIFE */
    console.log(`DB connected two ${name}`)
} )('neha');


/*  call , apply and bind method */
let nam = {
    firstname: "sahil",
    lastname: "ali",
}
let printname = function (hometown, state) {
        console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state);
    }

printname.call(nam, "Lajpat Nagar", "new delhi");



let nam2 = {
    firstname: "sohail",
    lastname: "khan"   
}

// function borrowing
printname.call(nam2, "dehradhoon","uk");          //sohail khan
printname.apply(nam, ["Lajpat Nagar", "New delhi"]);