/* console.log("My name is rishav");
let gameName = "gamewithrishv"
let countGame = 55448;
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.anchor("google.com"))
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.concat(countGame));
console.log(gameName.endsWith(6));
console.log(`Hello my name is ${gameName} and i have completed count game is ${countGame}.`); */
const newString = new String("mySchool");
console.log(newString[2]);
console.log(newString.__proto__)
console.log(newString.length);
console.log(newString.charAt([0]));
24217ec6b3f20b859.1909802804 




let intString = 222;
console.log(String(intString));
console.log(intString.toString());

console.log(({}).toString());

/* const myStory = 'The quick brown fox jumps over the lazy dog.'; */

const myStory = 'My name is Rishav Kumar, and i am mad person. whatever i do, everything is get wrong  in my life...';
console.log(myStory);
console.log(myStory.slice(5));
console.log(myStory.slice(15, 35));
console.log(myStory.slice(-2, -6));

const mytrim = "  . my name is khan .   ";
console.log(mytrim.trim());
console.log(mytrim.trimStart());
console.log(mytrim.trimEnd());
console.log(mytrim.trimLeft());
console.log(mytrim.trimRight());

const url = "https://debate withrishav.com/rishav&^&&&/rishavmaane.255245571"
console.log(url.replace(' ',''));
console.log(url.replace('',' '));
console.log(url.replace('r','k'));

console.log(url.includes("rishav"));
console.log(url.includes("karan"));

const stre = 'The quick brown flksdjf jumps over the lazy dog.';
console.log(stre);
const words = stre.split(' ');
console.log(words[5]);

const chars = stre.split('');
console.log(chars[5])

const strCopy = stre.split();
console.log(strCopy);

const paragraphh = 'AAP national general secretary meet Dr sandeep pathak said meet the party workers would fo to each house and meet'
console.log(paragraphh)
console.log(paragraphh.replaceAll('meet','monkey'))

/* ===========.localCompare=========== */
const a = 'rishav'; // With accents, lowercase
const b = '55'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0

/* =============match================= */
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[a-z,A-Z]/g;
const found = paragraph.match(regex);

console.log(found);

/* ==========charCodeAt========= */
const code = "▐ù♥☺^↔≤";
console.log(code.charCodeAt([2]));
console.log(code.charCodeAt([3]));
console.log(code.charCodeAt([4]));
console.log(code.charCodeAt([5]));

/* ==========repeat============= */
const mood = 'happy!';
console.log(`Today i am feeling ${mood.repeat( 3 )} ♥`);

/* ===========split============= */
const counting = "one, two, three, 55,44, four, five, six, seven, eight, nine, ten";
console.log(counting.split());
console.log(counting.split("/, /"))
console.log(counting.split(", ",5))
console.log(counting.split(''));
console.log(counting.split());
/* regex */
console.log(counting.split(/\S/));
console.log(counting.split(/\d/));
console.log(counting.split([0-9]));
console.log(counting.split(/\d/));

/* ============toString========= */
const stringNo = 111;
console.log(typeof(stringNo));
console.log(typeof(stringNo.toString()));
console.log(stringNo.toString(2));                  /* this is binary convertion */


/* ============valueOf========== */
const stringObj = 1111;
console.log(stringObj.valueOf(2));                 /* valueof me binary convertion nhi krta hai. */
console.log(typeof(stringObj.valueOf()));

const stringNew = new String('Rishav');
console.log(stringNew.valueOf(2));                 /* valueof me binary convertion nhi krta hai. */
console.log(typeof(stringNew.valueOf()));

/* ============================Chapter-8===Date=========================================== */
let myTimeStamp = new Date();
console.log(typeof(myTimeStamp));
console.log(myTimeStamp.toString());
console.log(myTimeStamp.toISOString());
console.log("my name is rishav");
console.log(myTimeStamp.toDateString());
console.log(myTimeStamp.toLocaleString());
console.log(myTimeStamp.toLocaleDateString());
console.log(myTimeStamp.toLocaleTimeString());
console.log(myTimeStamp.toTimeString());
console.log(myTimeStamp.toUTCString());
/* console.log(myTimeStamp.setFullYear())
 */
/* let myCreatedDate = new Date("07-12-2024"); */
let myCreatedDate = new Date(2024, 6, 12,6,22);
console.log(myCreatedDate.toString())

const myNowTime = Date.now();
/* console.log(myNowTime);*/
/* console.log(myCreatedDate.getTime()); */
console.log(Date.now()/1000)                /* ye milisecond me aata hai. */
console.log(Math.floor(Date.now()/1000));    /* milisecond ko kam krne ke liye */

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());
console.log(newDate.getUTCFullYear());
console.log(newDate.getUTCHours());
console.log(newDate.getUTCMilliseconds());
console.log(newDate.getUTCMinutes());
console.log(newDate.getUTCMonth());
console.log(newDate.getUTCSeconds());


console.log(newDate.toLocaleString())
console.log("my name is karna kundra");
console.log(
newDate.toLocaleString('default',{
    day : 'numeric',
    month : 'short',
    year : 'numeric'
    
}))

console.log("my name is karna kundra");
const toSetDate = new Date()
console.log(toSetDate.setDate(7-12-2024));
console.log(toSetDate.setFullYear(12));
console.log(toSetDate.setHours(2));
console.log(toSetDate.setMilliseconds(666));
console.log(toSetDate.setMinutes(55));
console.log(toSetDate.setMonth(6));
console.log(toSetDate.setSeconds(23));
console.log(toSetDate.setTime());
console.log(toSetDate.setUTCDate());
console.log(toSetDate.setUTCFullYear());
console.log(toSetDate.setUTCHours());
console.log(toSetDate.setUTCMilliseconds());
console.log(toSetDate.setUTCMinutes());
console.log(toSetDate.setUTCMonth());
console.log(toSetDate.setUTCSeconds());
console.log("my name is karna kundra");

toSetDate.setDate(toSetDate.getDate() + 1);
console.log(toSetDate);

/* convert to JSON  */
const fileLoad = new Date()
console.log(fileLoad.toJSON());


/* chapter 9, Data Comparion-----comparing data value */
const date1 = new Date();
const date2 = new Date();
/* const date2 = date1; */
console.log(date1.valueOf() === date2.valueOf());
console.log(date1 === date2);

const date3 = new Date(Date.UTC(95));
console.log(date3.valueOf());

const date4 = new Date('02 Feb 1996 03:04:05 GMT');
console.log(date4.valueOf());


