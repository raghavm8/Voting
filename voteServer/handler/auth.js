const db = require('../model');

exports.login = (req,res,next) => {
    try{

    }
    catch(err)
    {
        next(err);
    }
}

exports.register = async (req,res,next) => {
    try{
         const user = await db.User.create(req.body);
         res.json(user);
    }
    catch(err)
    {
        next(err);
    }
}