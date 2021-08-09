events=require("events");
var eventEmitter=new events.EventEmitter();

function startup(){
    eventEmitter.emit("Home Page");
    eventEmitter.emit("Registration Page")
}

function loadHomePage(){
    console.log("Loading Home Page");
}
function loadRegPage(){
    console.log("Loading Registration Page");
}
eventEmitter.on("Home Page",loadHomePage);
eventEmitter.on("Registration Page",loadRegPage);

startup();
