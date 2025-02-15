const http= require('http');
const { request } = require('./handler');

const server = http.createServer(request); 


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
