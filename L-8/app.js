const http = require('http'); 
// const testingSyntax = require('./syntax');
// const runTime = require('./runtime');
// const logic = require('./logical');
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     // testingSyntax();
//     // runTime();
//     logic();
// });

const requestHandler = require('./user');
const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});