const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Myntra page Demo</title></head>');
        res.write('<body> <h1>Welcome to Myntra Navbar</h1>');
        res.write('<nav>');
        res.write('<ul>');
        res.write('<li><a href="/">Home</a></li>');
        res.write('<li><a href="/products">Products</a></li>');
        res.write('<li><a href="/cart">Cart</a></li>');
        res.write('<li><a href="/orders">Orders</a></li>');
        res.write('</ul>');
        res.write('</nav>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if (req.url === "/products") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Myntra page Demo</title></head>');
        res.write('<body> <h1>Welcome to Myntra Products</h1>');
        res.write('<nav>');
        res.write('<ul>');
        res.write('<li><a href="/">Home</a></li>');
        res.write('<li><a href="/products">Products</a></li>');
        res.write('<li><a href="/cart">Cart</a></li>');
        res.write('<li><a href="/orders">Orders</a></li>');
        res.write('</ul>');
        res.write('</nav>');
        res.write('</body>');
        res.write('</html>');
        return res.end();}
        else if (req.url === "/cart") {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>My Myntra page Demo</title></head>');
            res.write('<body> <h1>Welcome to Myntra Cart</h1>');
            res.write('<nav>');
            res.write('<ul>');
            res.write('<li><a href="/">Home</a></li>');
            res.write('<li><a href="/products">Products</a></li>');
            res.write('<li><a href="/cart">Cart</a></li>');
            res.write('<li><a href="/orders">Orders</a></li>');
            res.write('</ul>');
            res.write('</nav>');
            res.write('</body>');
            res.write('</html>');
            return res.end();}else if (req.url === "/orders") {
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<head><title>My Myntra page Demo</title></head>');
                res.write('<body> <h1>Welcome to Myntra Orders</h1>');
                res.write('<nav>');
                res.write('<ul>');
                res.write('<li><a href="/">Home</a></li>');
                res.write('<li><a href="/products">Products</a></li>');
                res.write('<li><a href="/cart">Cart</a></li>');
                res.write('<li><a href="/orders">Orders</a></li>');
                res.write('</ul>');
                res.write('</nav>');
                res.write('</body>');
                res.write('</html>');
                return res.end();}else if (req.url === "/orders") {
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<html>');
                    res.write('<head><title>My Myntra page Demo</title></head>');
                    res.write('<body> <h1>Welcome to Myntra Orders</h1>');
                    res.write('<nav>');
                    res.write('<ul>');
                    res.write('<li><a href="/">Home</a></li>');
                    res.write('<li><a href="/products">Products</a></li>');
                    res.write('<li><a href="/cart">Cart</a></li>');
                    res.write('<li><a href="/orders">Orders</a></li>');
                    res.write('</ul>');
                    res.write('</nav>');
                    res.write('</body>');
                    res.write('</html>');
                    return res.end();}
        res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My Myntra page Demo</title></head>');
res.write('<body> <h1>Welcome to Myntra Orders</h1>');
res.write('</body>');
res.write('</html>');
res.end();
});
 

const PORT = 3005;
server.listen(PORT, () => {
    console.log(`Server is running on addres http://localhost:${PORT}`);
});