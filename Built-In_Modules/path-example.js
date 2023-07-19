const path = require('path')

console.log(path.sep)

// Joins the specified paths into one
const filePath = path.join('Built-In_Modules', 'os-example.js')
console.log(filePath)

// Returns the last part of a path
const base = path.basename(filePath)
console.log(base)

// Resolves the specified paths into an absolute path
const absolute = path.resolve(__dirname, 'Built-In_Module', 'os-example.js');
console.log(absolute)


