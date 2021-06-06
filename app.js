const EventEmitter = require('events');
// const emitter = new EventEmitter();


const Logger = require("./logger");

const logger = new Logger();

//Register a listener - always before raising the event
logger.on("messageLogged", arg=>{
    console.log("Listener called", arg);
})

logger.log("Message");
