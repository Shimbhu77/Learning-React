

const express = require('express');
const mongoose = require('mongoose');
const server = express();
const port = 8888;

const userRouter  = require('./Routes/Users');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/users');
  console.log("database connected");
}


// body parser
server.use(express.json());
server.use('/',userRouter.router);

server.listen(port,()=>{
    console.log(`server started on port ${port}`);
})