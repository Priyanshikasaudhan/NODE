const {sumRequestHandler} = require('./sum');

const request = (req, res) => {
    console.log(req.url, req.method);
    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></heaad>');
        res.write('<body><h1>Welcome to Calculator</h1>'); 
        res.write('<a href="/calculator"><h1>Calculator</h1></a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(req.url.toLowerCase() === "/calculator"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></heaad>');
        res.write('<body><h1>Calculator</h1>'); 
        res.write('<form action="/calculate" method="POST">');
        res.write('<input type="text" name="num1" palceholder="Enter first number"> <br>');
        res.write('<input type="text" name="num2" palceholder="Enter second number"> <br>');
        res.write('<button type="submit">Calculate</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();}
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></heaad>');
    res.write('<body><h1>404 pages does not Exist</h1>'); 
    res.write('<a href="/calculator"><h1>Calculator</h1></a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
};


exports.request = request;