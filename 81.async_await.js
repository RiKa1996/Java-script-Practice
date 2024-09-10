async function rishu(){
    let delhiWeather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("38 deg")
        }, 2000)
    })

    let haryanaWeather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("35 deg")
        }, 7000)
    })

    // delhiWeather.then(alert);
    // haryanaWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait...")
    let delhiw = await delhiWeather
    console.log("Fetched Delhi Weather is " + delhiw)

    console.log("Fetching Haryana Weather Please wait...")
    let haryanaw = await haryanaWeather

    console.log("Fetched Haryana Weather is " + haryanaw)
    return[delhiw, haryanaw]
}

const karan = async () => {
    console.log("hey buddy, i am rishu and i am not waiting, i am going.")
}

console.log("Welcome to weather control room");
    let a = rishu()
    let b = karan()
    a.then((value) => {
        console.log(value)
    })








// AISA BHI KR SKTE HAI
// const main1 = async ()=>{
//     console.log("Welcome to weather control room");
//     let a = await rishu()
//     let b = await karan()
//     // a.then((value) => {
//     //     console.log(value)
//     // })
// }
// main1()
//console.log(a)