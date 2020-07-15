const express = require('express');
const server = express();
const router = require('./router');

server.use(express.json());
server.use('/api/cars', router);

server.get('/', (req, res) => {
  res.send('Welcome to db1 project');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
