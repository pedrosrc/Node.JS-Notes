const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('../Paste/first.txt', 'utf-8')

writeFileSync('../Paste/result.txt', `This is a result: ${first}, bye!`)


