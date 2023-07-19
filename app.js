const os = require('os')
const user = os.userInfo()

console.log(user)

//Method Return the Systems uptime
console.log(`The system user is: ${os.uptime()} seconds`)

// Method Return The System Info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)