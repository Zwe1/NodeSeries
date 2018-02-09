const calc = require('./calc');
const lodash = require('lodash');

const numbersToAdd = [
    1,
    2,
    3,
    4,
    5
];

const result = calc.sum(numbersToAdd);
const assign = lodash.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
console.log(`the result is: ${result}`);
console.log('lodash',assign);
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});