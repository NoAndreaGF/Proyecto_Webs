import {check, validationResult} from 'express-validator';

const validationRel = async(req,res,next) =>{
    
    await check('quantity','Cantidad invalida').notEmpty().isInt().run(req);
    await check('price','Precio invalido').notEmpty().isFloat().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export  {
    validationRel
}
