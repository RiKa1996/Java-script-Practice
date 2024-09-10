let first = document.getElementById("first")

//get attribute
let a = first.getAttribute("class")
//console.log(a)

//has attribute
//kya style attribute a me set kiya gaya hai
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))

//set attribute
//yhi hum koi attribute set krna chahte hai.
//console.log(first.setAttribute("hidden", "true"));
//console.log(first.setAttribute("class", "true Rishav"));

//remove attribute-------pure class ko remove kr deta hai
//first.removeAttribute("class", "Rishav")

//attribute
//console.log(first.attributes)

//DATA-* ATTRIBUTE
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
