const { readFileSync, writeFileSync } = require('fs')

console.log('Start Task')

const first = readFileSync('../Paste/first.txt', 'utf-8', (err) => {
    if (err) {
        console.log(err)
        return;
    }
})
writeFileSync('../Paste/result-sync.txt', `This is a result: ${first}, bye!`, (err) => {
    if (err) {
        console.log(err)
        return;
    }
})
console.log('Task Runnig')
console.log('Finish Task')
