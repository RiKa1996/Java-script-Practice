/* ---------class is keyword */
/* class User {
    constructor(username, email, password){                 //Section 22.1: Class Constructor
        this.username = username,
        this.email = email,
        this.password = password
    }
    //this is method                                        //Section 22.6: Methods
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){                                       
        return `${this.username.toUpperCase()}`
    }

} */
// this is user jo humne banaya hai.
//const coffee = new User("Rishav Kumar","rishu@gamil.com","123")
//console.log(coffee)
//console.log(coffee.encryptPassword());
//console.log(coffee.changeUserName())

/* ----------------------------------------------------------- */
/* Behind the sean-------function dwara  */
function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Rishav Kumar","rishu@gamil.com","123")
//console.log(tea.encryptPassword());
//console.log(tea.changeUserName());


/* ===========================inheritance========= */
class newUser {
    constructor(username){
        this.username = username
    }
    //ye method hai                                                     //Section 22.7: Dynamic Method Names
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends newUser{                                         //Section 22.2: Class Inheritance
    constructor(username, email, password){

        super(username)                     //this is super keyword
        this.email = email,
        this.password = password 
    }

    addCource(){
        console.log(`A new cource was added by ${this.username}`)
    }
}

const neha = new newUser("neha");
const karan = new Teacher("Rehaz", "rehaz@gamil.com", "123")

//neha.logMe()
//neha.addCource()             //TypeError: neha.addCource is not a function
//karan.addCource();
//karan.logMe()

//console.log(neha instanceof newUser)          /* this is just instance */

/* ===============static property==================== */
class userNew {
    constructor(username){
        this.username = username;
    }

    logIn(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){                           //static us method ya property ko axis hone se rokta hai.
        return "123"                             //Section 22.3: Static Methods
    }
}
//jaise hi ek user bane us user ko ek uniqe id mil jaye-----like mongoDB
const rehana = new userNew("rehana")
//console.log(rehana.createId());                 //TypeError: rishav.createId is not a function
rehana.logIn()

class Madam extends userNew {
    constructor(username, email){
        super(username),
        this.email = email
    }
}

const students = new Madam("majnu", "raman@gmail.com");
students.logIn();
//console.log(student);