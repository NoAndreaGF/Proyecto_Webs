import {check, validationResult} from 'express-validator';

const validationUser = async(req,res,next) =>{
    
    await check('username','Nombre de usuario inválido').notEmpty().isString().isLength({max:30}).run(req);
    await check('password','Contrasena inválida').notEmpty().isString().isLength({min:6}).run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export default {
    validationUser
}
