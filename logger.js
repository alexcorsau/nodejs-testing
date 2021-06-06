const EventEmitter = require('events');
// const emitter = new EventEmitter();


class Logger extends EventEmitter{
    log(message) {
        console.log(message);
    
        //Raise an event
        this.emit("messageLogged",{id:1,url:"http://"});
        //using the object argument we can pass data to the event listener "emitter.on()"
    }
}



module.exports = Logger;
