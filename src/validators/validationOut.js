import {check, validationResult} from 'express-validator';

const validationOut = async(req,res,next) =>{
    
    await check('quantity','Cantidad invalida').notEmpty().isInt().run(req);
    await check('date','Fecha invalida').notEmpty().isDate().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export default {
    validationOut
}
