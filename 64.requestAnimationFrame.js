let request;
let i = 0;

const start =document.getElementById("start");
const stop = document.getElementById("stop")
const frame = document.getElementById("frame")
const getDiv = document.getElementsByClassName("dot")


const performAnimation = () => {                                //Section 64.1: Use requestAnimationFrame to fade in element
    request = requestAnimationFrame(performAnimation)
    getDiv[0].insertAdjacentHTML("afterend", "<div class='dot'></div>")  //isse hum dot print krwayege
    console.log(i++)
}

start.addEventListener("click", function(){
    console.log(i)
    // request = setInterval(performAnimation, 1000/60)         //Section 64.2: Keeping Compatibility
    request = requestAnimationFrame(performAnimation)
})

stop.addEventListener("click", function(){
    // console.log(request)
    cancelAnimationFrame(request)               //Section 64.3: Cancelling an Animation

})

