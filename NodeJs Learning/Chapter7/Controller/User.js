const model = require('../Model/User');
const user = model.User;

exports.getAll = async (req,res)=>{
    
    const users = await user.find({});
    console.log("all users got ");
    res.json(users);
}

exports.getOne = async (req,res)=>{
    const id =  req.params.id;
    const details = await user.findById(id);
    res.json(details);
}

// exports.post =  async(req,res)=>{

//     const details = new user(req.body);
    
//     try{
//         const doc = await details.save();
//         console.log({ doc });
//         res.status(201).json(doc);
//     }
//     catch(err)
//     {
//         console.error(err);
//         res.status(400).json(err);
//     }
// }

exports.put = async(req,res)=>{
    
    const id =  req.params.id;
    
    
    try{
        const doc = await user.findOneAndReplace({_id:id},req.body,{new:true});
        console.log({ doc });
        res.status(201).json(doc);
    }
    catch(err)
    {
        console.error(err);
        res.status(400).json(err);
    }
}

exports.patch = async (req,res)=>{
    const id =  req.params.id;
    
    
    try{
        const doc = await user.findOneAndUpdate({_id:id},req.body,{new:true});
        console.log({ doc });
        res.status(201).json(doc);
    }
    catch(err)
    {
        console.error(err);
        res.status(400).json(err);
    }
}

exports.remove = async(req,res)=>{
    const id =  req.params.id;
    
    try{
        const doc = await user.findOneAndDelete({_id:id});
        console.log({ doc });
        res.status(201).json(doc);
    }
    catch(err)
    {
        console.error(err);
        res.status(400).json(err);
    }
}