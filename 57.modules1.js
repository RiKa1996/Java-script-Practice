//COMMON JS MODULES
//==================

const hello = function(){
    console.log("hello rishu kumar")
}

module.exports = hello   //ydi hum is 57.modules.js file ko ki dusre file me use krna chahte hai to -------just like 10 log ek hi project pe work kr rhe hai.


const ahello = function(name){
    console.log("hello " + name)
}


module.exports = {hello, ahello}    //same as below line(niche wali line)
//module.exports = {hello: hello, ahello: ahello};