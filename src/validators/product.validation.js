import {check, validationResult} from 'express-validator';

const validationProduct = async(req,res,next) =>{
    
    await check('name','Nombre invalido').notEmpty().isString().isLength({max:30}).run(req);
    await check('brand','Marca invalida').notEmpty().isString().isLength({max:20}).run(req);
    await check('description','Descripcion invalida').notEmpty().isString().isLength({max:100}).run(req);
    await check('price','Precio invalido').notEmpty().isFloat().run(req);
    await check('stock','Inventario invalido').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

export  {
    validationProduct
}
