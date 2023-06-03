const express = require('express');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('db.json','utf-8'));
const users = data.users;

const server = express();
const port = 8888;
// body parser
server.use(express.json());

server.get('/users',(req,res)=>{
    // console.log(data.users);
    res.json(data.users);
})

server.get('/users/:id',(req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    console.log(user);
    res.json(user);
})
server.post('/users',(req,res)=>{
    // extract id from req and convert into number
    const user =  req.body;
    users.push(user);
    console.log(user);
    console.log(users);
    res.json(user);
})

server.put('/users/:id',(req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    const updatedUser =  req.body;
    updatedUser.id=id;
    users.splice(id-1,1,updatedUser);
    console.log(updatedUser);
    res.json(updatedUser);
})

server.patch('/users/:id',(req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    const updatedUser =  req.body;
    updatedUser.id=id;
    users.splice(id-1,1,{...user,...updatedUser});
    console.log(updatedUser);
    res.json(updatedUser);
})

server.delete('/users/:id',(req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    users.splice(id-1,1);
    console.log(user);
    res.json(user);
})



server.listen(port,()=>{
    console.log(`server started on port ${port}`);
})