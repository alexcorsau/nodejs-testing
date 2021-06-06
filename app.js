const fs= require("fs");

//sync and async methods: real application always use async method

const files = fs.readdir("./",function(err,files){
if(err) console.log("Error:", err);
else console.log("Result: ",files);
});
