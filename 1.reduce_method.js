/* =================Reduce mehtod------- Array sum */
/* const arrSum = [1, 2, 3, 4]; */
const arrSum = [3];
const arraySum = arrSum.reduce(function(a ,b){
    console.log(a,b)
    return (a + b);
},1);
console.log(arraySum);

/* =================Flatten Array of Objects */
const flattenArray = [{
    key: 'one',
    value: 1
},{
    key: 'two',
    value: 2
},{
    key: 'three',
    value: 3
}]

flattenArray.reduce(function(obj, current) {
    obj[current.key] = current.value;
    return obj;
},{});
   
flattenArray.reduce((obj, current) => Object.assign(obj, {
    [current.key]: current.value
   }), {});
   

   /* =================map method-================= */
/* Section 12.5: Sorting Array ------------.sort() method*/
console.log(['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort());
console.log([0,1,2,34,3,4,-45,-88,5,6,'n',,-1,-9,7,8,9,'a','z',35,35,26,11,12,99,'A','Z',null,undefined,5.2,'a','z','A','B'].sort());

/* ===============Alphabetical Sort */
const sortValue = [0,1,2,34,3,4,-45,-88,5,6,'n','',-1,-9,7,8,9,'a','z',35,35,26,11,undefined,12,99,'A','Z',5.2,'a','z','A','B'];
const sorted = sortValue.sort((a,b) => {
    return a.toString().localeCompare(b);
})
console.log(sorted);

/* ===============String sorting by length (shortest first) */
const stringValue = ['Rishav', 'Anshul', 'Divya', 'Divyansh', 'Aayansh', 'Gopal'];
const stringSort = stringValue.sort(function (a, b){
    /* return a.length - b.length;            Accending order */
    return b.length - a.length;            /* Decending order */
})
console.log(stringSort);

/* ===============Section 12.6: Iteration (Loops) */
for (let i = 0; i <= 5; i++){
    const element = i*5;
    if (element == 10) {
        // console.log("Five is best no.");
    }
    // console.log(element);
}
/* console.log(element); */           /* is element ka humpe bahar me koi excis nhi hota */

/* nested loop */
for (let i = 1; i <= 3; i++){
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        //console.log(i + '*' + j + " = " + i*j)
    }
}

let myArray = ['flash', 'batman', 'superman']
console.log(myArray.length)
for (let i = 0; i< myArray.length; i++){
    //const element = myArray[i];
    //console.log(element);
}

/*  break keyword==========array */
/* for (let index = 1; index <= 20; index++) {
    if (index == 7){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${index}`)
    
} */

for (let index = 1; index <= 20; index++) {
    if (index == 7){
        console.log(`Detected 7`)
        continue
    }
    console.log(`Value of i is ${index}`)
    
    
}

/* =================While loop================= */
/* let whileLoop =0
while (whileLoop <= 10) {

    // console.log(`value of index is ${whileLoop}`);
    whileLoop = whileLoop + 2
} */

/* let whileArray = ["A","B", "C"]
let arr = 0
while (arr < whileArray.length) {
    console.log(`value is ${whileArray[arr]}`);
    arr = arr + 1
} */

/* ============do while loop--------ye udhar jaise treat kiya jata hai. */
let score = 11
do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10);

/* ============for...in statement */
/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) {
    
} */

/* Section 12.7: Destructuring an array */
const desArray = [22,33,5,95,6,77,88]
const desT = [A,B,C,D,E,F,G] = desArray;
console.log(A === 22)
console.log(B === 33)
console.log(C === 5)
console.log(D === 94)
console.log(E === 77)
console.log(F === 77)
console.log(G === 88)

/* ==========Section 12.8: Removing duplicate elements */
const remArray = [1,2,3,1,5,9,2,'2','6','99','3','4','5']
const dubArray = remArray.filter(function(value,index,self){
    return self.indexOf(value) === index;
})
console.log(dubArray); /* ye jo bhi value double bar hai use hata deta hai. */

/* ============Section 12.12: Concatenating Arrays */
var longArray = [1, 2, 3, 4, 5, 6, 7, 8],
shortArray = [9, 10];

/* const conArray = longArray.push.apply(longArray, shortArray); */
const conArr = longArray.concat(shortArray);
const mixArray = longArray.push(...shortArray)

