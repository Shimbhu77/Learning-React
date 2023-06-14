require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const port = 8888;

const userRouter  = require('./Routes/Users');

async function main() {

  await mongoose.connect(process.env.SERVER_PATH);
  console.log("database connected");
}

server.use(express.json());

server.listen(port, async ()=>{
     try {
       await main();
       console.log(`server started on port ${port}`);
      
     } catch (error) {
       console.log(error.message);
     }
})