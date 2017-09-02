exec = require('child_process').exec;
os = require('os');
const http = require('http');
const hostname = os.networkInterfaces()['apcli0'][0].address;
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/?LED=ON') exec('fast-gpio set 18 1');
  if (req.url === '/?LED=OFF') exec('fast-gpio set 18 0');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h2>A simple LED control server <br>with Onion Omega2+</h2>');
  res.write('<p>LED state: <a href="?LED=ON"> <button>ON</button></a>');
  res.write('  <a href="?LED=OFF"><button>OFF</button></a></p>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});