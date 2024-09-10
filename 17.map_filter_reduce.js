//===========================MAP Method
//console.log(array);
let array = [22,66,58,32,65,78,98,99];
let a = array.map ((value, index, array)=> {
    //console.log(value, index, array)
    //return value + 5
    //return value + index
})

//console.log(a)

//========================FILTER METHOD
let array2 = [22,66,58,32,65,78,98,99];
let f = array2.filter((val)=>{
    return val>77
    //console.log(val)
})

//console.log(f)

//========================REDUCE METHOD
let array3 = [22,66,58,32,65,78,98,99,2];
let r = array3.reduce((red1, red2) =>{
    return red1 + red2;
})
console.log(r)                          // 22+66= 88
                                        //88+58= 146