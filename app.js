const http = require('http');

function add(a, b) {
  return a + b;
}

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: greet(), sum: add(2, 3) }));
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = { add, greet, server };
