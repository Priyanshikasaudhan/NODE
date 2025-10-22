//Core Module
// const http = require('http'); 

//External Module
const express = require('express');
 
//Local Module
// const requestHandler = require('./user');

const app = express();

//Middleware
app.use("/",(req, res, next) => {

    console.log("Come in First middleware",req.url, req.method);
    next();
});

app.use("/users",(req, res, next) => {
    console.log("Come in Second middleware",req.url, req.method);
res.send("<p>Welcome To Node js serires</p>")
});

// const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});