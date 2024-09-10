let btn1 = document.getElementById('btn1')

btn1.addEventListener('click', function(){
    const workerObj = new Worker("63.worker.js");
    workerObj.postMessage("Start worker");
    workerObj.onmessage = function(e){                          //worker.js se ye postmessage(result) receved krne ke liye hai
        document.querySelector('#output').innerHTML = e.data;
    }
    
})

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ()=>{
    document.querySelector('#hi').innerHTML += " Hi !! ";
})