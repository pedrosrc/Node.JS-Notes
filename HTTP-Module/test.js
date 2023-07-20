const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home Page')
        return;
    }
    if(req.url === '/about'){
        res.end('About Page')
        return;
    }
    res.end(`
        <h1>Opps!</h1>
        <p>This Page Not Foud</p>
        <a href='/'> Back to Home</a>
    `)
})

server.listen(5000);