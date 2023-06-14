require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const port = 8088;
var jwt = require('jsonwebtoken');

const userRouter  = require('./Routes/Users');
const authenticationRouter  = require('./Routes/Auth');
// console.log(process.env.SERVER_PATH);

async function main() {

  // await mongoose.connect(process.env.SERVER_PATH);
  await mongoose.connect('mongodb://localhost:27017/users');
  console.log("database connected");
}

const auth = (req,res,next)=>{
  try 
  {

      const token = req.get('Authorization').split('Bearer ')[1];
      // console.log(req.get('Authorization'));
      // console.log("token verification."+token);
      const decoded = jwt.verify(token, 'shimbhuSecretIsPayal');
      // console.log("token verification done");
      // console.log(decoded);
     
      if(decoded.email!==null)
      {
         console.log(decoded.email);
         next();
      }
      else{
        // console.log("token verification not done");
        // console.log(decoded);
        res.sendStatus(401);
      }
      
  } 
  catch (error) {
     res.status(401).send(error);
  }
  
}
// body parser
server.use(express.json());
server.use('/auth',authenticationRouter.authRouter);
server.use('/',auth,userRouter.router);


server.listen(port, async ()=>{
     try {
       await main();
       console.log(`server started on port ${port}`);
      
     } catch (error) {
       console.log(error.message);
     }
})