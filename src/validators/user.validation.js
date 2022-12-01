import {body, param, validationResult} from 'express-validator';

const user = async(req,res,next) =>{
    
    await body('username','Nombre de usuario inválido').notEmpty().isString().isLength({max:30}).run(req);
    await body('password','Contrasena inválida').notEmpty().isString().isLength({min:6}).run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const userUpdate = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);
    
    await body('username','Nombre de usuario inválido').optional().isString().isLength({max:30}).run(req);
    await body('password','Contrasena inválida').optional().isString().isLength({min:6}).run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const userDelete = async(req,res,next) => {
    await param('id', 'Id invalido').isString().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

export  {
    user,
    userUpdate,
    userDelete
}
