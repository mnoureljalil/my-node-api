const os = require('os')

// user info
const user = os.userInfo()
console.log(user);

// return system uptime in seconds
console.log(`The system uptime in seconds is ${os.uptime()} in seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);