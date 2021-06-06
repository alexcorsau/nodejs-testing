
let url="http://mylogger.io/log";

console.log(__filename);

console.log(__dirname);

function log(message) {
    console.log(message);
}

// module.exports.log = log;
// in this way we export a module with a single function "log"

module.exports = log;
// in this way we export directly the function

// module.exports.endPoint = url;