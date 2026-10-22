import http from 'http';
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end('<h1>Home page</h1>');
                } else if (req.url === '/about') {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end('<h1>About page</h1>');
                } else {
                    
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end('<h1>Not Found</h1>');
                }
        }
        else {
            throw new Error('Method not allowed');
        }
    } catch(error) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Server Error');
    }

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // console.log(`Request URL: ${req.url}`);
    // console.log(`Request Method: ${req.method}`);

    
    
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
