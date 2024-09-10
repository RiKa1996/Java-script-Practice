console.log("Ajax is most important");

let fetchBtnn = document.getElementById("fetchBtn");
fetchBtnn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('i have clicked the fetchBtn');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    //open the object
    //xhr.open('GET','anjanfile2.txt', true);     //ydi file shi nhi exist ki gai ho to if else chalega
    //xhr.open('GET','anjanfile.txt', true);
    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true);   //true krne per asyncronous ho jata hai. false krne per i am done phle aa jata hai.
    
    ////this is POST request - dummy smaple rest api---post request me hume data ko bhi bhejna padta hai.
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/create', true);  
    xhr.getResponseHeader("Content-type", 'application/json'); 
    
    //what to on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    //XMLHttpRequest.readyState---------UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE
    // xhr.onreadystatechange = function(){
    //     console.log("Ready state is" , xhr.readyState);
    // }

    //what to do when response is ready

    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
        
    }
    // sent the request
    // xhr.send();
    // console.log("i am done")

    //Post request ko send krna
    params = `{"name":"testcvfdsv5542445","salary":"123","age":"23"}`;
    console.log(params);
    console.log("we are done!");
    
}
//============================================================================================================================
//data ko fetch krna

//https://dummy.restapiexample.com/api/v1/employees
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler)

function popHandler(){
    console.log('i have clicked the pop handler');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    //open the object
    //xhr.open('GET','anjanfile2.txt', true);     //ydi file shi nhi exist ki gai ho to if else chalega
    //xhr.open('GET','anjanfile.txt', true);
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees', true);   //true krne per asyncronous ho jata hai. false krne per i am done phle aa jata hai.
    

    //what to do when response is ready
    xhr.onload = function(){
        if (this.status === 200){
            
            let obj = JSON.parse(this.responseText)
            console.log(obj);

            //data me se kuch data chaiye
            let list = document.getElementById('list');
            str = "";  // str means behind string hai 
            for (key in obj)
            {
                str += `<li> ${obj[key].data} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
        
    }
    // sent the request
    xhr.send();
    console.log("we are done! fetching employee");
}
