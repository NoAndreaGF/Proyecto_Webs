import {check, validationResult} from 'express-validator';

const validationOrder = async(req,res,next) =>{
    
    await check('orderDate','Fecha de orden invalida').notEmpty().isDate().run(req);
    await check('deliveryDate','Fecha de entrega invalida').notEmpty().isDate().run(req);
    await check('status','Estado invalido').notEmpty().isString().isLength({max:20}).run(req);
    await check('totalAmount','Monto total invalido').notEmpty().isFloat().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export default {
    validationOrder
}
