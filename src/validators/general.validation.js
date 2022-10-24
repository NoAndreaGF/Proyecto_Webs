import {check, validationResult} from 'express-validator';

export const generalValidation = async(req,res,next) =>{
    
    await check('id','Id invalido').notEmpty().isInt();

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

