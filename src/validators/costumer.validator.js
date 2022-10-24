import {check, validationResult} from 'express-validator';


export const validationCostumer = async(req,res,next) =>{
    
    await check('name','Nombre invalido').notEmpty().isLength({max:30}).isString().run(req);
    await check('lastName','Apellido invalido').notEmpty().isLength({max:20}).isString().run(req);
    await check('phone','Numero de telefono invalido').notEmpty().isLength({min:10,max:10}).isString().run(req);
    await check('address','Direccion invalida').notEmpty().isLength({max:100}).isString().run(req);

    let result = validationResult(req);

    if(!result.isEmpty()){
        return res.send(result);
    }

    next();
}

