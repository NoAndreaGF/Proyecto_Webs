import {body, param, validationResult} from 'express-validator';

const outCreate = async(req,res,next) =>{
    
    await body('quantity','Cantidad invalida').notEmpty().isInt().run(req);
    await body('date','Fecha invalida').notEmpty().isISO8601().run(req);
    await body('idProduct', 'Se necesita un producto').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

const outUpdate = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);
    
    await body('quantity','Cantidad invalida').optional().isInt().run(req);
    await body('date','Fecha invalida').optional().isISO8601().run(req);
    await body('idProduct', 'Se necesita un producto').optional().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

const outDelete = async(req,res,next) => {
    await param('id', 'Id invalido').isString().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export  {
    outCreate,
    outUpdate,
    outDelete
}
