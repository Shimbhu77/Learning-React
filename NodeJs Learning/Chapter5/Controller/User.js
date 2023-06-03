const fs = require('fs');

const data = JSON.parse(fs.readFileSync('db.json','utf-8'));
const users = data.users;

exports.getAll = (req,res)=>{
    // console.log(data.users);
    res.json(data.users);
}

exports.getOne = (req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    // console.log(user);
    res.json(user);
}

exports.post = (req,res)=>{
    // extract id from req and convert into number
    const user =  req.body;
    users.push(user);
    // console.log(user);
    // console.log(users);
    res.json(user);
}

exports.put =(req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    const updatedUser =  req.body;
    updatedUser.id=id;
    users.splice(id-1,1,updatedUser);
    // console.log(updatedUser);
    res.json(updatedUser);
}

exports.patch = (req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    const updatedUser =  req.body;
    updatedUser.id=id;
    users.splice(id-1,1,{...user,...updatedUser});
    // console.log(updatedUser);
    res.json(updatedUser);
}

exports.remove =(req,res)=>{
    // extract id from req and convert into number
    const id =  +req.params.id;
    const user = users.find((el)=> el.id==id );
    users.splice(id-1,1);
    // console.log(user);
    res.json(user);
}