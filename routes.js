const fs = require('fs');

const routesHandler = (req, res) => {
    // console.log(req.url, req.headers, req.method, req.body);
    //process.exit()

    const url = req.url,
        method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title><head>');
        res.write('<body><form action="message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // test debugging after installing nodemon
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message);
            //res.statusCode = 302;
            //res.setHeader('Location', '/');
            //return res.end();

            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
        //fs.writeFileSync('message.txt', 'DUMMY');
        //res.statusCode = 302;
        //res.setHeader('Location', '/');
        //return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title><head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>');
    res.write('</html>');
    return res.end();
};

module.exports = routesHandler;

// exports.routesHandler = routesHandler;