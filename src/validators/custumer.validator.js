import {body, param, validationResult} from 'express-validator';

const custumerCreate = async(req,res,next) => {
    await body('name','Nombre invalido').notEmpty().isLength({max:30}).isString().run(req);
    await body('lastName','Apellido invalido').notEmpty().isLength({max:20}).isString().run(req);
    await body('phone','Numero de telefono invalido').notEmpty().isLength({min:10,max:10}).isString().run(req);
    await body('address','Direccion invalida').notEmpty().isLength({max:100}).isString().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

const custumerUpdate = async(req,res,next) => {
    await param('id', 'Id invalido').isInt().exists().run(req);

    await body('name','Nombre invalido').optional().isLength({max:30}).isString().run(req);
    await body('lastName','Apellido invalido').optional().isLength({max:20}).isString().run(req);
    await body('phone','Numero de telefono invalido').optional().isLength({min:10,max:10}).isString().run(req);
    await body('address','Direccion invalida').optional().isLength({max:100}).isString().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

const custumerDelete = async(req,res,next) => {
    await param('id', 'Id invalido').isInt
    ().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export { custumerCreate, custumerUpdate, custumerDelete };