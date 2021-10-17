const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.setHeader('Link', '</src/styles.css>;rel=preload');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html \n');
    res.write('<html> \n')
    res.write('<head> \n')
    res.write('<link rel="stylesheet" type="text/css" href="/src/styles.css"> \n')
    res.write('</head> \n')
    res.write('<body> \n')
    res.write('<h1>Test</h1> \n')
    res.write('</body> \n')
    res.write('</html>\n')
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server listen port ${PORT}`);
});