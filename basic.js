const http = require('http');

const port = 4000;
const targetObj = {
  message: 'Hello World',
  code: 200,
  b: 1,
  c: 2,
  d: 3,
};
//텍스트 보내주기
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });

//제이슨 보내주기
//라우팅 처리(분기처리)
//포스트메소드 추가해보기
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/') {
    req.on('data', (data) => {
      console.log('data', data);
      const stringfiedData = data.toString();
      console.log('', stringfiedData);
      Object.assign(targetObj, JSON.parse(stringfiedData));
    });
  } else {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(targetObj));
    } else if (req.url === '/about') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<h1>About Hello</h1>');
      res.write('</body>');
      res.write('</html>');
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
