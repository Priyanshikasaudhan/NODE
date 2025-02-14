const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
console.log(req.url, req.method, req.headers);
if(req.url === "/"){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page of Node JS</title></head>');
res.write('<body> <h1>Enter your Details</h1>');
res.write('<form action="/submit-details" method="POST">');
res.write('<input type="text" name="username" placeholder="Enter your username">');
res.write('<br>');
res.write('<label for="male">Male: </label>');
res.write('<input type="radio" name="gender" id="male" value="male"/>')

res.write('<label for="female">Female: </label>');
res.write('<input type="radio" id="female" name="gender" value="female"/>');
res.write('<br>');
res.write('<button type="submit" value="submit">Submit</button>');
res.write('</form');
res.write('</body>');
res.write('</html>');
return res.end();
} else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
    fs .writeFileSync('user.txt', 'Priyanshi Kasaudhan');
    res.statusCode = 302;
    res.setHeader('Location', '/');
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page of Node JS</title></head>');
res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
res.write('</html>');
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on addres http://localhost:${PORT}`);
});