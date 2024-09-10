/* ========================Section 13.1: Shallow cloning ==================*/
const object1 = {name: 'rishu', salray:250000, job: 'ABC'}
const resultOb1 = Object.assign({}, object1);
//console.log(resultOb1);

/* with Object rest/spread oprator */
let {p, q, ...r} = {p: 1, q: 2, r: 55, a: 23, b: 32};           /* This is rest opreator */
console.log(p, q, r)

let n = {p, q, ...r};                                           /* This is spread oprator */
console.log(n);

/* This is our .hasOwnProperty() */
var existing = {a:1, b:2, c:3};
var clone = {}
for (const prop in existing) {
    if (existing.hasOwnProperty(prop)) {
        clone[prop] = existing[prop];
        
    }
}
//console.log(existing)

let user = {
    name: "Rishav",
    age: "50"
}
let result  = user.hasOwnProperty("age")
//console.log(result)

/* ========================Section 13.2: Object.freeze========================= */
let object2 = {
    name: "Karan",
    age: 4,
    nested:{
        name: "nested object"
    }
};
Object.freeze(object2);


object2.name = 'rishav'
delete object2.age;
console.log(object2)
Object.freeze(object2.nested);
object2.nested.name = "new nested object"
console.log(object2)

/* ========================Section 13.3: Object cloning */
/* JSON.parse    and    JSON.stringify */
const parseJSON = '{"result": "Passed", "rollNo": 12665584}';       /* yha hume object ko string banana padta hai single comma pe pair me */
const objJSON = JSON.parse(parseJSON)
//console.log(objJSON.result)
//console.log(objJSON.rollNo)

/* this is JSON.stringify */
/* console.log(JSON.stringify({result: String('passed'), rollNo: 12665584}));
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.stringify([new Number(5555), new String('Rishav kumar'), new Boolean(false)]))
console.log(JSON.stringify({x: [10000, undefined, function (){}, Symbol('')]}))
console.log(JSON.stringify(new Date(2024, 2, 5, 16, 2, 6))) */

/* ========================Section 13.5: Object.assign */
const assignObj = {
    firstName: "Rishav kumar",
    status: "unmarried"
}
//console.log(assignObj)
Object.assign(assignObj, {lastName: "verma", age: 52})
//console.log(assignObj)

/* ========================Section 13.7: Object.defineProperty */
const defineObj = {};
Object.defineProperty(defineObj, "property5", {
    value: 55,
    writable: true,
    configurable : false,
    enumerable : true
});
console.log(defineObj.property5.configurable);

/* ========================Section 13.8: Accesor properties (get and set) */
const personGet = {name: 'paro', surname: 'maya'};
Object.defineProperty(personGet, 'fullName', {
    get: function () {
        return this.name + " " + this.surname;
    },
    set: function (value) {
        [this.name,this.surname] = value.split(" ");
    }
})
console.log(personGet.fullName);
personGet.surname = 'devi';
console.log(personGet.fullName);
console.log(personGet.name);

/* ========================Section 13.9: Dynamic / variable property names */
/* var dictionary = {
    lettuce: 'a viggie',
    banana: 'a fruit',
    tamoto: 'it depends on who you ask',
    apple: 'a fruit',
    Apple: 'Stave jobs rocks!'
}
var word = prompt('What word would you like to look up today')
var definition = dictionary[word]
alert(word + '\n\n' + definition)

console.log(dictionary.word) */

/* ========================Section 13.10: Arrays are Objects */
/* =================Section 13.12: Convert object's values to array */
const convertObj = {
    a: 'I',
    b: 'Love',
    c: "You"
}
const convertArray = Object.keys(convertObj)
    .map(function(key){
        return convertObj[key];
});
console.log(convertArray)

/* ========================Section 13.13: Retrieving properties from an object */
/* Object.keys()  */
const keysFun = {
    a: 'ram',
    b: 'shayam',
    c: 'shambhu'
}
console.log(Object.keys(keysFun));

/* Object.getOwnProperties */

/* ========================Section 13.17: Object.getOwnPropertyDescriptor */
const object3 = {
    property1: 25000000,
    property2: 62500000
}
console.log(Object.getOwnPropertyDescriptor(object3, 'property2').configurable);
console.log(Object.getOwnPropertyDescriptor(object3, 'property2').value);

/* ========================Section 13.22: Iterating over Object entries - Object.entries()
 */
const object4 = {
    a: 'somestring',
    b: 42,
};
  
  for (const [key, value] of Object.entries(object4)) {
    console.log(`${key}: ${value}`);
}

/* ========================Section 13.23: Object.values()*/
const object5 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object5));

  let a = 1
  let b = 1
  let c = Math.hypot(a,b)
  console.log(c)

  /* ==================Chapter 16: Constructor functions=====Section 16.1: Declaring a constructor function */
  /* Section 17.1: Modifying constants */
function Student(first, last, age, cls){

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}
Student.prototype.nationality = 'Indian';

var student1 = new Student('Rishav', 'Kumar', 32, '12th');
var student2 = new Student('Karan', 'Kumar', 5, '5th');
console.log(student1)
console.log(student2)

console.log(student2.nationality)

/* ===================Chapter 17: Declarations and Assignments */