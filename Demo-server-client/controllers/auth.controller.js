import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Schema
import User from '../models/user.model';

export default async (req, res, next) => {
    const { email, password } = req.body;
    console.log( req.body);
    let objErr = { error: []};
    let validPass;

    if(res.locals.errorValidate){
        objErr.error.push(res.locals.errorValidate);
        res.json(objErr);
        return;
    }

    //Checking if Email exist
    const user = await User.findOne({ email: email });
    
    //Check password
    if(user)
        validPass = bcrypt.compare(password, user.password);

    if(!user || !validPass) 
        objErr.error.push('Email or password is wrong');

    

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.cookie('authToken', token).send(objErr);
}