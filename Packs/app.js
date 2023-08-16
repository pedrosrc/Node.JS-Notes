const {readFile, writeFile} = require('fs').promises
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try{
        const first = await readFile('../Paste/first.txt', 'utf-8');
        const second = await readFile('../Paste/second.txt', 'utf-8');
        await writeFile(
            '../Paste/result-text.txt',
            `This is awesome: ${first} and ${second}`
        )
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
}

start()