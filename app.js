const logger = require("./logger");

//when we require a module we need to use its methods like this:
//logger.log("imported a module and called the module's method");


// console.log(logger);


//when we require a function we can use it directly
logger("message");