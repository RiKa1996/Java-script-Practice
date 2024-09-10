onmessage = function(e){
    let result = 0;
    for(let i=0; i<100000000000; i++){
        result += i;
        
    }
    postMessage(result);
}