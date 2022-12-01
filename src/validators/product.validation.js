import {body, param, validationResult} from 'express-validator';

const productCreate = async(req,res,next) =>{
    
    await body('name','Nombre invalido').notEmpty().isString().isLength({max:30}).run(req);
    await body('brand','Marca invalida').notEmpty().isString().isLength({max:20}).run(req);
    await body('description','Descripcion invalida').notEmpty().isString().isLength({max:100}).run(req);
    await body('price','Precio invalido').notEmpty().isFloat().run(req);
    await body('stock','Inventario invalido').notEmpty().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const productUpdate = async(req,res,next) =>{
    await param('id', 'Id invalido').isString().exists().run(req);
    
    await body('name','Nombre invalido').optional().isString().isLength({max:30}).run(req);
    await body('brand','Marca invalida').optional().isString().isLength({max:20}).run(req);
    await body('description','Descripcion invalida').optional().isString().isLength({max:100}).run(req);
    await body('price','Precio invalido').optional().isFloat().run(req);
    await body('stock','Inventario invalido').optional().isInt().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

const productDelete = async(req,res,next) => {
    await param('id', 'Id invalido').isString().exists().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.status;
    }

    next();
}

export  {
    productCreate,
    productUpdate,
    productDelete
}
