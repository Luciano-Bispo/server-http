const http = require('http');

const port = 3000;

 http.createServer((req, res) => {

    if(req.url == '/'){
        res.end('server HTTP');
    }else{
        res.end('error');
    }
    
}).listen(port, () => {
  console.log(`Listen to http://localhost:${port}/`)
});