console.log(conArr);
console.log(mixArray);
/* console.log(...longArray, ...shortArray); */

/* ==============Section 12.13: Merge two array as key value pair */
const keyMerg = ['Name', 'Rank', 'Number','Status', 'Class']
const valueMerg = ['Rishav Kumar', 'B', 725, 'Passed', '12th']
const resultMerg = valueMerg.reduce(function (resultMerg, field, index){
    resultMerg[keyMerg[index]] = field;
    return resultMerg;
},{})
console.log(resultMerg);

/* ====================Section 12.14: Array spread / rest-------------spread */
const spreadArr = [..."7210673579"];
const restArr = spreadArr.map(x => x);
console.log(restArr);

const spreadAr = [[..."7210673579"]];
const restAr = spreadArr.map(x => parseInt(x));
console.log(restAr);

/* ===========================...rest */ 
[a,b , d,...rest] = [22,33,69,8,5,6,5,45,84,5,5236,5552,2,1,4,2]
console.log(...rest)

/* ===============Section 12.15: Filtering values */
const filterArr = [0, undefined,null, 6, {}, '', true];
const resultFilter = filterArr.filter(Boolean);
console.log(resultFilter);

/* ---------------------------ye question abhi ho nhi paya hai.------------------------- */
/* var str = 'Since Boolean is a native javascript function/constructor that take';
var strArray = str.split(" ");
var wordsStartsWithA = strArray.filter(startsWithLetterA);
function startsWithLetterA(str) {
    if(str && str[0].toLowerCase() == 'j') {
    return true
    }
    return false;
   }
    
console.log(startsWithLetterA); */

/* ===============Section 12.16: Searching an Array--------find and findIndex method */
const people = [
    {name: "Rishav kumar"},
    {status: "Unmarried"}
];

const resFind = people.find(person => person.name === 'Rishav kumar');
console.log(resFind);

/* function se find krna */
const funFind =  people.find(function(person){
    return person.name === "Rishav kumar";
});
console.log(funFind);

/* for loop se find krna */
for (let i = 0; i < people.length; i++) {
    if (people[i].name === funFind) {
        break;
    }   
}
console.log(people)

/* ==================Section 12.17: Convert a String to an Array */
const splitStr = 'rishv kumar is not good person'.split("")
console.log(splitStr);

const splitSpread = [..."Radhe Shayam"]        /* spread se bhi string , array me convert ho jata hai. */
console.log(splitSpread)

/* Section 12.18: Removing items from an array======================== */
const revShift = [55,66,22,99,258,369,147,12,3]
const resShift = revShift.shift()
console.log(resShift)

const revPop = [55,66,22,99,258,369,147,12,3]
const resPop = revPop.pop()
console.log(revPop)

const del = [55,66,22,99,258,369,147,12,3]
const resDel = revPop.length
console.log(resDel)
delete del[5]
console.log(del)
console.log(del.length)
del.length = 0
console.log(del);   

/* ========================12.22: Joining array elements in a string */
console.log(["i", " ", 'my', " ", "Bharat"].join(" ♥"));

/* ========================Section 12.24: The entries() method-----------key:value ko array ki form me convert krta hai. */
const jointMet1 = {
    name: "Rishav Kumar",
    salary: 250000,
    company: "jio"
}
console.log("jointMet 1", Object.entries(jointMet1))

const jointMet2 = ['ram','shayam', 'ravan', 'sita', 'mai']
console.log("jointMet 2:", Object.entries(jointMet2));


for (const [index,element] of jointMet2.entries()) {
    console.log(index,element)
}

/* ==========================Section 12.26: Flattening Arrays  */
const flattenArr = [2,3,6,[9,8,7,3],5,[66,55,44],22]
console.log(String(flattenArr).split(',').map(Number));

/* Section 12.28: Object keys and values to array */
const objectArray = {
    name: 'Karan',
    class: '1st',
    roll: 55
}
var obArr = []
for (const KaranD in objectArray) {
     obArr.push([KaranD, objectArray[KaranD]]);   
}
console.log(obArr)

/* ======================================code snippets==================================== */
/* console.log(object);
import moduleName from 'module';
const name = (params) => {
    
}
console.info(object);

console.table(object); */
