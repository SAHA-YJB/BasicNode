const http = require('http');

const port = 4000;
//텍스트 보내주기
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });

//제이슨 보내주기
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      message: 'Hello World',
      code: 200,
      b: 1,
      c: 2,
      d: 3,
    })
  );
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
