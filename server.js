const express = require('express');

const postsRouter = require('./posts/postRouter.js')
const userRouter = require('./users/userRouter.js')

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


server.use('/api/posts', postsRouter);
server.use('/api/users', userRouter);
//custom middleware
function logger (req, res, next) {
  const {method, originalUrl} = req;
  console.log(`${method} to ${originalUrl}`);
  next();
}

module.exports = server;
