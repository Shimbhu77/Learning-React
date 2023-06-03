const express = require('express');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

const morgan = require('morgan');

const server = express();

// MiddleWares 

//body parser of json
server.use(express.json());
server.use(morgan('default'));
//Built-in middleware
server.use(express.static('public'));
// custom middleware 
const myLogger = (req,res,next)=>{

    if(req.body.value == 77)
    {
        console.log("Hii, Shimbhu Kumawat. Success");

        next();
    }
    else
    {
        console.log("Hii, Shimbhu Kumawat. Failure");
    }
    // if(req.query.value == 77)
    // {
    //     console.log("Hii, Shimbhu Kumawat. Success");

    //     next();
    // }
    // else
    // {
    //     console.log("Hii, Shimbhu Kumawat. Failure");
    // }
    
}

// application middleware

// server.use(myLogger);

// API EndPoints 

server.get('/middleware',myLogger,(req,res)=>{
    res.status(202).send(" <h1>Hii !, Payal Kumawat. </h1>");
    // res.json(data.users)
})

server.get('/',(req,res)=>{
    res.status(202).send(" <h1>Hii !, Payal Kumawat. </h1>");
    // res.json(data.users)
})

server.post('/',(req,res)=>{
    //  res.send("I am Post Method.");
    //  res.sendStatus(500);
    res.sendFile('C:/Users/kumaw/Desktop/React Course/React Assignments/Learning-React/NodeJs Learning/Chapter3/nature.jpeg');
})

server.put('/',(req,res)=>{
     res.send("I am Put Method.");
})

server.delete('/',(req,res)=>{
     res.send("I am Delete Method.");
})

server.patch('/',(req,res)=>{
     res.send("I am Patch Method.");
})


server.listen(8888,()=>{
    console.log("server started...");
});