import http from 'http';
const PORT = 5000;


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
