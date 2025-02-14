const http = require('http');

const server =  http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); 

    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page of Node JS</title></head>');
        res.write('<body> <h1>Welcome to home Page</h1></body>');
        res.write('</html>');
        return res.end();

    }else if (req.url === "/users") {
        res.setHeader('Content-Type', 'text/html'); 
        res.write('<html>');
        res.write('<head><title>My First Page of Node JS</title></head>');
        res.write('<body><h1>Contacted client to server</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page of Node JS</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();

});

// server.listen(3000);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on addres http://localhost:${PORT}`);
});