const { readFile, writeFile } = require('fs')

console.log('Start Task')

readFile('../Paste/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result

    writeFile('../Paste/result-async.txt', `This is a result: ${first}, bye!`, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('Task Runnig')
    })
})
console.log('Finish Task')

