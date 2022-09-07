const {readFile, writeFile} = require('fs')

console.log(`start`);

readFile('./content/file.txt', 'utf-8', (err, result)=>{
    if(err) console.log(err);
    const first = result
    readFile('./content/subfolder/text.txt', 'utf8', (err, result)=>{
        if(err) console.log(err);
        writeFile('./content/resultAsync', `writing the text 'this is the second result with ${first}' asynchronous file`, (err, result)=>{
            if(err) console.log(err);
            console.log(`done with this task`);
        })
    })
})
console.log(`starting the next one`);