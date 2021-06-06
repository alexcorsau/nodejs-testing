const os=require("os");

console.log(`Total memory: ${os.totalmem()/1048576} Gb`);
console.log(`Free memory: ${os.freemem()/1048576} Gb`);

console.log(os.userInfo());