import {body, param, validationResult} from 'express-validator';

const orderCreate = async(req,res,next) =>{
    
    await body('orderDate','Fecha de orden invalida').notEmpty().isISO8601().run(req);
    await body('deliveryDate','Fecha de entrega invalida').notEmpty().isISO8601().run(req);
    await body('status','Estado invalido').notEmpty().isString().isLength({max:20}).run(req);
    await body('totalAmount','Monto total invalido').notEmpty().isFloat().run(req);
    await body('idCustomer', 'Se necesita un cliente').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const orderUpdate = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);
    
    await body('orderDate','Fecha de orden invalida').optional().isISO8601().run(req);
    await body('deliveryDate','Fecha de entrega invalida').optional().isISO8601().run(req);
    await body('status','Estado invalido').optional().isString().isLength({max:20}).run(req);
    await body('totalAmount','Monto total invalido').optional().isFloat().run(req);
    await body('idCustomer', 'Se necesita un cliente').optional().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const orderDelete = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

export  {
    orderCreate,
    orderUpdate,
    orderDelete
}
