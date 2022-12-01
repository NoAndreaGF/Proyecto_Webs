import {body, param, validationResult} from 'express-validator';

const relCreate = async(req,res,next) =>{
    
    await body('quantity','Cantidad invalida').notEmpty().isInt().run(req);
    await body('price','Precio invalido').notEmpty().isFloat().run(req);
    await body('idProduct', 'Se necesita un producto').notEmpty().isInt().run(req);
    await body('idOrder', 'Se necesita una orden').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const relUpdate = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);
    
    await body('quantity','Cantidad invalida').optional().isInt().run(req);
    await body('price','Precio invalido').optional().isFloat().run(req);
    await body('idProduct', 'Se necesita un producto').notEmpty().isInt().run(req);
    await body('idOrder', 'Se necesita una orden').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const relDelete = async(req,res,next) => {
    await param('id', 'Id invalido').isString().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

export  {
    relCreate,
    relUpdate,
    relDelete
}
