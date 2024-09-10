/* let age = 15;
let drive;

if(age >= 18){
    drive = "You can drive.";
}
else{
    drive = "You can't drive"
};

document.write(drive); */

/* ============== Section 11.1: Ternary operators=========*/
let age = 5;
let drive = (age != 18) ? "You can drive." : "You can't drive";

console.log(drive);
document.write(drive);

var a = 1;
a === "hi" ? alert('Hey, it is 1!') : ("no");

document.write("hi everyone!")

/* ============== Section 11.2: Switch statement ======== */
let daysNo = 5;
switch(daysNo){
    case(1):document.write("Monday");
    break;
    case(2):document.write("Tuesday");
    break;
    case(3):document.write("Wednesday");
    break;
    case(4):document.write("Thursday");
    break;
    case(5):document.write("Friday");
    break;
    case(6):document.write("Saturday");
    break;
    case(7):document.write("Sunday");
    break;
    default:document.write("No...")
}

/* let formSummitNo = prompt("Form No..");
switch(true){
    case(formSummitNo>=1 && formSummitNo<=50) : document.write('Your form has been summited');
    break;
    
    default: document.write('Your form has not been summited');
} */

/* ============== Section 11.3: If / Else If / Else Contro ============*/
const firstCon = 100;
if (firstCon === 6){
    document.write("I am your first if");
} else{
    if(firstCon>=5 && firstCon<=10){
        document.write("Radhe Radhe")
    } else{
        document.write("Shyam Shyam");
    }  
}

/* --------------This is if/else if/ else- */
/* const secondCon = prompt("Days Number..."); */
const secondCon = 55;
if (secondCon>=1 && secondCon<=3){
    document.write("Today is Sunday!")
} else if(secondCon>=4 && secondCon<=6){
    document.write("Today is Tuesday!")
} /* else if(secondCon>=20){
    document.write("Today is party day!")
a
} */ else{
    document.write("Holiday!....")
}

/* ==============Section 11.4: Strategy========================== */
const animalVoice = {
    dog (){
        return "woof";
    },
    cat (){
        return "meow";
    },
    lion (){
        return "roar";
    },
    cow (){
        return "maa";
    },
    goat (){
        return "meah";
    },
    default(){
        return "chal nikal"
    }
};

function makeanimalVoice (animal){
    const speak = animalVoice[animal] || animalVoice.default;  /* Section 11.5: Using || and && short circuiting */
    document.write(animal + " says " + speak() + "<br>")
}

makeanimalVoice('dog')
makeanimalVoice('cat')
makeanimalVoice('lion')
makeanimalVoice('cow')
makeanimalVoice('goat')
makeanimalVoice('snake')

/* =============Section 12.1: Converting Array-like Objects to Arrays =======*/
/* forEach array method */
const studentName =["Ram", "Shayam", "Rishu", "Ritu", "Kasim"];
studentName.forEach(function(value, index){
    document.write(index + ":" + value + "<br>");
});

const books = [
    {title: "Book One", genre: "Fiction", publish: 1981, edition: 2004},
    {title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2007},
    {title: "Book Three", genre: "History", publish: 1999, edition: 2010},
    {title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2014},
    {title: "Book Five", genre: "Science", publish: 2009, edition: 2015},
    {title: "Book Six", genre: "Fiction", publish: 1987, edition: 1996},
    {title: "Book Seven", genre: "History", publish: 1986, edition: 2011},
    {title: "Book Eight", genre: "Science", publish: 2011, edition: 2007},
    {title: "Book Nine", genre: "Non-Fiction", publish: 2015, edition: 2001},
    {title: "Book Ten", genre: "History", publish: 1996, edition: 1997},
]

let userBooks = books.filter( (bk) => bk.genre === "Fiction")
userBooks = books.filter( (bk) => {return bk.publish >= 2000});         /* {bk.publish >= 2000}-this is scope */
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History";

});
console.log(userBooks);


/* filter array */
const myNums =[1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (num) => num > 4);
    console.log(newNums);


/* map array method */
const myNumers = [1,2,3,4,5,6,7,8,9,10];

const newNumss = myNumers.map( (num) => { return num + 10} );
    console.log(newNumss)

/* ------------- */
let numm = [22,33,44,55,-5,66,77]
const nummb =numm.reduce(function (a,b){
    return a < b ? b:a
},Infinity);
console.log(nummb);

/* keys mehtod */
const keysArray = ['aman', 'rishav', 'sneha', 'ritu', 'rehana']
for(let key of keysArray.keys()){
    console.log(key);
}