//ES6- MODULES
//===============
export const hello = function(){
    console.log("hello rishu kumar")
}

//module.exports = hello   //ydi hum is 57.modules.js file ko ki dusre file me use krna chahte hai to -------just like 10 log ek hi project pe work kr rhe hai.


export const ahello = function(name){
    console.log("hello " + name)
}

//Export Default
const rishu = function(){
    console.log("hello" +" " + "rishu")
}

export default rishu;                 //Section 57.2: Default exports














//module.exports = {hello, ahello}    //same as below line(niche wali line)
//module.exports = {hello: hello, ahello: ahello};