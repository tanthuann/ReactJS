import Joi from '@hapi/joi';

//LETS VALIDATE
export default async function Validate(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    let objErr;
    try{
        const { error } = await schema.validate( req.body);
        //if(error) return res.status(401).send(error.details[0].message.toUpperCase());
        objErr = error.details[0].message.toUpperCase();
    }catch(err){
        res.send('err');
    }
    res.locals.objErr = objErr;
    next();
}