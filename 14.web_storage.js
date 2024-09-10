// LOCALSTORAGE
let key =prompt("Enter key you want to set")                //
let value = prompt("Enter value you wnat to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key == "blue"){          
    localStorage.removeItem(key)
}

if(key == 0){
    localStorage.clear(key)
}

//SESSION STORAGE
//nothing special same like local storage

//STORAGE EVENT
window.onstorage = (e) =>{
    alert("change")
    console.log(e)
}
