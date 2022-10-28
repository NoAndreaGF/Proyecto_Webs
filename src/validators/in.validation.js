import {body, param, validationResult} from 'express-validator';

const inCreate = async(req,res,next) =>{
    
    await body('quantity','Cantidad invalida').notEmpty().isInt().run(req);
    await body('date','Fecha invalida').notEmpty().isISO8601().run(req);
    await body('idProduct', 'Se necesita un producto').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

const inUpdate = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);
    
    await body('quantity','Cantidad invalida').optional().isInt().run(req);
    await body('date','Fecha invalida').optional().isIso().run(req);
    await body('idProduct', 'Se necesita un producto').optional().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

const inDelete = async(req,res,next) => {
    await param('id', 'Id invalido').isString().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export  {
    inCreate,
    inUpdate,
    inDelete
}
