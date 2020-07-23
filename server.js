const http = require('http');

const server = http.createServer(function (req, res) {
    if(req.method === 'GET' && req.url === '/') {
        res.write( 'Hello World, welcome to WeJapa Internships')
        res.end();
    } 
})


const port = process.env.PORT || 4004;
server.listen(port, ()=> {
    console.log(`Speak, I'm listening on port ${port}`)
});