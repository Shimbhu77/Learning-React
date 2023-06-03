const express = require('express');

const server = express();
const port = 8888;

const userRouter  = require('./Routes/Users');

// body parser
server.use(express.json());
server.use('/',userRouter.router);

server.listen(port,()=>{
    console.log(`server started on port ${port}`);
})