const express = require('express');

const app = express();

app.use( (req, res,next) => {
console.log("First Dummy Middleware",req.url,req.method);
next();
});

app.use((req, res, next) => {
console.log("Second Dummy Middleware",req.url,req.metthod); 
next();
});

// app.use((req,res,next) => {
//     console.log("Third Dummy Middleware");
//     res.send("<h1>Welcome to Practice Zone </h1>")
// });

app.get("/",(req,res,next) => {
    console.log("Handler / for Get",req.url,req.method);
    res.send("<h1>Welcome to Practice Zone </h1>")
});

app.get("/contact-us",(req,res,next) => {
    console.log("Handle Contact-Us Page", req.url,req.method);
    res.send(`<h1>Please give your Details Here</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name"/> 
        <input type="email" name="email" placeholder="Enter your email"/> 
        <input type="Submit"/> 
        </form>`);
});

app.post("/contact-us", (req,res,next) => {
    console.log("Hendle  /contact-us for Post" , req.url,req.method);
    res.send(`<h1>We will contact yo shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});