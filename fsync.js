const { log } = require('console');
const {readFileSync, writeFileSync, WriteStream} = require('fs')
console.log('starting')
const first = readFileSync('./content/file.txt', 'utf-8')
console.log(first);

writeFileSync(`./content/resultSync/`, `hello this is: ${first}`, {flag: 'a'})
console.log(`done with this task`);
log('starting the next one')