const model = require('../Model/User');
const user = model.User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.post = async (req, res) => {

    const details = new user(req.body);

    var token = jwt.sign({ email: req.body.email }, 'shimbhuSecretIsPayal');

    const hashPassword = await bcrypt.hash(req.body.password,10);

    details.password=hashPassword;
    details.token = token;

    try {
        const doc = await details.save();
        console.log({ doc });
        res.status(201).json(doc);
    }
    catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

exports.login = async (req, res) => {


    try {

        const details = await user.findOne({ email: req.body.email });
        // const isAuth = details.password === req.body.password ? true : false;
        const isAuth=bcrypt.compareSync(req.body.password,details.password)
        
        if(isAuth)
        {
            var token = jwt.sign({ email: req.body.email }, 'shimbhuSecretIsPayal');
            details.token = token;
            const doc = await details.save();
            console.log({ doc });
            res.status(201).json(doc);
        }
        else
        {
            res.sendStatus(400);
        }
        
    }
    catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}