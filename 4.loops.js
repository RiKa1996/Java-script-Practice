/* ===========================Section 18.1: Standard "for" loops */
/* Standard usage */
for (let i = 5; i < 50; i++) {
    //console.log(i);
}

/* Multiple declarations */
var array = ['ram', 'shayam', 'rishav', 'sneha'];
for (let i = 0; i < array.length; i++){
    //console.log(array[i]);
}

/* Changing the increment */
for (let i = 19; i < 209; i += 19) {
    //console.log(i)
    
}

/* Decremented loop */
for (let i = 100; i > 20 ; i--) {
    //console.log(i);
}

var nameN = ['raju', 'gyani', 'som', 'rehan'];
for (let i = 6; i > nameN.length; i--) {
    //console.log(nameN[i]);
}

/* ============================Section 18.2: "for ... of" loop */
/* Strings */
const godName = ['Mahadev', 'Matalaxmi', 'Ganeshji', 'Krishnaji', 'Devimaa'];
for (const god of godName) {
    //console.log(god);
}

/* Objects */
const routeen = {
    morning: 'breakfast',
    noon: 'nothing',
    afternoon: 'launch',
    evening: 'diat',
    night: 'dinner'
}
for (const key of Object.keys(routeen)) {
    //console.log(key)
    //console.log(key + " : " + routeen[key]);
}

/* ========================Section 18.3: "for ... in" loop */
/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} */
const animalName = ['bear', 'lion', 'tiger', 'monkey', 'befflow', 'dog', 'cat', 'ziraap'];
for (const ANIMAL in animalName) {
    if (Object.hasOwnProperty.call(animalName, ANIMAL)) {
        //console.log(animalName[ANIMAL]);
        
    }
}

/* ========================Section 18.4: "while" Loops */
/* Standard While Loop */
var i = 0;
while (i <= 20) {
    //console.log(i);
    i++;
}

/* Decremented loop */
var j = 30;
while (j > 0) {
    //console.log(j);
    j--;
}

/* Do...while loop-------------isme phle console print kiya jata hai. aur bad me condition check hota  hai. */
//var i = 99;             /* kyoki ye i<100 se chota hai to ye hamesha ke liye loop me chala jayega */
var i = 105;
do {
    //console.log(i);
    
} while (i < 100);

/* ============================Section 18.5: "continue" a loop */
/* ============================Section 18.6: Break specific nested loops */
outerloop:
for (var i = 1;i<3;i++){
    innerloop:
    for (var j = 1;j <3; j++){
        console.log(i);
        console.log(j);
        if (j == 3){
            break outerloop; 
        }
    }
}
