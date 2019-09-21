import bcrypt from 'bcryptjs';

//Schema
import User from '../models/user.model';


export default async (req, res, next) => {
    const { name, email, password } = req.body;

    //Checking if the user is already in db
    try{
        const err = { error: [] }
        const existEmail = await User.findOne({ email: email });
        if(existEmail) {
            err.error.push(`Email: ${email} already exists`)
        } 
        const existName = await User.findOne({ name: name });
        if(existName){
            err.error.push(`User name: ${name} already exists`);
        }
        if(res.locals.objErr){
            err.error.push(res.locals.objErr);
        }
        res.json(err);
        return;
    }catch(e){
        console.log('Khong co loi')
    }

    //Hash password
    const salt =  bcrypt.genSaltSync(10);
    const hashedPassword =  bcrypt.hashSync(password, salt);
    
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    });
    try{
        await user.save();
        //res.send(saved);
    }catch(err) {
        res.status(400).send('User controler');
    }
}