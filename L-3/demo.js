const http = require('http');

const server =  http.createServer((req, res) => {
    console.log(req);
}); 

// server.listen(3001);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on addres http://localhost:${PORT}`);
});