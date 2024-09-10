import express from "express";
import {WebSocketServer} from "ws";

const app = express();           //ye humne app ko create kiya hai
const port = 8080;              //ye humne port ko setup kiya hai

//ye server ka insert listen krta hai.-------iski hume isliye jarurat , isse hum apna http server aur websocket server ko same port pe run krna chahte hai
const server = app.listen(port, () =>{
    console.log("server is listening...");
})

//finally make websoket server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {          //connection is events 
    ws.on("message", (data) => {
        console.log("data from client :", data);
        ws.send("Thanks Buddy!");
    });
});