const http = require('http');

const server =  http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

// server.listen(3000);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on addres http://localhost:${PORT}`);
});