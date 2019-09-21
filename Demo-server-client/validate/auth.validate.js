import Joi from '@hapi/joi';

//LETS VALIDATE
export default async function Validate(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    const { error } = await schema.validate( req.body);
    try{
        // console.log(req.body);
        //if(error) return res.status(400).send(error.details[0].message.toUpperCase());
    }catch(err){
        res.send('err');
    }
    if(error)
        res.locals.errorValidate = error.details[0].message.toUpperCase();
    next();
}   