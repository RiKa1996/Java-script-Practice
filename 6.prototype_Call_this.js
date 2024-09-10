/* ----------ye Object aur Object ke new keyword ko samjhne ke hai ye do example.---------------- */
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 88;

//console.log(multipleBy5(5));
//console.log(multipleBy5.power);
//console.log(multipleBy5.prototype);

/* -------------------------------------------- */
function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){            /* yha humne createUser ka prototype banaya hai. ek increment function ke sath, jisme humne iske price ko dikhaya hai. */
    this.price++
}

createUser.prototype.printme = function(){
    console.log(`Price is ${this.price}`)
}

const coffee = new createUser("coffee", 30);         /* here new keyword is must important */
const capicino = new createUser("capicino", 100)

//coffee.printme()
//capicino.printme()

/* IMPORANT HAI-------------Yha se humara prototype wala portion suru ho rha hai.-------------------- */
// =====================================================================================================
let myName = "Rishav        ";
let myChannel = "tv       "

//console.log(myName.trim().length)
//console.log(myChannel.trueLength);        /* abhi ye undefined aa rha hai. */   /* ye question hume solve krna hai.---------hume ek method banana hai. */

let myHero = ["spiderman" , "batman"]

let heroPower = {
    spiderman: "sling",
    batman: "bat",
    // ye hum ek method bana rhe hai.
    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

//ye humne Object ko prototype de di hai.
Object.prototype.rishav = function(){
    console.log(`rishav is present in all Object`)
}

// kya humare pass aisa koi Rishav method hai jo ki hum axis kr skte hai.
//heroPower.rishav()         //ye rishav object humne banaya hai.
//myHero.rishav()             //ye hum array ke liye check kr rhe hai ki iske pass bhi rishav object ki power hai. kya

//ab hum array ko prototype dene per
Array.prototype.heyRishav = function(){
    console.log(`heyRishav is present in all Array`)
}

//myHero.heyRishav()
//heroPower.heyRishav()       //because this is Object , isliye ye error aa rhi hai.


/* -------------------ye Inheritance hai--------------------- */
//Section 27.3: Prototypal inheritance
//Section 27.5: Setting an Object's prototype
// =============================================================
const user = {
    username: "rehan",
    email: "rehan@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


/* -----modern syntax------ */
// ===========================
Object.setPrototypeOf(TeachingSupport, Teacher)


/* ============================================================================================ */
let anotherUserName = "rishavKaGhar            "

String.prototype.trueLength = function(){
    //console.log(`${this}`);                   //anotherUserName ka refrence hi rihsvKaGhar hai
    //console.log(`${this.name}`);            //this.name ka koi axis humpe nhi hai isliye undefined aaya hai.
    console.log(`True Length is ${this.trim().length}`);
}

//anotherUserName.trueLength()
//"Rishav Kumar".trueLength()
//"My name is Rishav kumar".trueLength()   //ye trueLength banaya hai

/* ================Call and this keyword============================================= */
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email,
    this.password = password
}

const karan = new createUser("Karan Kumar", "karan@gmail.com", 123)
console.log(karan);