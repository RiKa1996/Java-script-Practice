//Pub/Sub
//Observer design pattern
class YoutubeChannel {
    subscriptionArr = [];

    subscribe(subscriber){
        this.subscriptionArr.push(subscriber);
    }
    unsubcribe(subscriber){
        this.subscriptionArr = this.subscriptionArr.filter(
            (sub) => sub.id !== subscriber.id
        )
    }
    publish(msg){
        console.log(this.subscriptionArr);
        for (let subscriber of this.subscriptionArr)
                subscriber.notify(msg);
        
        //console.log('msg', msg)
    }
}       //----------------------------Yha tak ye humne youtubechannel banaya hai

class subscriber {
    constructor (id, name){
        this.id = id;
        this.name = name;
    }
    notify(msg){
        console.log(`Hey ${this.name}: ${msg}`)
    }
}       //----------------------------yha tak ye humare subscriber hai

const sub1 = new subscriber(1, "Rehan")
const sub2 = new subscriber(2, "Rishav")
const sub3 = new subscriber(3, "Rohit")
//const subArray = [sub1, sub2, sub3]
//subArray.forEach(sub => sub.notify("hi how are you"))

const channel = new YoutubeChannel();
channel.subscribe(sub1)
channel.subscribe(sub2)
channel.subscribe(sub3)

channel.publish("Video has been come... Plz... whatched it...")

//channel.unsubcribe(sub2);

channel.publish('how was the video?... Plz... comment...')
//-------------------ye pura humre subscribe aur unscriber hai jo ki krte hai.
