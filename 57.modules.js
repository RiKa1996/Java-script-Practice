
//MODULES
//1. COMMON JS MODULES - -jisme do alag alag file ko connect kiya jata hai.
//=====================================================================
//const {hello, ahello} = require("./57.modules1")              //url of first module page----ise humne 57.modules1.js se call kiya hai.
hello()

// hello.ahello("rehana")          //ydi humne hello.ahello lagaya hai to upper me const(hello likhne ki jarurat hai.)
// hello.ahello("rohan")
// hello.ahello("aman")
// hello.ahello("riyaz")
// ahello("rehana")                    //ydi humne ahello lagaya hai to upper me const(hello,ahello) likhna hai.)
// ahello("rohan")
// ahello("aman")
// ahello("riyaz")

//2. ES6 MODULES
//=====================================================================
import rishu, {hello, ahello} from "./57.modules2.js";
hello()
ahello("rana")
ahello("mohit")
ahello("suhana")
ahello("arru")
ahello("anu")
rishu()

