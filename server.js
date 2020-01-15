const express = require('express');

const postsRouter = require('./posts/postRouter.js')
const userRouter = require('./users/userRouter.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
server.use('/api/posts', postsRouter);
server.use('/api/users', userRouter);

module.exports = server;
