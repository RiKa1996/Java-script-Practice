let user = {
    _password : "Secret"
}

const rishu = {
    // get(target, prop) {
    //     if(prop.startsWith("_"));
    //         throw new Error("Access Denied")             //_password ko access denied krne ke liye
    //     return target[prop]
    //     //return "Access Denied"
    // },

    //THIS IS ONKEYS-jo decide krta hai kya kya hume rakhna hai.
    ownKeys(target){
        return Object.keys(target).filter
        (key => !key.startsWith("_"))
    },

        set(target, prop, val){
            if(prop === "salary")
                return false            //target ko set krne ke liye hai taki usse prop ki value nikal sake
            target[prop] = val
            return true
        }
        //return false
        // console.log(target);
        // console.log(prop);
    
}


user = new Proxy(user, rishu)

user.name = "bhole";
//user.salary = "1000000000000000000";
user.age = 25
console.log(Object.keys(user));
console.log(user._password);
console.log(user.name);