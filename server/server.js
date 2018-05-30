const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  if (true) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
});
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});