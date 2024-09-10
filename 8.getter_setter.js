// THIS IS class base NEW SYNTAX OF GETTER AND SETTER
//===================================================
class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }


    //Ye humara getter hai----jitne bhi hum properties banate hai wo automectically getter ya setter ke method ban jate hai.
    get password(){
        //return this._password.toUpperCase();
        return `${this._password}rishav`.toUpperCase()
    }
    // Ye setter hai.
    set password(value){
        this._password = value;
    }
}

const rishav = new User("rishu@gmail.com", "sdLKSADFJLKSJDLFKJdfsdf")
console.log(rishav.password)
console.log(rishav.email)


//PROPERTY(definProperty base) KE DWARA GETTER AND SETTER- phle aise hi word hota tha
//===================================================================================
function newUser(email, password){
    this._email = email,
    this._password = password

    Object.defineProperty(this, "email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, "password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const karan = new newUser("karan@gmail.com", "karna123")
console.log(karan.email);
console.log(karan.password);

// OBJECT BASE GETTER AND SETTER
//==============================
const oldUser = {
    _email: "rehan@gmail.com",
    _password: "rehan258",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const rehan = Object.create(oldUser)           //Section 27.5: Setting an Object's prototype
console.log(rehan.email)
console.log(karan.password)

const randomColor = function (){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor);