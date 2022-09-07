const http = require('http')

const server = http.createServer((req, res)=>{
    req.url
    res.end("aight we got your fucking response motherfucker")
})

server.listen((err)=>{
    if(err) console.log(err)
    console.log(`listening at port 4140 `);
})