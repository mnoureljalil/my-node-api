const path = require('path')
//  join method
const filePath = path.join("/content", "subfolder", "text.txt")
console.log(filePath);

// resolve method, for returning absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt")
console.log(`path is ${__dirname} and absolute path is ${absolute}`);